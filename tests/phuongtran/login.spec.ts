import { test, expect } from '@playwright/test';

// test('login css demo', async ({ page }) => {
//   await page.goto('https://test.prism.horse/portal/login'); 

//   await page.locator('input#username').fill('cortr');
//   await page.locator('input#password').fill('123456');
//   await page.locator('input[type="submit"]').click();

//   await page.locator('a[toggle="showUserAction"]').click();
//   await page.locator('i.fa-sign-out').click();

// });


test('xpath demo', async ({ page }) => {
  await page.goto('https://www.w3schools.com/'); 

  await page.locator("//input[@id='search2']").fill('html');
  await page.locator("//i[@id='learntocode_searchicon']").click();
  await page.locator("//a[normalize-space()='HTML Basic']").click();
 


});

// test('login playwright demo', async ({ page }) => {
//   await page.goto('https://test.prism.horse/portal/login'); 

//   await page.getByPlaceholder('Username or Email').fill('ciaron.maher');
//   await page.getByPlaceholder('Password').fill('123456');
//   await page.getByRole('button', { name: 'Login' }).click();

//   await expect(page).toHaveURL(/\/portal\/dashboard\/task-list$/);

// });



