import { test, expect } from '@playwright/test';

test('BTVNThao', async ({ page }) => {
  await page.goto('https://playwright.dev/');


   //css
  await page.locator('.navbarSearchContainer_Bca1>button').click(); 
  await page.locator('.DocSearch').click();
  

   //Xpath
   await page.locator('//button[@class="DocSearch DocSearch-Button"]').click();
   await page.locator('//input[@class="DocSearch-Input"]').click();
   await page.locator('//input[@class="DocSearch-Input"]').fill('git');
   await page.waitForTimeout(3000);
   await page.locator('//button[@class="DocSearch-Reset"]').click();
 


   
});