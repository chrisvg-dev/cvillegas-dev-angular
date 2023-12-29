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
                sh 'rm -rf /var/www/html/*'
                sh 'cp -rp dist/angular/* /var/www/html'
            }
        }
        stage('Restart Server') {
            steps {
                sh 'sudo service nginx restart'
            }
        }
    }
}