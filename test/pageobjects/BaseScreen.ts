import { driver } from "@wdio/globals";


export default class BaseScreen {
 
  async pause(ms: number) {
    await driver.pause(ms);
  }

  async performClick(element: WebdriverIO.Element) {
    await element.click();
  }

  async swipeLeftOnScreen(y_percent_from_top:number = 80): Promise<void> {
    const { width, height } = await driver.getWindowRect();
    const startX = width * 0.9;
    const endX = width * 0.1;
    const y = (height * y_percent_from_top)/100;

    await driver.performActions([
      {
        type: "pointer",
        id: "swipeLeft",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: startX, y },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 100 },
          { type: "pointerMove", duration: 300, x: endX, y },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);

    await driver.releaseActions();
  }

  async swipeUpOnScreen(x_percent_from_left: number = 30): Promise<void> {
    const { width, height } = await driver.getWindowRect();
    const startY = height * 0.9;
    const endY = height * 0.2;
    const x = (width * x_percent_from_left)/100;

    await driver.performActions([
      {
        type: "pointer",
        id: "swipeUp",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x, y: startY },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 100 },
          { type: "pointerMove", duration: 500, x, y: endY },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
    await driver.releaseActions();
  }

}
