import { test, expect } from '@playwright/test';

// test('Tinh xinh gai', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
//     await page.locator('//a[contains(@class,"navbar") and @href="/docs/api/class-playwright"]').count();

// });

// Login Prism
test('PrismLhhyiuesson1', async ({ page }) => {
    await page.goto('https://www.prism.horse/portal/login');
    await page.locator('//input[@id="username"]').fill("ft.trainer.6");
    await page.locator('//input[@id="password"]').fill("123456");
    await page.locator('//input[@value="Login"]').click();
    await page.locator('//h2[contains(text(), "Welcome back, Sample Stable!")]').click();

});

// Baitap SS
test('Lesson1', async ({ page }) => {
    await page.goto('https://playwright.dev/');

// Find the Git Hub star button
await page.locator('//a[normalize-space()="GitHub"]').isVisible();

// Find the dark mode button
await page.locator('//button[contains(@class, "clean-btn toggleButton_gllP")]').click();

// Find the Introduction header in the Docs tab
await page.locator('.navbar__item').nth(0).click();
await page.waitForTimeout(200);
await page.locator('#introduction').isVisible();


// Find the Search text in the Search button
await page.locator('//button[contains(@class, "DocSearch DocSearch-Button")]').isVisible();

// Find paragraph that contains 'It also has a rich set'
await page.locator('//b[@class="navbar__title text--truncate"]').click();
await page.locator('//p[contains(text(),"It also has a rich set")]').scrollIntoViewIfNeeded();

// Find the Discord link in the footer
await page.locator('//a[contains(@href="https://aka.ms/playwright/discord" )]').click();

});