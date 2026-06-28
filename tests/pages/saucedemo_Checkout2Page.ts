import { expect, type Locator, type Page } from '@playwright/test';

export class Checkout2Page {
    readonly page: Page;
    readonly finishButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.finishButton = page.locator('[data-test="finish"]');
    
    }   

    async finishSendingInformation() {
        await this.finishButton.click();
    }
}