import {test, chromium} from '@playwright/test';

test('test1', async () => {
    const browser = await chromium.launch( { headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.ikea.com');
    await browser.close();
    console.log('Browser closed');
});