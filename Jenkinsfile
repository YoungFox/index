pipeline {
    agent {
        docker {
            image 'node:16.16.0-alpine' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm config set strict-ssl false'
                sh 'npm install' 
            }
        }
        // stage('Test') {
        //     steps {
        //         sh './jenkins/scripts/test.sh'
        //     }
        // }
        // stage('Deliver') { 
        //     steps {
        //         sh "chmod +x -R ${env.WORKSPACE}"
        //         sh './jenkins/scripts/deliver.sh' 
        //         input message: 'Finished using the web site? (Click "Proceed" to continue)' 
        //         // sh './jenkins/scripts/kill.sh' 
        //     }
        // }

        stage('Deliver for development') {
            when {
                branch 'development' 
            }
            steps {
               sh "chmod +x -R ${env.WORKSPACE}"
                sh './jenkins/scripts/deliver-for-development.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
        stage('Deploy for production') {
            when {
                branch 'production'  
            }
            steps {
               sh "chmod +x -R ${env.WORKSPACE}"
                sh './jenkins/scripts/deploy-for-production.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}