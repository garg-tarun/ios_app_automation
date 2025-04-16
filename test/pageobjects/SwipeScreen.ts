
import BaseScreen from './BaseScreen';
import { driver } from '@wdio/globals'

export type Direction = 'down' | 'up' | 'left' | 'right';

class SwipeScreen extends BaseScreen {
  get title() {
    return $('//XCUIElementTypeStaticText[@name="Swipe horizontal"]');
  }

  get swipeVerticalMessage() {
    return $('//XCUIElementTypeStaticText[@name="Or swipe vertical to find what I\'m hiding."]');
  }

  get webdriverIOLogo() {
    return $('//XCUIElementTypeImage[@name="assets/src/assets/webdriverio.png"]');
  }

  get youFoundMeText() {
    return $('//XCUIElementTypeStaticText[@name="You found me!!!"]');
  }

  getCardTitleList() {
    return [
        'FULLY OPEN SOURCE',
        'GREAT COMMUNITY',
        'JS.FOUNDATION',
        'SUPPORT VIDEOS',
        'EXTENDABLE',
        'COMPATIBLE',
    ];
  }

  async cardTitle(title: string) {
    return $(`//XCUIElementTypeStaticText[@name="${title}"]`)
  }

  async verifyCardTitle(title:string) {
    await expect(await this.cardTitle(title)).toBeDisplayed();
  }

  async verifySwipeScreenElements() {
    await expect(this.title).toBeDisplayed();
    await expect(this.swipeVerticalMessage).toBeDisplayed();
  }

  async performSwipe(direction: Direction, title: string) {
    await driver.swipe({
        direction: direction, 
        duration: 1000,
        percent: 0.8,
        scrollableElement: await this.cardTitle(title),
    });
  }

  async verifyCardTitleAfterSwipeLeftAction() {
    const cardTitleList = this.getCardTitleList();
    for(let i = 0; i < cardTitleList.length -1; i++ ) {
        const currTitle = cardTitleList[i];
        const nextTitle = cardTitleList[i+1];
        await this.performSwipe('left', currTitle);
        await expect( await this.cardTitle(nextTitle)).toBeDisplayed(); 
    }
  }

  async verifyCardTitleAfterSwipeRightAction() {
    const cardTitleList = this.getCardTitleList();
    for(let i = cardTitleList.length-1; i >=1;  i-- ) {
        const currTitle = cardTitleList[i];
        const nextTitle = cardTitleList[i-1];
        await this.performSwipe('right', currTitle);
        await expect( await this.cardTitle(nextTitle)).toBeDisplayed(); 
    }
  }

}

export default new SwipeScreen();
