import { test } from '@playwright/test';

test('IntelliJ Ilk Test', async ({ page }) => {
    await page.goto('https://www.google.com');
});