import { test, expect } from '@playwright/test';

test('hover shows user name', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const firstFigure = page.locator('.figure').first();
    await firstFigure.hover();
    await expect(firstFigure.getByText('name: user1')).toBeVisible();
});

test('double click and right click', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');
    await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
    await expect(page.locator('#doubleClickMessage'))
        .toContainText('double click');
    await page.getByRole('button', { name: 'Right Click Me' })
        .click({ button: 'right' });
    await expect(page.locator('#rightClickMessage'))
        .toContainText('right click');
});

test('drag A onto B', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    await page.locator('#column-a').dragTo(page.locator('#column-b'));
    await expect(page.locator('#column-a header'))
        .toHaveText('B');
}); 