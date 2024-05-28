import { test, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { config } from 'process';

test('SELECTOR COURSE 1', async ({ page }) => {
  await page.goto('https://www.prism.horse/');
  await page.getByText('login').click();
  await page.waitForTimeout(8000);
  await page.getByPlaceholder("username").fill('ft.trainer7');
  // await page.inputValue("ft.trainer7");
  await page.waitForTimeout(4000);
  //await page.locator('a.navbar__item[href="/docs/intro"]').click();
})


