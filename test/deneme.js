import { test, expect } from '@playwright/test';

test('Ebebek Ana Sayfa Acilis Testi', async ({ page }) => {
    // 1. Ebebek ana sayfasına git
    await page.goto('https://www.e-bebek.com/');

    // 2. Sayfa başlığında 'ebebek' ifadesinin geçtiğini doğrula
    await expect(page).toHaveTitle(/ebebek/i);
});