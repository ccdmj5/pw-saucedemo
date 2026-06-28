import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly addToCartBackpack: Locator;
    readonly shoppingCart: Locator ;

constructor(page: Page) {
    this.page = page;
    this.addToCartBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
    }   

    async addToCart() {
        await this.addToCartBackpack.click();
        await this.shoppingCart.click();
    }
}