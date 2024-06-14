export async function login()
{
    await page.goto('https://playwright.dev/docs/input');

    await page.locator('//button[contains(@class,"DocSearch")]').click();

    await page.getByPlaceholder('Search docs').fill('action');

    await page.getByRole('link', { name: 'Setting up GitHub Actions​ CI' }).click()

    await expect(page.locator('//h1[text() = "CI GitHub Actions"]')).toBeVisible();

    const title = await page.locator('//h1').textContent();
    expect(title).toEqual('CI GitHub Actions');
};