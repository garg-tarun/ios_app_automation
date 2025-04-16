import { expect, driver } from '@wdio/globals';
import DemoApp from "../../apps/DemoApp";

describe('Swipe Screen Test', () => {
    afterEach( async() => {
        await driver.removeApp(DemoApp.getBundleIdentifier());
        await driver.installApp(DemoApp.getAppPath());
        await driver.activateApp(DemoApp.getBundleIdentifier());
    });

    it('Verify Swipe View Left<->Right workflow', async()=>{
        await DemoApp.goToSwipeScreen();
        await DemoApp.getSwipeScreen().verifySwipeScreenElements();
        await DemoApp.getSwipeScreen().verifyCardTitleAfterSwipeLeftAction();
        await DemoApp.getSwipeScreen().verifyCardTitleAfterSwipeRightAction();
        await DemoApp.getSwipeScreen().pause(2000);
    });

    it('Verify Swipe View Vertical workflow', async()=>{
        await DemoApp.goToSwipeScreen();
        await DemoApp.getSwipeScreen().verifySwipeScreenElements();
        const x_percent_from_left = 30;
        await DemoApp.getSwipeScreen().swipeUpOnScreen(x_percent_from_left);
        await DemoApp.getSwipeScreen().pause(2000);
        await expect(DemoApp.getSwipeScreen().webdriverIOLogo).toBeDisplayed();
        await expect(DemoApp.getSwipeScreen().youFoundMeText).toBeDisplayed();
    });
});
