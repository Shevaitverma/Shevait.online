pipeline {
    agent any
    tools {
        nodejs 'node-23.11.0'
    }

    stages {
        stage('print version...') {
            steps {
                sh 'npm version'
            }
        }
        stage('install') {
            steps {
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('build success') {
            steps {
                echo 'build success'
            }
        }
      
    }
    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed.'
        }
    }
}
