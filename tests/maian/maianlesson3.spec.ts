import { test, expect } from '@playwright/test';
//import {login} from "./FO.spec";

test('Log in Fan One', async ({ page }) => {
    await page.goto('https://test.one.fandelo.com/login');

    await page.getByTestId('email').click();

    await page.getByTestId('email').fill('agency.admin');

    await page.getByTestId('password').click();

    await page.getByTestId('password').fill('F@ndelo2022');

    await page.getByTestId('login').click();

    await page.waitForTimeout(10000);

    //expect(page.url()).toBe('https://test.one.fandelo.com/talent');

    await expect(page.getByText('Personal')).toBeVisible();

});