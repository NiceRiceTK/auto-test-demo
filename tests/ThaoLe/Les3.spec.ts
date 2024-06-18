import { test, expect } from '@playwright/test';

test('Les3', async ({ page }) => {
await page.goto('https://playwright.dev/docs/input');

await page.locator('//button[@class="DocSearch DocSearch-Button"]').click();

await page.getByPlaceholder('Search docs').fill('actions');

await page.getByRole('link', { name: 'Setting up GitHub Actions​ CI' }).click();

await expect(page.locator('//h2[text() = "Setting up GitHub Actions"]')).toBeVisible();

//const title = await page.locator('//h1').textContent();

//expect(title).toEqual('CI GitHub Actions 3333');

});


