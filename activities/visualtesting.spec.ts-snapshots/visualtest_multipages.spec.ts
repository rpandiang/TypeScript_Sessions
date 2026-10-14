import { test, expect, chromium } from '@playwright/test';

test('New page', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    //reference for getting no of pages
    const totalpage = context.pages();
    // console.log(totalpage) //array of pages
    console.log(totalpage.length)//number of pages active

    await page1.goto('https://testautomationpractice.blogspot.com/')
    await expect(page1).toHaveTitle('Automation Testing Practice') //validation
    //await expect(page1).to

    await page2.goto('https://ui.vision/demo/webtest/frames')
    //validation
    await page1.bringToFront()
    await page1.waitForTimeout(5000)
    await page2.bringToFront()
    await page2.waitForTimeout(5000)
})