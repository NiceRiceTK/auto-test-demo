import { test, expect } from '@playwright/test';

test('BTVN_VA', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // C1
  await page.locator('img[src="img/logos/Browsers.png"]');
  //C2
  await page.locator('img[alt="Browsers (Chromium, Firefox, WebKit)"]');
  //C3 
  await page.locator('//img[@src="img/logos/Browsers.png"]');

});
 