pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'rm -rf /var/www/angular/*'
                sh 'cp -rp dist/angular/* /var/www/angular'
            }
        }
        stage('Restart Server') {
            steps {
                sh 'sudo service apache2 restart'
            }
        }
    }
}