import { test, expect } from '@playwright/test';

test('Part_A Test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.pause(); 
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
});

