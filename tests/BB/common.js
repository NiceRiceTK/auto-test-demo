async function navigateToHomePage(page){
    await page.goto('https://www.culinarywonderland.com/');
    await page.waitForTimeout(2000);
}

async function login(page, username, password){
await page.goto('https://www.culinarywonderland.com/');
await page.getByText('Login').click();
await page.waitForTimeout(2000);
await page.getByPlaceholder('Email', username).fill('dinh.h+pro1@glasshouseventure.studio');
await page.getByRole('button', {name: 'CONTINUE'}).click();
await page.waitForTimeout(4000);
await page.getByPlaceholder('Password', password).fill('cp@12345678');
await page.getByRole('button', {name: 'LOGIN', exact: true}).click();
}

async function timeout1(page, timeout){
    await page.waitForTimeout(2000);
}
async function sumcal(number){
    var total = 0;
    for (let i=1; i<=number; i++){
      total +=i;
    }
    return total;
  }
  
module.exports = {
navigateToHomePage,
login,
timeout1,
sumcal,
};