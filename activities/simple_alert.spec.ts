import { expect, test } from '@playwright/test';

test('Simple Alert displays the expected popup message', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    let dialogMessage = '';
    page.once('dialog', async (dialog) => {
        dialogMessage = dialog.message();
        await dialog.accept();
    });

    await page.getByRole('button', { name: 'Simple Alert' }).click();

    expect(dialogMessage).toBe('I am an alert box!');
});
