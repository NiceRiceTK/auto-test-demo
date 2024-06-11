import { test, expect } from '@playwright/test';

test('TEST_NAME', async ({ page }) => {
    await page.locator('//*[@href="https://aka.ms/playwright/discord"]').count();
});