class LoginModal {
  async isVisible(): Promise<boolean> {
    return this.successTitle.isDisplayed();
  }

  get successTitle() {
    return $('//XCUIElementTypeStaticText[@name="Success"]');
  }

  get successMessage() {
    return $("~You are logged in!");
  }

  get okButton() {
    return $('//XCUIElementTypeButton[@name="OK"]');
  }

  async clickOkButton() {
    if (await this.okButton.isDisplayed()) {
      await this.okButton.click();
    }
  }
}

export default new LoginModal();
