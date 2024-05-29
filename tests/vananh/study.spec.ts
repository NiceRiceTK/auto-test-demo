import { test, expect } from '@playwright/test';

test('SELECTOR COURSE 1', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.locator('a.navbar__item[href="/docs/intro"]').click();
  await page.locator('a.navbar__item[href="/docs/intro"]').click();
  await page.locator('a.navbar__item[href="/docs/intro"]').click();
})

