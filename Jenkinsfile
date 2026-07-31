pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Git'ten en güncel kodu çek
                checkout scm
            }
        }

        stage('Clean Workspace & Results') {
            steps {
                // 🧹 SEN HİÇBİR ŞEY YAPMA: Jenkins eski tüm rapor artıklığını otomatik silsin!
                sh 'rm -rf allure-results allure-report test-results screenshots'
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
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            // Sadece o koşuma ait temiz Allure raporunu üret
            allure includeProperties: false,
                   jdk: '',
                   results: [[path: 'allure-results']]
        }
    }
}