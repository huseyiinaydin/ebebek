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
        await loginPage.enterPhoneNumber('5315610795');
        await expect(loginPage.registerTitle).toBeVisible({ timeout: 10000 });
        await page.screenshot({ path: 'screenshots/Hesap oluştur.png' });
    });

    test('Geçersiz telefon numarası kontrolü', async ({page})=> {
        await loginPage.enterPhoneNumber('1');
        await expect(loginPage.yanlisTelNoUyari).toBeVisible({timeout: 10000});
        await page.screenshot({ path: 'screenshots/Yanlış telefon girişi uyarı mesajı.png' });

    });
    test('e-posta alanına geçiş kontrolü', async ({ page }) => {

        await loginPage.clickEpostaTab();
        await expect(loginPage.epostaInput).toBeVisible({ timeout: 10000 });
        await loginPage.enterEposta('deneme@gmail.com');
        await page.screenshot({ path: 'screenshots/E-posta alanına geçiş.png' });

    });

    test('e-posta alanı hatalı e posta girişi kontrolü', async ({ page }) => {

        await loginPage.clickEpostaTab();
        await loginPage.enterEposta('deneme');
        await loginPage.submitButton.click();
        await expect(loginPage.gecersizEpostaGirisi).toBeVisible({ timeout: 10000 });
        await page.screenshot({ path: 'screenshots/E-posta alanına geçiş.png' });

    });




});