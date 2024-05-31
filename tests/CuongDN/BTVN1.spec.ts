import { test, expect } from '@playwright/test';

test('BTVN1', async ({ page }) => {
  await page.goto('https://playwright.dev/');

   // dung css
  await page.locator('a.getStarted_Sjon').click();
  await page.locator('.buttons_pzbO > a[href="/docs/intro"]').click(); // Shorten to .buttons_pzbO > a
  await page.locator('div.buttons_pzbO:first-child').click();
  await page.locator('a.getStarted_Sjon[href="/docs/intro"]').click();
  //Xpath
  await page.locator('//a[@class="getStarted_Sjon"]').click();
  await page.locator('//div[@class="buttons_pzbO"]/a[@href="/docs/intro"]').click(); // Shorten to //div[@class="buttons_pzbO"]/a
  await page.locator('//a[contains(text(),"Get started")]').click();

  // Playwright
  await page.getByRole('link', { name: 'GET STARTED' }).click();
  await page.getByText('Get started').click();


 
})