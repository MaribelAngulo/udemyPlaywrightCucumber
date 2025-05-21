pipeline {
  agent any

  environment {
    CI = 'true'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Instalar dependencias') {
      steps {
        bat 'npm install'
        bat 'npx playwright install'
      }
    }

    stage('Ejecutar pruebas') {
      steps {
        bat 'npm test'
      }
    }

    stage('Generar reporte') {
      steps {
        bat 'npm run report'
      }
    }

    stage('Publicar reporte HTML') {
      steps {
        publishHTML([
          reportDir: 'reports',
          reportFiles: 'cucumber_report.html',
          reportName: 'Reporte Cucumber',
          keepAll: true,
          alwaysLinkToLastBuild: true,
          allowMissing: false
        ])
      }
    }
  }

  post {
    always {
      echo '¡Pipeline finalizado!'
    }
    failure {
      echo 'El build falló. Revisa los logs y el reporte si fue generado.'
    }
  }
}
