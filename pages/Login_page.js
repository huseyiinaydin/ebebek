// @ts-check

/**
 * @typedef {import('@playwright/test').Locator} Locator
 * @typedef {import('@playwright/test').Page} Page
 */
export class LoginPage {

    page;
    phoneInput;
    submitButton;
    registerTitle;
    yanlisTelNoUyari;
    epostaTab;
    epostaInput;
    gecersizEpostaGirisi;

    constructor(page) {
        this.page = page;
        this.phoneInput = page.getByRole('textbox', { name: '+90 (___) ___ __ __' });
        this.submitButton = page.getByRole('button', { name: 'Giriş Yap / Hesap Oluştur' });
        this.registerTitle = page.getByRole('heading', { name: 'Hesap Oluştur' });
        this.yanlisTelNoUyari = page.getByText(/Lütfen ['’]5['’] rakamı ile başlayarak giriş yapınız\./);
        this.epostaTab = page.getByText('E-postaE-posta'); // veya page.getByRole('tab', { name: /E-posta/i });
        this.epostaInput = page.getByRole('textbox', { name: 'E-posta adresiniz' });
        this.gecersizEpostaGirisi = page.getByText(/Geçerli bir e-posta adresi giriniz./)
    }
    async navigateToLogin() {
        await this.page.goto('/login', {
            waitUntil: 'domcontentloaded'
        });
    }

    async enterPhoneNumber(phoneNumber) {
        await this.phoneInput.fill(phoneNumber);
        await this.submitButton.click();
    }

    async clickEpostaTab() {
        await this.epostaTab.click();
        await this.page.waitForTimeout(1000);
    }

    async enterEposta(email) {
        await this.epostaInput.fill(email);
    }
}