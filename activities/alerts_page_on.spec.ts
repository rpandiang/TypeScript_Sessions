import { expect, test } from '@playwright/test';

test('Simple Alert test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

page.on('dialog', async (dialog) => {
    console.log(dialog.type());
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Simple Alert' }).click();

});

test('Confirmation Alert test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async (dialog) => {
    console.log(dialog.type());
    console.log(dialog.message());
    // await dialog.dismiss();
    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Confirmation Alert' }).click();
});

test('Prompt Alert test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async (dialog) => {
    console.log(dialog.type());
    console.log(dialog.message());
    await page.waitForTimeout(3000);
    console.log(dialog.defaultValue());
    await dialog.accept('Good Morning');
  });

  await page.getByRole('button', { name: 'Prompt Alert' }).click();
});