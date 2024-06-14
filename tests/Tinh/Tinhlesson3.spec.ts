import { test, expect } from '@playwright/test';
// Lindsay park login
// test('Lindsay park', async ({ page }) => {
//     await page.goto('https://www.lindsaypark.prism.horse/login');
//     await page.locator('//input[@id="field-1"]').fill("ft.trainer.6");
//     await page.locator('//input[@id="field-2"]').fill("123456");
//     await page.locator('button[type="submit"]').click();
//     await page.locator('//h2[contains(text(), "Welcome back, Sample Stable!")]').click();

// });

test('Lindsay park', async ({ page }) => {
    //Login 1 account
    await page.goto('https://www.lindsaypark.prism.horse/login');
    await page.getByPlaceholder('Username or Email').fill("ft.trainer.6");
    await page.getByPlaceholder('password').fill("123456");
    await page.locator('button[type="submit"]').click();
    await expect(page.getByText('Welcome back, Sample Stable!')).toBeVisible();
    
   
    //Login with username has some accounts
    await page.goto('https://www.lindsaypark.prism.horse/login');
    await page.getByPlaceholder('Username or Email').fill("tinh.nguyen+owner@bluebottle.digital");
    await page.getByPlaceholder('password').fill("123456");
    await page.locator('//span[@class="chakra-switch__track css-ddil6j"]').click();
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByText('owner').nth(1).click();
    await expect(page.getByText('owner')).toBeVisible();

});