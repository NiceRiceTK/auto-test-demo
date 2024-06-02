import { test, expect } from '@playwright/test';

test('Lesson 1', async ({ page }) => {
  await page.goto('https://playwright.dev/');

// Using CSS to find logo image Disney+ hotstar
  const logoSelectors = [
   // Case 1 
    'img[src="img/logos/DHotstar.jpg"]',
   // Case 2 
    'img[src*="DHotstar.jpg"]',
   // Case 3 
    'img[src$="DHotstar.jpg"]'
];

// Using Xpath to find Git Hub star button
const ghBtnXPath = '//*[contains(concat(" ", normalize-space(@class), " "), " gh-btn ")]';

   // Case 1
const ghBtnLocator = page.locator(ghBtnXPath);
expect(await ghBtnLocator.count()).toBeGreaterThan(0);

   // Case 2
await page.waitForSelector(ghBtnXPath, { state: 'visible' });

   // Case 3
const ghBtnElement = await page.$(ghBtnXPath);
expect(ghBtnElement).not.toBeNull();

  }
);
