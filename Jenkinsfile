pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'node-lts') {
                    sh 'npm install'
                    sh 'npm run build'

                }
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                    sudo chmod 777 -R /var/www/html
                    rm -rf /var/www/html/*
                    cp -rp dist/angular/* /var/www/html
                '''
            }
        }
        stage('Restart Server') {
            steps {
                sh 'sudo service nginx restart'
            }
        }
    }
}