class SignupModal {
  
    async isVisible(): Promise<boolean> {
      return this.successTitle.isDisplayed();
    }
  
    get successTitle() {
        return $('//XCUIElementTypeStaticText[@name="Signed Up!"]');
    }
    
    get successMessage() {
        return $('~You successfully signed up!');
    }

    get okButton() {
        // ~OK
        return $('//XCUIElementTypeButton[@name="OK"]');
    }

    async clickOkButton() {
        if (await this.okButton.isDisplayed()) {
          await this.okButton.click();
        }
      }    

  }

  export default new SignupModal();