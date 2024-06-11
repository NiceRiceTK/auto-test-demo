import { test, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';
import playwrightConfig from '../../playwright.config';
import { login } from './common';

test('Search a document on Playwright', async ({page}) => {

    await page.goto('https://playwright.dev/docs/input');

//await page.locator('//*[contains(@class,"DoSearch")]').nth(0).click();

await page.locator('//button[contains(@class,"DocSearch")]').click();

await page.getByPlaceholder('Search docs').fill('Actions');

//await page.getByText('CI GitHub').nth(1).click();
await page.getByRole('link', { name: 'Setting up GitHub Actions CI'}).click();

await expect(page.locator('//h2[text()="Setting up GitHub Actions"]')).toBeVisible();

const title = await page.locator('//h1').textContent();

expect(title).toEqual('CI GitHub Actions');

})

test('Using Javascript in playwright', async ({page}) => {
    await login(page);

})


// test('test2',async ({page}) => {
//     await page.goto('https://playwright.dev/docs/input');
//     await page.getByPlaceholder('Search').fill('locator');
//     })
