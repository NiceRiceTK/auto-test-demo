import { test, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('SELECTOR COURSE 1', async ({ page }) => {
  await page.goto('https://www.prism.horse/');
  await page.getByText('login').click();
  test.setTimeout(12000);
  //await page.locator('a.navbar__item[href="/docs/intro"]').click();
})


