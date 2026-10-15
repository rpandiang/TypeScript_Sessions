import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 1,
  reporter: [
    ['html', { open: 'always' }]
    // 'always'  - opens the report automatically after every test run
    // 'never'   - never opens it automatically
    // 'on-failure' - opens it only if at least one test fails
  ],
  retries: 1,

  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    navigationTimeout: 50000,
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    // { name: 'Mobile Chrome', use: { ...devices['Pixel 7'] } },
    // { name: 'Mobile Safari', use: { ...devices['iPhone 13'] } },
  ],
}); 