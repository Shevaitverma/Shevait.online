pipeline {
    agent any

    environment {
        NVM_DIR = "${HOME}/.nvm"
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', credentialsId:'githubToken', url: 'https://github.com/Shevaitverma/Shevait.online.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                npm install
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                npm run build
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to production folder...'
                sh '''
                sudo rm -rf /var/www/html/*
                sudo cp -r dist/* /var/www/html/
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployed successfully!'
        }
        failure {
            echo '❌ Deployment failed. Check console output.'
        }
    }
}
