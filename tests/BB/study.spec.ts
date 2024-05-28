import { test, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { config } from 'process';

// test('SELECTOR COURSE 1', async ({ page }) => {
//   await page.goto('https://www.prism.horse/');
//   await page.getByText('login').click();
//   await page.waitForTimeout(8000);
//   await page.getByPlaceholder("username").fill('ft.trainer7');
//   await page.waitForTimeout(4000);
//   //await page.locator('a.navbar__item[href="/docs/intro"]').click();
// })

test('CW LOGIN', async ({ page }) => {
  await page.goto('https://www.culinarywonderland.com/');
  await page.getByText('Login').click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Email').fill('dinh.h+pro1@glasshouseventure.studio');
  // const locator = page.getByPlaceholder('CONTINUE');
  await page.getByRole('button', {name: 'CONTINUE'}).click();
  await page.waitForTimeout(4000);
  await page.getByPlaceholder('Password').fill('cp@12345678');
  const btn2 = page.getByRole('button', {name: 'LOGIN'});
  await btn2.click();
  await page.waitForTimeout(4000);
})


