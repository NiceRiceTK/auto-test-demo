import {test, expect} from '@playwright/test';

test('Login success', async ({ page }) => {
    //BTVN 1: Test login myabledriver web
    //Điều hướng đến trang web myabledriver
    await page.goto ('https://myabledriver.com.au/');
    // Điều hướng đến trang đăng nhập có link https://myabledriver.com.au/sign-in
    await page.locator('a[href="/sign-in"]').click();
    //Fill text to email & password
    await page.locator('div.email').locator('input[type^="text"]').fill('huyen.t@glasshouseventure.studio');
    await page.locator('div.password').locator('input[type^="password "]').fill('huyen123@');
    //Click button submit
    await page.locator('button[type^="submit"]').click();
});

