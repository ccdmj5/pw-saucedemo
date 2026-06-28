import { test, expect } from 'playwright/test';
import { LoginPage } from '../pages/saucedemo_LoginPage';
import { ProductsPage } from '../pages/saucedemo_ProductsPage';
import { CartPage } from '../pages/saucedemo_CartPage';
import { Checkout1Page } from '../pages/saucedemo_Checkout1Page';
import { Checkout2Page } from '../pages/saucedemo_Checkout2Page';
import { CheckoutCompletePage } from '../pages/saucedemo_CheckoutCompletePage';

test.describe('SauceDemo', () => {
    test.beforeEach('Page Login',async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoPage();
        await loginPage.login('standard_user', 'secret_sauce'); 
    });

    test('go to page', async ({ page }) => {
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        await expect(page.locator('[data-test="title"]')).toHaveText('Products');
    });

    test('cart', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkout1Page = new Checkout1Page(page);
        const checkout2Page = new Checkout2Page(page);
        const checkoutCompletePage = new CheckoutCompletePage(page);

        await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
        await productsPage.addToCart();

        await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
        await cartPage.checkout();
    
        await checkout1Page.sendInformation();

        await expect(page.locator('[data-test="finish"]')).toBeVisible();
        await checkout2Page.finishSendingInformation();

        await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
        await checkoutCompletePage.backHome();
    });

    test('assert_title', async ({ page }) => {
        await expect(page.locator('[data-test="item-5-title-link"]')).toBeVisible();
    });
});