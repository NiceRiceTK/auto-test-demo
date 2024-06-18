import { test, expect } from '@playwright/test';

test('BTVN3', async ({ page }) => {
    await page.goto('https://test.culinarywonderland.com/');
    await page.getByText('Login').click();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('vananh.l@glasshouseventure.studio');
    await page. getByRole('button', { name: 'CONTINUE' }).click();
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('cp@12345678');
    await page.getByRole('button', {name: 'LOGIN', exact: true}).click();
    await expect(page.getByText('Vanan')).toBeVisible();

});


   