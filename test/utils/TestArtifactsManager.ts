import * as fs from 'fs';
import * as path from 'path';
import { addAttachment } from '@wdio/allure-reporter';
import { driver } from '@wdio/globals';
import { Buffer } from 'buffer';

export class TestArtifactsManager {
  private static videoDir = path.resolve(process.cwd(), './videos');

  /**
   * Ensures that the videos directory exists.
   */
  private static ensureVideoDirExists(): void {
    if (!fs.existsSync(this.videoDir)) {
      fs.mkdirSync(this.videoDir, { recursive: true });
    }
  }

  /**
   * Starts screen recording.
   */
  public static async startVideoRecording(): Promise<void> {
    await driver.startRecordingScreen();
  }

  /**
   * Stops screen recording, saves the video, and attaches it to the Allure report.
   * @param testTitle The title of the test.
   */
  public static async stopVideoRecording(testTitle: string, passed: boolean): Promise<void> {
    const video = await driver.stopRecordingScreen();
    const decodedVideo = Buffer.from(video, 'base64');

    this.ensureVideoDirExists();
    const sanitizedTitle = testTitle.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
    const filePath = path.join(this.videoDir, `${sanitizedTitle}.mp4`);

    fs.writeFileSync(filePath, decodedVideo);
    if(!passed) {
      addAttachment('Test Video', decodedVideo, 'video/mp4');
    }
  }

  /**
   * Captures a screenshot and attaches it to the Allure report.
   * @param name Optional name for the screenshot attachment.
   */
  public static async captureScreenshot(name = 'Screenshot'): Promise<void> {
    const sanitizedName = name.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
    const screenshot = await browser.takeScreenshot();
    addAttachment(sanitizedName, Buffer.from(screenshot, 'base64'), 'image/png');
  }

  /**
   * Retrieves Appium server logs and attaches them to the Allure report.
   */
  public static async attachAppiumLogs(): Promise<void> {
    interface appiumLogEntry {
      timestamp: number;
      level: string;
      message: string;
    };

    const logs = await driver.getLogs('server') as appiumLogEntry[];
    const logMessages = logs.map(log => `${new Date(log.timestamp).toISOString()} [${log.level}]: ${log.message}`).join('\n');
    addAttachment('Appium Logs', logMessages, 'text/plain');
  }
}

