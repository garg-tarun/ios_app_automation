
import BaseScreen from './BaseScreen';

class FormsScreen extends BaseScreen {
  get inputFieldLabel() {
    return $('~Input field:');
  }

  get inputFieldInput() {
    return $('~text-input');
  }
  
  get youHaveTypedLabel () {
    return $('~You have typed:');
  }

  get resultText() {
    return $('~input-text-result');
  }

  get switchLabel() {
    return $('~Switch:');
  }
  
  get switchButton() {
    return $('~switch');
  }

  get switchButtonText() {
    return $('~switch-text');
  }

  get title() {
    return $('//XCUIElementTypeStaticText[@name="Form components"]');
  }

  get dropDownLabel() {
    return $('~Dropdown:');
  }
  
  get dropDownButton() {
    return $('~Dropdown');
  }

  get dropDownValue() {
    return $('~text_input');
  }

  get dropdownPicker() {
    return $('//XCUIElementTypePickerWheel[@value="Select an item..."]');
  }

  get doneLink() {
    return $('-ios predicate string:name == "done_button"');
  }

  get buttonsText() {
    return $('~Buttons');
  }

  get activeButton() {
    return $('//XCUIElementTypeOther[@name="button-Active"]');
  }

  get inactiveButton() {
    return $('//XCUIElementTypeOther[@name="button-Inactive"]');
  }

  get thisButtonIsActiveText() {
    return $('~This button is active');
  }

  get askMeLaterButton(){
    return $('~Ask me later');
  }

  get cancelButton(){
    return $('~Cancel');
  }
  
  get okButton(){
    return $('~OK');
  }

  async enterText(input:string) {
    await this.inputFieldInput.setValue(input);
    await this.pause(300);
  }

  async setPickerValue(value:string) {
    await this.dropdownPicker.addValue(value);
    await this.pause(300);
  }

  async clickSwitchButton() {
    await this.switchButton.click();
  }

  async clickDropdownButton() {
    await this.dropDownButton.click();
  }

  async clickDoneLink() {
    await this.doneLink.click();
  }

  async clickOnActiveButton() {
    await this.activeButton.click();
  }

  async checkSwitchButtonvalue(value:string) {
    const msg = await this.switchButton.getAttribute('value');
    await expect(msg).toEqual(value); 
  }

  async checkSwitchButtonText(message:string) {
    const msg = await this.switchButtonText.getAttribute('value');
    await expect(msg).toEqual(message); 
  }

  async checkDropDownValue(value: string) {
    const dropDownValue = await this.dropDownValue.getAttribute('value');
    await expect(dropDownValue).toEqual(value);
  }

  async waitUntilActiveButton(timeout: number) {
    await this.thisButtonIsActiveText.waitForDisplayed({timeout: timeout});
  }

  async verifyFormsScreenElements() {
    expect(this.title.isDisplayed()).toBeTruthy();
    expect(this.inputFieldLabel.isDisplayed()).toBeTruthy();
    expect(this.inputFieldInput.isDisplayed()).toBeTruthy();

    const placeholderValue = await this.inputFieldInput.getAttribute('value');
    expect(placeholderValue).toBe('Type something');

    expect(this.youHaveTypedLabel.isDisplayed()).toBeTruthy();


    expect(this.switchLabel.isDisplayed()).toBeTruthy();
    expect(this.switchButton.isDisplayed()).toBeTruthy();
    expect(this.switchButtonText.isDisplayed()).toBeTruthy();

    await this.checkSwitchButtonText('Click to turn the switch ON');

    expect(this.dropDownLabel.isDisplayed()).toBeTruthy();
    expect(this.dropDownButton.isDisplayed()).toBeTruthy();

    expect(this.activeButton.isDisplayed()).toBeTruthy();
    expect(this.inactiveButton.isDisplayed()).toBeTruthy();
  }

}

export default new FormsScreen();
