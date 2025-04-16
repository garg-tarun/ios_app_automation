import BaseScreen from "./BaseScreen";

class DragScreen extends BaseScreen {
  async dragAsset(assetId: string) {
    return $(`~drag-${assetId}`);
  }

  async dropAsset(assetId: string) {
    return $(`~drop-${assetId}`);
  }

  get title() {
    return $('//XCUIElementTypeStaticText[@name="Drag and Drop"]');
  }

  get congratulationsTextMessage() {
    return $('//XCUIElementTypeStaticText[@name="Congratulations"]');
  }

  get retryTextMessage() {
    return $(
      '//XCUIElementTypeStaticText[@name="You made it, click retry if you want to try it again."]'
    );
  }

  get retryButton() {
    return $('//XCUIElementTypeOther[@name="Retry"]');
  }

  get renewButton(){
    return $('//XCUIElementTypeOther[@name="renew"]');
  }

  getAssetIdsList() {
    return [
        'c1', 'c2', 'c3',
        'l1', 'l2', 'l3',
        'r1', 'r2', 'r3',
    ];
  }

  async clickRetryButton() {
    await this.retryButton.click();
  }

  async performDragDrop(assetId: string) {
    const sourceElement = await this.dragAsset(assetId);
    const targetElement = await this.dropAsset(assetId);
    await sourceElement.dragAndDrop(targetElement);
  }

  async verifyDragScreenElements() {
    await expect(this.title).toBeDisplayed();
    await expect(this.renewButton).toBeDisplayed();
    const assetIdsList = this.getAssetIdsList();
    for (const assetId of assetIdsList) {
        await expect(await this.dragAsset(assetId)).toBeDisplayed();
        await expect(await this.dropAsset(assetId)).toBeDisplayed();
    }
  }

  async verifyCongratulationsScreenElements() {
    await expect(this.congratulationsTextMessage).toBeDisplayed();
    await expect(this.retryTextMessage).toBeDisplayed();
    await expect(this.retryButton).toBeDisplayed();
  }
}

export default new DragScreen();
