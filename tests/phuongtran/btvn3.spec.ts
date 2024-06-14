import { test, expect } from '@playwright/test';

test('login playwright demo', async ({ page }) => {
  await page.goto('https://test.prism.horse/portal/login'); 

  await page.getByPlaceholder('Username or Email').fill('ciaron.maher');
  await page.getByPlaceholder('Password').fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator("a[ui-sref='home.racing']").click();
  await page.locator("//label[normalize-space()='Racing Calendar']").click();

  const l1= page.getByRole('button', { name: 'today' });
  await expect(l1).toBeDisabled();

  //await expect(page).toHaveURL(/\/portal\/dashboard\/task-list$/);

});