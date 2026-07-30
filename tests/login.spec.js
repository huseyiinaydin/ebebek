// @ts-check

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login_page';

test.describe('Ebebek - Telefon ile Giriş Testleri', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateToLogin();
    });

    test('Geçerli telefon numarası Kontrolü', async ({ page }) => {
        await loginPage.enterPhoneNumber('+90 (531) 561 07 95');
        await expect(loginPage.registerTitle).toBeVisible({ timeout: 10000 });
        await page.screenshot({ path: 'screenshots/Hesap oluştur.png' });
    });

    test('Geçersiz telefon numarası kontrolü', async ({page})=> {
        await loginPage.enterPhoneNumber('1');
        await expect(loginPage.yanlisTelNoUyari).toBeVisible({timeout: 10000});
        await page.screenshot({ path: 'screenshots/Yanlış telefon girişi uyarı mesajı.png' });


    });
});