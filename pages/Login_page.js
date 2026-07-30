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
    EpostaInput;
    EpostaTab;
    EpostaAdresi;

    constructor(page) {
        this.page = page;
        this.phoneInput = page.getByRole('textbox', { name: '+90 (___) ___ __ __' })
        this.submitButton = page.getByRole('button', { name: 'Giriş Yap / Hesap Oluştur' })
        this.registerTitle = page.getByRole('heading', { name: 'Hesap Oluştur' })
        this.yanlisTelNoUyari = page.getByText(/Lütfen ['’]5['’] rakamı ile başlayarak giriş yapınız\./);
        this.EpostaInput = page.getByText('E-posta')
        this.EpostaTab = page.getByRole('textbox', {name: 'E-posta adresiniz'})

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

    async enterEposta(EpostaAdresi){
        await this.EpostaTab.fill(EpostaAdresi);
        await this.submitButton.click();
    }

}