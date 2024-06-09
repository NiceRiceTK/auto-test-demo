import { test, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { config } from 'process';
import { login, navigateToHomePage, sumcal, timeout1 } from './common';
import playwrightConfig from '../../playwright.config';

// test('SELECTOR COURSE 1', async ({ page }) => {
//   await page.goto('https://www.prism.horse/');
//   await page.getByText('login').click();
//   await page.waitForTimeout(8000);
//   await page.getByPlaceholder("username").fill('ft.trainer7');
//   await page.waitForTimeout(4000);
//   //await page.locator('a.navbar__item[href="/docs/intro"]').click();
// })

// test('CW LOGIN', async ({ page })=> {
//   await page.goto('https://www.culinarywonderland.com/');
//   await page.getByText('Login').click();
//   await page.waitForTimeout(2000);
//   await page.getByPlaceholder('Email').fill('dinh.h+pro1@glasshouseventure.studio');
//   // const locator = page.getByPlaceholder('CONTINUE');
//   await page.getByRole('button', {name: 'CONTINUE'}).click();
//   await page.waitForTimeout(4000);
//   await page.getByPlaceholder('Password').fill('cp@12345678');
//   await page.getByRole('button', {name: 'LOGIN', exact: true}).click();
//   await page.waitForTimeout(4000);
// })

// test('test-login', async ({page})=> {
// //await navigateToHomePage(page);
// await login(page);
// })

test('update-profile',async ({page}) => {
  await login(page);
  await page.waitForTimeout(4000);
  await page.locator('//*[@id="header-main"]/div/div[4]/button[1]/span[2]/span').click();
  await page.waitForTimeout(2000);
  await page.getByRole('menuitem', {name: 'My profile'}).getByRole('link').click();
  await page.waitForTimeout(2000);
  await page.getByRole('menuitem', {name: 'My Details'}).getByRole('link').click();
  await page.waitForTimeout(2000);
  await page.locator('#firstName').fill('This is BB');
  await page.waitForTimeout(2000);
  await page.locator('#lastName').fill('Pro1');
  await page.locator('.ant-picker-input input#dob').click();
  const dates = await page.$$('.ant-picker-cell-inner');
  const randomDate = dates[Math.floor(Math.random() * dates.length)];
  await randomDate.click();
  // await page.locator('#gender').click();
  // const dropdownItems = await page.$$('.rc-virtual-list-holder-inner .ant-select-item.ant-select-item-option');
  // const randomIndex = Math.floor(Math.random() * dropdownItems.length);
  // const randomItem = dropdownItems[randomIndex];
  // await randomItem.click();
  // await timeout1(page);
})

test('BTVN2', async({page}) => {
const chefs = ["Adam Handling MBE","AI Brown","Ben Bayly","Chris Jay", "Matt Moran", "Olivia Kaplan", "Sarah Pound","Shannon Bennett", "Teage Ezard", "Tobie Puttock"];
console.log("list chefs: ",chefs);
const recipe = [{recipename:"Balsamic Catalana", preTime:"4hrs", cookTime:"55m", Yield:"6", difficulty:"Hard", ingredient1:"carrot", ingredient2:"salt",ingredient3:"sugar",ingredient4:"vanila powder", ingredient5:"lemon"},
{recipename:"Balsamic Catalana", preTime:"4hrs", cookTime:"55m", Yield:"6", difficulty:"Hard", ingredient1:"carrot", ingredient2:"salt",ingredient3:"sugar",ingredient4:"vanila powder", ingredient5:"lemon"},
{recipename:"Balsamic Catalana", preTime:"4hrs", cookTime:"55m", Yield:"6", difficulty:"Hard", ingredient1:"carrot", ingredient2:"salt",ingredient3:"sugar",ingredient4:"vanila powder", ingredient5:"lemon"},
{recipename:"Balsamic Catalana", preTime:"4hrs", cookTime:"55m", Yield:"6", difficulty:"Hard", ingredient1:"carrot", ingredient2:"salt",ingredient3:"sugar",ingredient4:"vanila powder", ingredient5:"lemon"},
{recipename:"Balsamic Catalana", preTime:"4hrs", cookTime:"55m", Yield:"6", difficulty:"Hard", ingredient1:"carrot", ingredient2:"salt",ingredient3:"sugar",ingredient4:"vanila powder", ingredient5:"lemon"},
{recipename:"Balsamic Catalana", preTime:"4hrs", cookTime:"55m", Yield:"6", difficulty:"Hard", ingredient1:"carrot", ingredient2:"salt",ingredient3:"sugar",ingredient4:"vanila powder", ingredient5:"lemon"},
{recipename:"Balsamic Catalana", preTime:"4hrs", cookTime:"55m", Yield:"6", difficulty:"Hard", ingredient1:"carrot", ingredient2:"salt",ingredient3:"sugar",ingredient4:"vanila powder", ingredient5:"lemon"},
{recipename:"Balsamic Catalana", preTime:"4hrs", cookTime:"55m", Yield:"6", difficulty:"Hard", ingredient1:"carrot", ingredient2:"salt",ingredient3:"sugar",ingredient4:"vanila powder", ingredient5:"lemon"},
{recipename:"Balsamic Catalana", preTime:"4hrs", cookTime:"55m", Yield:"6", difficulty:"Hard", ingredient1:"carrot", ingredient2:"salt",ingredient3:"sugar",ingredient4:"vanila powder", ingredient5:"lemon"},
{recipename:"Balsamic Catalana", preTime:"4hrs", cookTime:"55m", Yield:"6", difficulty:"Hard", ingredient1:"carrot", ingredient2:"salt",ingredient3:"sugar",ingredient4:"vanila powder", ingredient5:"lemon"}
];
console.log("list object: ", recipe);

function sumcal(number){
  var total = 0;
  for (let i=1; i<=number; i++){
    total +=i;
  }
  return total;
}
const result1 = sumcal(10);
console.log("Total number: ",result1);

function positiveTotal(array) {
  var total = 0;
  const positivenum = array.filter(num => num > 0);
  for(let i = 0; i < positivenum.length; i++){
  total += positivenum[i];
  }
  return total;
}
const result2 = positiveTotal([1, -4, 6, 8, 3]);
console.log ("Total positive numbers: ", result2);
})


