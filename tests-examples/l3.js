export async function test1()
{
    await page.goto('https://test.one.fandelo.com/login');
    await page.getByTestId('email').fill('fandelo_one');
    await page.getByTestId('password').fill('fandelo@1');
    await page.getByTestId('login').click();

    await page.getByPlaceholder('Talent name').fill('hung ta');
};