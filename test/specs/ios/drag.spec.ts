import { driver } from '@wdio/globals';
import DemoApp from "../../apps/DemoApp";

describe('Drag Screen Test', () => {
    afterEach( async() => {
        await driver.removeApp(DemoApp.getBundleIdentifier());
        await driver.installApp(DemoApp.getAppPath());
        await driver.activateApp(DemoApp.getBundleIdentifier());
    });     

    it('Verify drag drop workflow', async () => {
        await DemoApp.goToDragScreen();
        await DemoApp.getDragScreen().verifyDragScreenElements();

        const assetIdsList = DemoApp.getDragScreen().getAssetIdsList();
        for(const assetId of assetIdsList ) {
            await DemoApp.getDragScreen().performDragDrop(assetId); 
        }
        await DemoApp.getDragScreen().pause(2000); 
        await DemoApp.getDragScreen().verifyCongratulationsScreenElements(); 
        await DemoApp.getDragScreen().clickRetryButton(); 
    });
});
