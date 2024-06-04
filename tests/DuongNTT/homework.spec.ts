import {test, expect} from '@playwright/test';

test('CSS SELECTOR', async ({ page }) => {
    //Điều hướng đến trang web
    await page.goto ('https://shopee.vn/');
    // Sử dụng Xpath
    await page.locator('a[href^="/buyer/signup"]').click();
    // Sử dụng Locator
    await page.locator('input[type^="text"]').fill('0336688980');  // input[placeholder="Số điện thoại"]
    await page.locator('button:has-text("Tiếp theo")').click();  //button[text()="Tiếp theo"]
    await page.locator('button:has-text("Hủy bỏ")').click();    //button[text()="Hủy bỏ"]
});

