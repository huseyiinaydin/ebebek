// @ts-check

/**
 * @typedef {import('@playwright/test').Locator} Locator
 * @typedef {import('@playwright/test').Page} Page
 */
export class LoginPage {

    /** @type {Page} */
    page;

    /** @type {Locator} */
    phoneInput;

    /** @type {Locator} */
    submitButton;

    /** @type {Locator} */
    registerTitle;

    /** @type {Locator} */
    yanlisTelNoUyari;

    /**
     * @param {Page} page
     */
    constructor(page) {
        this.page = page;
        this.phoneInput = page.getByRole('textbox', { name: '+90 (___) ___ __ __' })
        this.submitButton = page.getByRole('button', { name: 'Giriş Yap / Hesap Oluştur' })
        this.registerTitle = page.getByRole('heading', { name: 'Hesap Oluştur' })
        this.yanlisTelNoUyari = page.getByText(/Lütfen ['’]5['’] rakamı ile başlayarak giriş yapınız\./);    }

    async navigateToLogin() {
        await this.page.goto('/login', {
            waitUntil: 'domcontentloaded'
        });
    }

    async enterPhoneNumber(phoneNumber) {
        await this.phoneInput.fill(phoneNumber);
        await this.submitButton.click();
    }
}