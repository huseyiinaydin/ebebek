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
    girilmemisTelHataMesaji;
    girilmemisEpostaHataMesaji;


    constructor(page) {
        this.page = page;
        this.phoneInput = page.getByRole('textbox', { name: '+90 (___) ___ __ __' });
        this.submitButton = page.getByRole('button', { name: 'Giriş Yap / Hesap Oluştur' });
        this.registerTitle = page.getByRole('heading', { name: 'Hesap Oluştur' });
        this.yanlisTelNoUyari = page.getByText(/Lütfen ['’]5['’] rakamı ile başlayarak giriş yapınız\./,{ exact: true });
        this.epostaTab = page.getByText('E-postaE-posta'); // veya page.getByRole('tab', { name: /E-posta/i });
        this.epostaInput = page.getByRole('textbox', { name: 'E-posta adresiniz' });
        this.gecersizEpostaGirisi = page.getByText(/Geçerli bir e-posta adresi giriniz./,{ exact: true });
        this.sayfaBoslugu = page.locator('section');
        this.girilmemisTelHataMesaji = page.getByText('Lütfen 10 haneli olan geçerli bir telefon numarası giriniz.',{ exact: true });
        this.girilmemisEpostaHataMesaji = page.getByText('Bu alan gereklidir.',{ exact: true });


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
    }

    async enterEposta(email) {
        await this.epostaInput.fill(email);
        await this.submitButton.click();

    }

    async clickEpostaTextbox() {
        await this.epostaInput.click();
    }

    async clickTelTextbox(){
        await this.phoneInput.click();
        await this.sayfaBoslugu.click();

    }
}