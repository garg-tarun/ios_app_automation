
import { expect, driver } from '@wdio/globals';
import DemoApp from "../../apps/DemoApp";

describe('Forms Screen Test', () => {
    afterEach( async() => {
        await driver.removeApp(DemoApp.getBundleIdentifier());
        await driver.installApp(DemoApp.getAppPath());
        await driver.activateApp(DemoApp.getBundleIdentifier());
    });    

    it('Verify Form view workflow', async()=>{
        await DemoApp.goToFormsScreen();
        await DemoApp.getFormsScreen().verifyFormsScreenElements();
        // Input Text Field Test
        const input = "Welcome To Demo By Tarun";
        await DemoApp.getFormsScreen().enterText(input);
        await DemoApp.getFormsScreen().pause(2000);
        await expect(await DemoApp.getFormsScreen().resultText.getAttribute('value')).toEqual(input);

        // Switch Button Test
        await DemoApp.getFormsScreen().clickSwitchButton();
        await DemoApp.getFormsScreen().checkSwitchButtonvalue("1");
        await DemoApp.getFormsScreen().checkSwitchButtonText("Click to turn the switch OFF");

        await DemoApp.getFormsScreen().clickSwitchButton();
        await DemoApp.getFormsScreen().checkSwitchButtonvalue("0");
        await DemoApp.getFormsScreen().checkSwitchButtonText("Click to turn the switch ON");
        
        // Dropdown test
        await DemoApp.getFormsScreen().clickDropdownButton();
        const value = "This app is awesome";
        await DemoApp.getFormsScreen().setPickerValue(value);
        await DemoApp.getFormsScreen().clickDoneLink();
        await DemoApp.getFormsScreen().checkDropDownValue(value);
        await DemoApp.getFormsScreen().pause(1000);

        // Button Test
        await DemoApp.getFormsScreen().clickOnActiveButton();
        await DemoApp.getFormsScreen().waitUntilActiveButton(1000);
        await expect(DemoApp.getFormsScreen().thisButtonIsActiveText).toBeDisplayed();
        await expect(DemoApp.getFormsScreen().askMeLaterButton).toBeDisplayed();
        await expect(DemoApp.getFormsScreen().cancelButton).toBeDisplayed();
        await expect(DemoApp.getFormsScreen().okButton).toBeDisplayed();

        await DemoApp.getFormsScreen().okButton.click();
    
    });
});
