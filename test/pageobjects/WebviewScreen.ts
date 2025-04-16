import BaseScreen from './BaseScreen';

class WebviewScreen extends BaseScreen {
  get subtitle() {
    return $('.hero__subtitle');
  }

  get getStartedLink() {
    return $("//a[text()='Get Started']");
  }

  get watchOnYoutubeLink() {
    return $("//a[text()='Watch on YouTube']");
  }

  get gettingStartedHeader() {
    return $("//h1[text()='Getting Started']");
  }

  async goToGetStartedPage() {
    await this.getStartedLink.click();
  }

  async verifyWebviewScreenElements() {
    await expect(this.subtitle).toBeDisplayed();

    const subtitle = 'Next-gen browser and mobile automation test framework for Node.js';
    await expect(await this.subtitle.getText()).toEqual(subtitle);

    await expect(this.getStartedLink).toBeDisplayed();
    await expect(this.watchOnYoutubeLink).toBeDisplayed();
  }

}

export default new WebviewScreen();
