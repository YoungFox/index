pipeline {
  stages{
    steps {
      sh 'docker login -u yangwenliang -p h7sf+awkh7sf+awk'
    }
  }
  agent {
      docker {
          image '16.16.0-alpine' 
          args '-p 3000:3000' 
      }
  }
  stages {
      stage('Build') { 
          steps {
              sh 'npm install' 
          }
      }
  }
}