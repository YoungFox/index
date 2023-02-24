pipeline {
    agent {
        docker {
            image 'node:16.16.0-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm config set strict-ssl false'
                sh 'npm install' 
            }
        }
    }
}