import { test, expect } from '@playwright/test';

test('file upload test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);
    const fileInput = page.locator("#singleFileInput");
    await fileInput.setInputFiles('./activities/uploadtest.txt');
    await page.waitForTimeout(2000);
    await page.waitForEvent('load');
});

