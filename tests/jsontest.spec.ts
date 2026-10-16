import { test, expect } from '@playwright/test';
import data from '../testdata/testdata.json';
import fs from 'fs';
import path from 'path';

test('json test 1', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/")
    await page.getByPlaceholder("Username").fill(data.username)
    await page.getByPlaceholder("Password").fill(data.password)
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Recruitment' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await expect(page.locator('#app')).toContainText('Add Candidate');
    await page.getByPlaceholder('First Name').fill(data.fname)
    await page.getByPlaceholder('Last Name').fill(data.lname)
    await page.getByPlaceholder('Type Here').first().fill(data.email)
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('Application Stage')).toBeVisible({ timeout: 5000 });
})

//Parameterize tests with different data
//fs.readFileSync(filepath, encoding))
const data1 = JSON.parse(fs.readFileSync(path.join(__dirname, "../testdata/recruitmentdata.json"), 'utf-8'))
for (const dt of data1) {
    test(`json test No: ${dt.ID}`, async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/")
        await page.getByPlaceholder("Username").fill(data.username)
        await page.getByPlaceholder("Password").fill(data.password) //this is from import statement
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('link', { name: 'Recruitment' }).click();
        await page.getByRole('button', { name: 'Add' }).click();
        await expect(page.locator('#app')).toContainText('Add Candidate');
        await page.getByPlaceholder('First Name').fill(dt.fname) //this is from ref data recruitmentdata.json
        await page.getByPlaceholder('Last Name').fill(dt.lname)
        await page.getByPlaceholder('Type Here').first().fill(dt.email)
        await page.getByRole('button', { name: 'Save' }).click();
        //await page.waitForSelector()
        await expect(page.getByText('Application Stage')).toBeVisible();
    })
}
