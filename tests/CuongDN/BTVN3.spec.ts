import { test, expect } from '@playwright/test';
import { login } from './BTVN3';

test('BTVN3', async ({ page }) => {
    await page.goto('https://test.one.fandelo.com/login');

    await page.getByTestId('email').click();

    await page.getByTestId('email').fill('fandelo_one');

    await page.getByTestId('password').click();

    await page.getByTestId('password').fill('fandelo@1');

    await page.getByTestId('login').click();

    await expect(page.getByText('HEADLINE')).toBeVisible();

    // await expect(page.locator('//h2[text() = "HEADLINE"]')).toBeVisible();

});


test('BTVN32', async ({ page }) => {
    login()
});