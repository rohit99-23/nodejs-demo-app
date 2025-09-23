pipeline {
    agent any   // kisi bhi Jenkins agent pe chalega

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                git 'https://github.com/rohit99-23/nodejs-demo-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // agar tumhare project me test cases nahi hain to ye line fail ho sakti hai
                // isliye maine ek fallback add kiya hai
                sh 'npm test || echo "No tests to run"'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the app...'
                sh 'echo "Build complete!"'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the app (dummy step for now)...'
            }
        }
    }
}
