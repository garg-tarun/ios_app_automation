import { expect, driver } from '@wdio/globals';
import DemoApp from "../../apps/DemoApp";

describe('Webview Demo Test', () => {
    afterEach( async() => {
        await driver.removeApp(DemoApp.getBundleIdentifier());
        await driver.installApp(DemoApp.getAppPath());
        await driver.activateApp(DemoApp.getBundleIdentifier());
    });

    it('Switchover from native to webview & webview to native', async()=>{
        const currentCtx = await driver.getContext();

        await DemoApp.goToWebviewScreen();
        await DemoApp.waitFoMultipleContexts(50000);
        const ctxList = await driver.getContexts();

        const otherContexts = ctxList.filter(ctx => ctx !== currentCtx);
        expect(otherContexts.length).toBeGreaterThan(0);
        await driver.switchContext(otherContexts[0]);

        await DemoApp.getWebviewScreen().verifyWebviewScreenElements();
        await DemoApp.getWebviewScreen().goToGetStartedPage();
        await DemoApp.getWebviewScreen().pause(2000);

        await expect(DemoApp.getWebviewScreen().gettingStartedHeader).toBeDisplayed();

        await driver.switchContext(currentCtx);
        await DemoApp.getHomeScreen().goToHomeScreen();
        await DemoApp.getWebviewScreen().pause(2000);
        await DemoApp.getHomeScreen().verifyHomeScreenElements();
    });
});
