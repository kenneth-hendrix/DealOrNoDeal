# Deal or No Deal Game

An expected value and minumum deal calculator for the "Deal or No Deal" game, runs in a Docker container with Nginx serving the static files.

## Getting Started

These instructions will cover usage information and for the docker container.

### Prerequisites

- Docker
- Docker Compose

### Installation

1. **Clone the repo**

    ```sh
    git clone https://github.com/kenneth-hendrix/DealOrNoDeal.git
    cd DealOrNoDeal
    ```

2. **Build and Run with Docker Compose**

    Use Docker Compose to build and run the application in a Docker container.

    ```sh
    docker-compose up --build
    ```

    The command above will build the Docker image if it's the first time running or if changes are detected. It will then start the container.

### Accessing the Game

After starting the container, open your web browser and go to `http://localhost:8000`.

## Development

1. **Make Changes**: Edit the HTML/CSS/JS files as needed.
2. **Rebuild the Docker Image**: If you make changes to the application, rebuild the Docker image with:

    ```sh
    docker-compose up --build -d
    ```

## Deployment

This application is ready to be deployed on any system that supports Docker. For production environments, make sure to check the Docker and Nginx documentation for best practices regarding security and performance.
