import { test, expect } from '@playwright/test';

test('CSS SELECTOR DEMO', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  /* Clicking Docs link in nav bar.
    This part   a.navbar__item   will search for any <a> tags that HAVE 'navbar__item' in their 'class' attribute.
    This part   [href="/docs/intro"]   is used to filter the result of the part above, in this case it will
    only show any <a> tag that have 'docs/intro' in their 'href' attribute
  */
  await page.locator('a.navbar__item[href="/docs/intro"]').click();

  /* Clicking Docs link in nav bar.
    This part   [href$="welcome"]   will search for any tags that have their 'href' attribute end with 'welcome'.
    If you want to switch to begin with instad of ending with then change '$' to '^'
  */
  await page.locator('[href$="welcome"]').click();

  /* Clicking Docs link in nav bar.
    This part   h2#ambassadors   will search for any <h2> tags that have their 'id' attribute equal to 'ambassadors'.
  */
    await page.locator('h2#ambassadors').click();

  /* To summerize,
     An element can be located with CSS selector 
        by its attributes like 'href', 'type, 'label', etc through the use of [] brackets, 
        by its 'class' attribute with the use of the . character
        by its 'id' attribute with the use of the # character.
     And you can partial match the attributes with the use of 
        '^' for begining and
        '$' for ending
  */
});

test('XPATH DEMO', async ({ page }) => {
  
});