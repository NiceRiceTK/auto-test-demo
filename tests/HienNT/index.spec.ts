import { test, expect } from '@playwright/test';

test('Hien DEMO', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  //  CSS
  await page.locator('a.navbar__brand').click();
  await page.locator('.gh-btn[href$="/playwright"]').click();
  await page.locator('button.DocSearch').click();


  // // // Xpath
  await page.locator('//a[@class="navbar__brand"]').click();
  await page.locator('//a[contains(text(),"JavaScript")]').click();
  
  await page.locator('//ul[@class="dropdown__menu"]/li/a[@href="/java/"]').click();

  
});
