const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 60000, // Her bir test için toplam süreyi 60 saniye yaptık (varsayılan 30'du)
  testDir: './tests',
  fullyParallel: true,
  reporter: [
    ['html'],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  use: {
    headless: false,
    baseURL: 'https://www.e-bebek.com',
    actionTimeout: 15000, // Tıklama/yazma gibi aksiyonlar için 15 saniye bekleme hakkı
    navigationTimeout: 30000, // Sayfa geçişleri için 30 saniye bekleme hakkı
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    launchOptions: {
      slowMo: 500, // Adımları rahat izlemek için yarım saniye gecikme
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});