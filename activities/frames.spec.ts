import { test, expect } from '@playwright/test';

test('frames count test', async ({ page }) => {
    await page.goto('https://letcode.in/frame');
    const frames = page.frames();
    console.log(`Frames: ${frames}`);
    console.log(`Number of frames: ${frames.length}`);

    const frame1 = page.frameLocator('#firstFr');
    const firstname = frame1.locator("input[name='fname']");
    await firstname.fill('John');

    const lastname = frame1.locator("input[name='lname']");
    await lastname.fill('Doe');
    await page.waitForTimeout(2000);
    const frame2 = page.frameLocator('#secondFr')
});