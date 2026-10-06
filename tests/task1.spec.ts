import { test, expect } from '@playwright/test';

test.use({ testIdAttribute: 'data-test' });

test('Test 1: login works', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Products')).toBeVisible();
});

test('Test 2: add backpack to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByAltText('Sauce Labs Backpack')).toBeVisible();
  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
  await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
});

// test('Test 3: Bonus task', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/login'); 
//   await page.getByLabel('Username').fill('tomsmith'); 
//   await page.getByLabel('Password').fill('SuperSecretPassword!'); 
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.waitForTimeout(5000);
//   await expect(page.getByText('Secure Area')).toBeVisible();
// }); 