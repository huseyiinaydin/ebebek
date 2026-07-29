// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Testlerimizin bulunacağı klasör
  fullyParallel: true, // Tüm testleri aynı anda paralel çalıştırır
  reporter: [
    ['html'],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  use: {
    headless: false,  // Tarayıcının gözümüzün önünde açılması için 'false' yaptık
    baseURL: 'https://the-internet.herokuapp.com', // Ya da test ettiğin sitenin ana adresi
    launchOptions: {
      slowMo: 1000,   // Adımları rahatça izleyebilmek için her eylemi 600ms yavaşlatıyoruz
    },
  },

  // Çalıştırılacak tarayıcı motorları (Projects)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    /*     {
          name: 'firefox',
          use: { ...devices['Desktop Firefox'] },
        },
        {
          name: 'Webkit',
          use: { ...devices['Desktop Safari'] },
        },
        {
          name: 'Mobile Safari',
          use: { ...devices['iPhone X'] },
        }, */
  ],
});
