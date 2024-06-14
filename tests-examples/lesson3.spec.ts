import { test, expect } from '@playwright/test';
import { test1 } from './l3';

// test('playwright demo', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
//     //await page.locator("//button[@aria-label='Search']").click();
//     await page.locator('//button[contains(@class,"DocSearch")]').click();
//     await page.getByPlaceholder('Search docs').fill('locator');
//     await page.getByText('Filtering Locators').click();
//     // await page.getByPlaceholder('Search docs').fill('actions');
//     // await page.getByText('CI Github').nth(1).click();  //n?u t?m th?y nhi?u element th? d?ng nth
//     //Expectation
//     //await expect (page.locator("//h2[@id='filtering-locators']")).toBeVisible();
//     await expect(page.locator('//h2[text()="Filtering Locators"]')).toBeVisible();

//     //const title= await page.locator('//h1')
// });



//test case c? s? d?ng javascrip/typescript
test('using js', async ({ page }) => {
  await test1(page);
});


