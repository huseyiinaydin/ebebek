// @ts-check

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login_page';

test.describe('Ebebek - Telefon ile Giriş Testleri', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateToLogin();
    });

    //Ebebek Telefon ile login sayfası testleri

    test('Geçerli telefon numarası ile ilerleme kontrolü', async ({ page }) => {
        await loginPage.enterPhoneNumber('5315610795');
        await expect(loginPage.registerTitle).toBeVisible({ timeout: 10000 });
        await page.screenshot({ path: 'screenshots/Geçerli telefon numarası hesap oluştur adımına geçme kontrolü.png' });
    });

    test('Geçersiz telefon numarası ile ilerleyememe kontrolü', async ({page})=> {
        await loginPage.enterPhoneNumber('1');
        await expect(loginPage.yanlisTelNoUyari).toBeVisible({timeout: 10000});
        await page.screenshot({ path: 'screenshots/Yanlış telefon girişi hata mesajı.png' });

    });

    test('Telefon numarası girilmediğinde gelen hata mesajı kontrolü', async ({page}) => {

        await loginPage.clickTelTextbox();
        await expect(loginPage.girilmemisTelHataMesaji).toBeVisible({timeout: 10000});
        await page.screenshot({ path: 'screenshots/Girilmemiş telefon numarası hata mesajı.png' });

    });

    //Ebebek Telefon ile login sayfası testleri

    test('Geçerli e-posta ile ilerleme kontrolü', async ({ page }) => {

        await loginPage.clickEpostaTab();
        await expect(loginPage.epostaInput).toBeVisible({ timeout: 10000 });
        await loginPage.enterEposta('deneme123@gmail.com');
        await expect(loginPage.registerTitle).toBeVisible({ timeout: 10000 });
        await page.screenshot({ path: 'screenshots/Geçerli e-posta ile hesap oluştur adımına geçme geçme kontrolü.png' });

    });

    test('Geçersiz e-posta ile ilerleyememe kontrolü', async ({ page }) => {

        await loginPage.clickEpostaTab();
        await loginPage.enterEposta('deneme');
        await loginPage.submitButton.click();
        await expect(loginPage.gecersizEpostaGirisi).toBeVisible({ timeout: 10000 });
        await page.screenshot({ path: 'screenshots/Geçersiz e-posta girişi ile gelen hata mesajı kontrolü.png' });

    });

    test('E-posta girilmediğinde gelen hata mesajı kontrolü', async ({page}) => {

        await loginPage.clickEpostaTab();
        await loginPage.clickEpostaTextbox();
        await page.locator('section').click();
        await expect(loginPage.girilmemisEpostaHataMesaji).toBeVisible({timeout: 10000});
        await page.screenshot({ path: 'screenshots/Girilmemiş Eposta hata mesajı.png' });

    });

});