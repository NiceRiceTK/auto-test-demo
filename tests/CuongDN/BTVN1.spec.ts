import { test, expect } from '@playwright/test';

test('BTVN1', async ({ page }) => {
  await page.goto('https://playwright.dev/');

   /* dung css*/
  await page.locator('a.getStarted_Sjon').click();
  await page.locator('.buttons_pzbO > a[href="/docs/intro"]').click();
  await page.locator('div.buttons_pzbO').click();
  
 
})