import { test, expect, chromium } from '@playwright/test';

test('New page', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const pagepromise = context.waitForEvent('page');

    await page.getByText('OrangeHRM, INC').click();
    const newpage = await pagepromise;

    expect(newpage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM');
    await newpage.getByRole('button', { name: 'Allow All' }).click();
    await newpage.getByPlaceholder('Your email address').fill('Hello!');

})

test('Multi page', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const [multipage] = await Promise.all([
        context.waitForEvent('page'),
        await page.getByText('OrangeHRM, INC').click()
    ]);

    const [page1, page2, page3] = await Promise.all([
        context.waitForEvent('page'),
        context.waitForEvent('page'),
        context.waitForEvent('page'),
        await page.getByText('OrangeHRM, INC').click()
    ]);

    await page1.waitForLoadState();
    await page2.waitForLoadState();
    await page3.waitForLoadState();
})