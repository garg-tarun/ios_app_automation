import HomeScreen from "../pageobjects/HomeScreen";
import LoginScreen from "../pageobjects/LoginScreen";
import WebviewScreen from "../pageobjects/WebviewScreen";
import FormsScreen from "../pageobjects/FormsScreen";
import SwipeScreen from "../pageobjects/SwipeScreen";
import DragScreen from "../pageobjects/DragScreen";
import { driver } from "@wdio/globals";
import * as path from 'path';

class DemoApp {
  appBundleIdentifier = "org.reactjs.native.example.wdiodemoapp";
  

  homeScreen = HomeScreen;
  loginScreen = LoginScreen;
  formsScreen = FormsScreen;
  webviewScreen = WebviewScreen;
  swipeScreen = SwipeScreen;
  dragScreen = DragScreen;

  getHomeScreen(): typeof HomeScreen {
    return this.homeScreen;
  }

  getLoginScreen(): typeof LoginScreen {
    return this.loginScreen;
  }

  getFormsScreen(): typeof FormsScreen {
    return this.formsScreen;
  }

  getSwipeScreen(): typeof SwipeScreen {
    return this.swipeScreen;
  }

  getDragScreen(): typeof DragScreen {
    return this.dragScreen;
  }

  getWebviewScreen() {
    return this.webviewScreen;
  }

  getBundleIdentifier() {
    return this.appBundleIdentifier;
  }

  getAppPath() {
    // eslint-disable-next-line no-undef
    return path.join(process.cwd(), 'apps/ios/wdiodemoapp.app');
  }

  async goToLoginScreen() {
    await this.getHomeScreen().goToLoginScreen();
  }

  async goToFormsScreen() {
    await this.getHomeScreen().goToFormsScreen();
  }

  async goToSwipeScreen() {
    await this.getHomeScreen().goToSwipeScreen();
  }

  async goToDragScreen() {
    await this.getHomeScreen().goToDragScreen();
  }

  async goToWebviewScreen() {
    await this.getHomeScreen().goToWebviewScreen();
  }

  async waitFoMultipleContexts(timeout: number = 50000) {
    await driver.waitUntil(
      async () => {
        const availableContexts = await driver.getContexts();
        return availableContexts.length > 1;
      },
      { timeout: timeout, timeoutMsg: "Failed to get multiple contexts" }
    );
  }
}

export default new DemoApp();
