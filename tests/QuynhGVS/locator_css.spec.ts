import { test, expect } from '@playwright/test';

//Locating Sign Up button
//CSS Selectors
test('CSS SELECTOR SAMSUMGFOOD', async ({ page }) => {
  await page.goto('https://samsungfood.com/');
  await page.locator('#default_link').click(); /*Selects the element with id="default_link"*/
  await page.locator('a.dynamic_link.btn.btn-brand.main-cta.show').click(); /*Selects the element with class*/
  await page.locator('a[href*="sign-up"][rel="nofollow noreferrer noopener"]').click(); /*Selects the element by multiple attributes - and condition*/
});

/*
test('XPATH SAMSUNGFOOD', async ({ page }) => {
    await page.goto('https://samsungfood.com/');
    await page.locator('//*[@id="default_link"]').click();
    await page.locator('//*[contains(@class,"dynamic_link btn btn-brand main-cta show")]').click();
    await page.locator('//a[contains(@href,"sign-up") and @rel="nofollow noreferrer noopener"]').click(); 
});
*/