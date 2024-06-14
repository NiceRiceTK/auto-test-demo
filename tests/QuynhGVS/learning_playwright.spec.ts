import { test, expect } from '@playwright/test';
import { login } from './playwright';

test('test name', async ({ page }) => { 
    await page.goto('https://playwright.dev/docs/input');
    //await page.getByText('These are the recommended built in locators.');
    // await page.locator('//*[contains(@class,"DocSearch")]').nth(0).click();
    await page.locator('//button[contains(@class,"DocSearch")]').click();

    await page.getByPlaceholder('Search docs').fill('action');
    // await page.getByText('CI GitHub').click();
    // await page.getByTestId('docsearch-item-5').click();
    await page.getByRole('link', { name: 'Setting up GitHub Actions​ CI' }).click()

    // expect(page.getByText('CI GitHub Actions', {exact: true})).toBeVisible();
    await expect(page.locator('//h1[text() = "CI GitHub Actions"]')).toBeVisible();

    const title = await page.locator('//h1').textContent();
    expect(title).toEqual('CI GitHub Actions');
});  

test('Using javascript in playwright', async (page) => {
    login (page)
});