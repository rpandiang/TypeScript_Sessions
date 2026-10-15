import { test, expect } from '@playwright/test';

const url = 'https://testautomationpractice.blogspot.com/';

test('Skip Test', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium', 'Skipping test on Chromium browser');
    await page.goto(url);
    await page.locator('#male').check();
    await expect(page.locator('#male')).toBeChecked();
    await expect(page.locator('#female')).not.toBeChecked();
});

test('Fixme Test', async ({ page }) => {
    test.fixme(true, 'CXTDT-1234; This test is failing due to a known issue');
    await page.goto(url);
    await page.locator('#female').check();
    await expect(page.locator('#female')).toBeChecked();
});