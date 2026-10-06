import { test, expect } from '@playwright/test';

test('login page opens', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});

test('login works', async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Products')).toBeVisible();
}); 