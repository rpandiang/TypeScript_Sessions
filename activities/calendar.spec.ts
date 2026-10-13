import { test, expect } from '@playwright/test';

test('Date Picker 1', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('input#datepicker').click();
    await page.waitForTimeout(2000);

    const expectedYear = "2026";
    const expectedMonth = "October";
    const expectedDay = "15";

    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentYear === expectedYear && currentMonth === expectedMonth) {
            break;
        }
        await page.locator('[title="Next"]').click();
    }
    await page.locator(`tr>td>a:text-is("${expectedDay}")`).click();
});

test('Date Picker 2', async ({ page }) => {
    await page.goto('https://www.automationtesting.co.uk/datepicker.html');
    await page.locator('input#basicDate').click();
    await page.waitForTimeout(2000);
    await page.locator('.flatpickr-prev-month').first().click();
    await page.waitForTimeout(2000);
    await page.locator('.flatpickr-next-month').first().click();
    const currentMonth = await page.locator('.cur-month').first().textContent();
    console.log(currentMonth);
});

