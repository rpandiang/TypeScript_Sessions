import { test, expect } from '@playwright/test';

test('JS alert', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await expect(page.locator('#result')).toContainText('clicked an alert');
}); 