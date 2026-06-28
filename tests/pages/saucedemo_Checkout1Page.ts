import { expect, type Locator, type Page } from '@playwright/test';

export class Checkout1Page {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly continueButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    }   

    async sendInformation() {
        await this.firstName.fill('Josue');
        await this.lastName.fill('Aldaco');
        await this.postalCode.fill('22830');
        await this.continueButton.click();
    }
}