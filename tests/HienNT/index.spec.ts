import { test, expect } from '@playwright/test';

test('CSS Locator', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.locator('a.navbar__brand').click();
  await page.locator('.gh-btn[href$="/playwright"]').click();
  await page.locator('button.DocSearch').click();

});

test('Xpath', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.locator('//a[@class="navbar__brand"]').click();
  await page.locator('//a[contains(text(),"JavaScript")]').click();
  await page.locator('//ul/li[@class="footer__item"]/a[@href="/docs/intro"]').click(); // //ul//a[@href="/docs/intro"]

});