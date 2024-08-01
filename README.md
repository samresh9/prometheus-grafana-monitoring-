# Logs and Monitoring with Node.js and Express Using Docker

This project sets up a Node.js application with Express for monitoring and logging using Prometheus. The application is containerized with Docker.

## Features

- **Express.js**: Minimal and flexible web application framework.
- **Prometheus**: Monitoring and alerting toolkit.
- **Docker**: Containerization for consistent environments.

## Getting Started

### Prerequisites

- Docker & Docker Compose
- Node.js & npm (for local development)

### Installation

1. **Clone the repository:**
    ```sh
    git clone git@github.com:samresh9/prometheus-grafana-monitoring-.git
    cd logs-and-monitoring
    ```

2. **Build and run with Docker:**
    ```sh
    docker-compose up --build
    ```

3. **Access the application:**
    - **App**: `http://localhost:5000`
    - **Prometheus**: `http://localhost:9090`
