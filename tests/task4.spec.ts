import { test, expect } from '@playwright/test';

//Part A: Alerts
test('JS alert', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts', {
        waitUntil: 'domcontentloaded'
    });
    page.once('dialog', async dialog => {
        await dialog.accept();
    });
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await expect(page.locator('#result')).toContainText('You successfully clicked an alert');
});

test('JS Confirm OK', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts', {
        waitUntil: 'domcontentloaded'
    });
    page.once('dialog', async dialog => {
        await dialog.accept();
    });
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await expect(page.locator('#result')).toContainText('You clicked: Ok');
});

test('JS Confirm Cancel', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts', {
        waitUntil: 'domcontentloaded'
    });
    page.once('dialog', async dialog => {
        await dialog.dismiss();
    });
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await expect(page.locator('#result')).toContainText('You clicked: Cancel');
});

test('JS Prompt', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts', {
        waitUntil: 'domcontentloaded'
    });
    page.once('dialog', async dialog => {
        await dialog.accept('Hello!');
    });
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    await expect(page.locator('#result')).toContainText('You entered: Hello!');
});

//Part B: Checkboxes
test('checkboxes', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://the-internet.herokuapp.com/checkboxes', {
        waitUntil: 'domcontentloaded'
    });
    const box1 = page.getByRole('checkbox').first();
    const box2 = page.getByRole('checkbox').last();

    await expect(box1).not.toBeChecked();
    await expect(box2).toBeChecked();

    await box1.check();
    await expect(box1).toBeChecked();
    await box2.uncheck();
    await expect(box2).not.toBeChecked();
}); 