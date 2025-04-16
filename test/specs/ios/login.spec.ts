import { driver } from '@wdio/globals';
import DemoApp from "../../apps/DemoApp";

describe('Login Screen Test', () => {
    afterEach( async() => {
        await driver.removeApp(DemoApp.getBundleIdentifier());
        await driver.installApp(DemoApp.getAppPath());
        await driver.activateApp(DemoApp.getBundleIdentifier());
    });

    it('Verify login view workflow', async()=>{
        await DemoApp.goToLoginScreen();
        await DemoApp.getLoginScreen().verifyLoginScreenElements();
        await DemoApp.getLoginScreen().goToLoginView();
        await DemoApp.getLoginScreen().verifyLoginViewElements();

        const email = 'sydqa@yopmail.com';
        const password = 'Welcome123';
        await DemoApp.getLoginScreen().performLogin(email, password);
        await DemoApp.getLoginScreen().waitUntilLoginIsCompleted(5000);
        await DemoApp.getLoginScreen().verifyLoginIsSuccessful();
        await DemoApp.getLoginScreen().dismissLoginModal();
    
    });

    it('Verify Signup view workflow', async()=>{
        await DemoApp.goToLoginScreen();
        await DemoApp.getLoginScreen().verifyLoginScreenElements();
        await DemoApp.getLoginScreen().goToSignupView();
        await DemoApp.getLoginScreen().verifySignupViewElements();

        const email = 'sydqa@yopmail.com';
        const password = 'Welcome123';
        await DemoApp.getLoginScreen().performSignup(email, password);
        await DemoApp.getLoginScreen().waitUntilSignupIsCompleted(5000);
        await DemoApp.getLoginScreen().verifySignupIsSuccessful();
        await DemoApp.getLoginScreen().dismissSignupModal();
    
    });    
});
