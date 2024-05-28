import { test, expect } from '@playwright/test';

test('CSS SELECTOR DEMO', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  /* Clicking Docs link in nav bar.
    This part   a.navbar__item   will search for any <a> tags that HAVE 'navbar__item' in their 'class' attribute.
    This part   [href="/docs/intro"]   is used to filter the result of the part above, in this case it will
    only show any <a> tag that have 'docs/intro' in their 'href' attribute
  */
});