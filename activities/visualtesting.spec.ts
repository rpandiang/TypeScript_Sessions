import { test, expect } from '@playwright/test';

// OrangeHRM demo site credentials
const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
const USERNAME = 'Admin';
const PASSWORD = 'admin123';

// Reusable login function
async function loginToOrangeHRM(page: any) {
    await page.goto(URL);
    // Wait for the login form to be visible
    await page.locator('input[name="username"]').waitFor({ state: 'visible' });
    await page.fill('input[name="username"]', USERNAME);
    await page.fill('input[name="password"]', PASSWORD);
    await page.click('button[type="submit"]');
    // Wait for dashboard to load after login
    await page.waitForURL('**/dashboard/index');
    await page.waitForLoadState('networkidle');
}

// -----------------------------------------------------------------------
// Test Case 1: Full-page screenshot visual comparison after login
//   - Uses toMatchSnapshot() to compare against a baseline snapshot.
//   - Run once to generate the baseline, then subsequent runs will compare.
// -----------------------------------------------------------------------
test('Visual Test 1 - Dashboard full page snapshot', async ({ page }) => {
    await loginToOrangeHRM(page);

    // Ensure the dashboard header is visible before taking screenshot
    await page.locator('.oxd-topbar-header').waitFor({ state: 'visible' });

    // Take a full-page screenshot and compare with baseline snapshot
    // First run: creates 'orangeHRM-dashboard.png' as the baseline
    // Subsequent runs: compares against the saved baseline
    expect(await page.screenshot({ fullPage: true }))
        .toMatchSnapshot('orangeHRM-dashboard.png');
});

// -----------------------------------------------------------------------
// Test Case 2: Locator-level screenshot visual comparison (sidebar menu)
//   - Uses toHaveScreenshot() on a specific element (the side navigation).
//   - Useful for verifying that a specific UI component hasn't changed.
// -----------------------------------------------------------------------
test('Visual Test 2 - Side navigation menu element snapshot', async ({ page }) => {
    await loginToOrangeHRM(page);

    // Locate the side navigation menu panel
    const sideNavMenu = page.locator('.oxd-sidepanel');
    await sideNavMenu.waitFor({ state: 'visible' });

    // Compare the side navigation element screenshot against baseline
    // First run: creates the baseline image
    // Subsequent runs: highlights any pixel-level differences
    await expect(sideNavMenu).toHaveScreenshot('orangeHRM-sidenav.png');
});
