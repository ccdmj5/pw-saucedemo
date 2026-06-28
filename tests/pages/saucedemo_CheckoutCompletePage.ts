import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutCompletePage {
    readonly page: Page;
    readonly backHomeButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
    }   

    async backHome() {
        await this.backHomeButton.click();
    }
}