
import { expect, driver } from '@wdio/globals';
import BaseScreen from './BaseScreen';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

class LoginScreen extends BaseScreen {

  get title() {
    return $('//XCUIElementTypeStaticText[@name="Login / Sign up Form"]');
  }

  get loginTab() {
    return $('~button-login-container');
  }

  get signupTab() {
    return $('~button-sign-up-container');
  }

  get emailInput() {
    return $('~input-email');
  }

  get passwordInput() {
    return $('~input-password');
  }

  get repeatPasswordInput() {
    return $('~input-repeat-password');
  }

  get loginButton() {
    return $('~button-LOGIN');
  }

  get signupButton() {
    return $('~button-SIGN UP');
  }

  get loginViewMessage() {
    const msg = '~When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login.';
    return $(msg);
  }

  async enterEmail(email: string) {
    await this.emailInput.setValue(email);
  }

  async enterPassword(password: string) {
    await this.passwordInput.setValue(password);
  }

  async enterRepeatPassword(password: string) {
    await this.repeatPasswordInput.setValue(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async clickSignupButton() {
    await this.signupButton.click();
  }

  async goToLoginView() {
    await this.loginTab.click();
  }

  async goToSignupView() {
    await this.signupTab.click();
  }

  async verifyLoginViewElements() {
    expect(this.loginButton.isDisplayed()).toBeTruthy();
    expect(this.loginViewMessage.isDisplayed()).toBeTruthy();

    let placeholderValue;
    placeholderValue = await this.emailInput.getAttribute('value');
    expect(placeholderValue).toBe('Email');

    placeholderValue = await this.passwordInput.getAttribute('value');
    expect(placeholderValue).toBe('Password');
  }

  async verifySignupViewElements() {
    expect(this.signupButton.isDisplayed()).toBeTruthy();
    expect(this.emailInput.isDisplayed()).toBeTruthy();
    expect(this.passwordInput.isDisplayed()).toBeTruthy();
    expect(this.repeatPasswordInput.isDisplayed()).toBeTruthy();

    let placeholderValue;
    placeholderValue = await this.emailInput.getAttribute('value');
    expect(placeholderValue).toBe('Email');

    placeholderValue = await this.passwordInput.getAttribute('value');
    expect(placeholderValue).toBe('Password');

    placeholderValue = await this.repeatPasswordInput.getAttribute('value');
    expect(placeholderValue).toBe('Confirm password');
  }

  async verifyLoginScreenElements() {
    expect(this.title.isDisplayed()).toBeTruthy();
    expect(this.loginTab.isDisplayed()).toBeTruthy();
    expect(this.signupTab.isDisplayed()).toBeTruthy();
    expect(this.loginButton.isDisplayed()).toBeTruthy();
  }

  async performLogin(email: string, password:string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.loginButton.click();
  }

  async performSignup(email:string, password:string) {
    await this.enterEmail(email);
    await driver.pause(300);
    await this.enterPassword(password);
    await driver.pause(300);
    await this.enterRepeatPassword(password);
    await driver.pause(300);
    await this.signupButton.click();    
  }

  async verifyLoginIsSuccessful() {
    await expect(LoginModal.successTitle.isDisplayed).toBeTruthy();
    await expect(LoginModal.successMessage.isDisplayed).toBeTruthy();
  }

  async verifySignupIsSuccessful() {
    await expect(SignupModal.successTitle.isDisplayed).toBeTruthy();
    await expect(SignupModal.successMessage.isDisplayed).toBeTruthy();
  }

  async dismissLoginModal() {
    await LoginModal.clickOkButton();
  }

  async dismissSignupModal() {
    await SignupModal.clickOkButton();
  }

  async waitUntilLoginIsCompleted(timeout: number) {
    await LoginModal.successTitle.waitForDisplayed({timeout: timeout});
  }
  
  async waitUntilSignupIsCompleted(timeout: number) {
    await SignupModal.successTitle.waitForDisplayed({timeout: timeout});
  }
}

export default new LoginScreen();