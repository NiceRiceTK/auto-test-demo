import {test, expect} from '@playwright/test';

test('CSS SELECTOR', async ({ page }) => {
    //Điều hướng đến trang web
    await page.goto ('https://shopee.vn/');
    // Sử dụng Xpath
    await page.locator('a[href^="/buyer/signup"]').click();
    // Sử dụng Locator
    await page.locator('input[type^="text"]').fill('0336688980');
    await page.locator('a<button type="button">Tiếp theo</button>').click();
});