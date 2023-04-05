pipeline {
    agent any

    stages {
        stage('Run') {
            steps {
                sh 'npm install -g @angular/cli@latest'
                sh 'npm run start'
            }
        }
    }
}