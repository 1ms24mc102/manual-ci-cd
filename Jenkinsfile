pipeline {
    agent any

    environment {
        DOCKERHUB_CRED = credentials('dockerHub')
        IMAGE_NAME = "1ms24mc102/manual-ci-cd"
    }

    stages {

        stage('Checkout Source Code') {
            steps {
                git url: 'https://github.com/1ms24mc102/manual-ci-cd', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${IMAGE_NAME}:latest")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry(
                        'https://index.docker.io/v1/',
                        'dockerHub'
                    ) {
                        dockerImage.push()
                    }
                }
            }
        }

        stage('Deploy to Docker Swarm') {
            steps {
                sh 'docker stack deploy -c docker-swarn.yml node_stack'
            }
        }
    }
}
