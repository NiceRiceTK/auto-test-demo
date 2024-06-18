import { test, expect } from '@playwright/test';

test('Create Post', async ({ page }) => { 
    test.slow(); // Easy way to triple the default timeout
    await page.goto('https://samsungfood.com/');
    await page.getByRole ('link', {name: 'Log In'}).click();
    await page.getByTestId('auth-continue-with-email-button').click();
    await page.getByPlaceholder('Email or phone number').fill('hathithuyquynh98.com@gmail.com');
    await page.getByTestId('auth-continue-button').click();
    await page.getByPlaceholder('Password').fill('ManGo@33');
    await page.getByTestId('auth-login-button').click();
    await page.getByTestId('4ba90cc7-7c54-b96c-ccfd-93904139acad').click();
    await page.getByTestId('0d6281db-9f5a-8f63-c0d4-c40f91221d00').click();
    await page.getByTestId('profile').click();
    await page.getByPlaceholder('Add text (optional)').fill('Hello :)))');
    await page.getByTestId('65358485-2a33-d3b7-c5ce-a36ccec6be4e').click();
    await expect(page.getByTestId('6ba614ad-462f-714f-65b5-5c1f99689c37')).toContainText('Posted successfully!');
});  
