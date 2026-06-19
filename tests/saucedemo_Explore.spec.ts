import { test, expect } from 'playwright/test';

test.describe('SauceDemo', () => {
    test.beforeEach('Page Login',async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
    });

    test('go to page', async ({ page }) => {
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        await expect(page.locator('[data-test="title"]')).toHaveText('Products');
    });

    test('cart', async ({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    });
});