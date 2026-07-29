pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/huseyiinaydin/playwright-automation-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Testler patlasa bile boru hattı devam etsin ve rapor oluşsun diye catchError ekleyebiliriz
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            // Allure raporunu Jenkins'e oluştur ve bağla
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            echo 'Test koşumu tamamlandı, Allure raporu üretildi.'
        }
    }
}
