
import BaseScreen from './BaseScreen';

class HomeScreen extends BaseScreen {

  get webdriverIOLogo() {
    return $('~assets/src/assets/webdriverio.png')
  }

  get webdriverText() {
    return $('~//XCUIElementTypeOther[@name="WEBDRIVER"]');
  }
  
  get webdriverIoIcon() {
    return $('~assets/src/assets/io.png');
  }

  get homeScreenMessage() {
    return $('~Demo app for the appium-boilerplate');
  }

  get homeButton() {
    return $('~Home');
  }

  get webviewButton() {
    return $('~Webview');
  }

  get loginButton() {
    return $('~Login');
  }

  get formsButton() {
    return $('~Forms');
  }

  get swipeButton() {
    return $('~Swipe');
  }

  get dragButton() {
    return $('~Drag');
  }

  async goToHomeScreen() {
    await this.homeButton.click();
  }

  async goToWebviewScreen() {
    await this.webviewButton.click();
  }

  async goToLoginScreen() {
    await this.loginButton.click();
  }

  async goToFormsScreen() {
    await this.formsButton.click();
  }

  async goToSwipeScreen() {
    await this.swipeButton.click();
  }

  async goToDragScreen() {
    await this.dragButton.click();
  }

  async verifyHomeScreenElements() {
    expect(this.webdriverIOLogo.isDisplayed()).toBeTruthy();
    expect(this.webdriverText.isDisplayed()).toBeTruthy();
    expect(this.webdriverIoIcon.isDisplayed()).toBeTruthy();
    expect(this.homeScreenMessage.isDisplayed()).toBeTruthy();

    expect(this.homeButton.isDisplayed()).toBeTruthy();
    expect(this.webviewButton.isDisplayed()).toBeTruthy();
    expect(this.loginButton.isDisplayed()).toBeTruthy();
    expect(this.formsButton.isDisplayed()).toBeTruthy();
    expect(this.swipeButton.isDisplayed()).toBeTruthy();
    expect(this.dragButton.isDisplayed()).toBeTruthy();

  }
}

export default new HomeScreen();