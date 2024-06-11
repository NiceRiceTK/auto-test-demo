
export async function login( page , expect){
    await page.goto('https://test.one.fandelo.com/login');

    await page.getByTestId('email').fill('fandelo_one');
    await page.getByTestId('password').fill('fandelo@1');
    await page.getByTestId('login').click();

    await page.getByPlaceholder('Talent name').fill('hung');
    await page.locator('//*[@id="userList"]//a').nth(0).click();

    await page.getByTestId('pipeline').click();
    const deleteCount = await page.getByTestId('pipeline').count()
    for (let i = 0; i < deleteCount; i++){
        page.getByTestId('pipeline').nth(i).click();
        await expect(page.getByText('Delete opportunity')).toBeVisible();
        await page.getByRole('button', {name: 'No'}).click();
    }
}