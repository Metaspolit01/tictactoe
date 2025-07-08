#!/bin/bash

# Disable Docker BuildKit
export DOCKER_BUILDKIT=0

port=8000
url="http://localhost:$port"

# Check if the container is running
if [ "$(docker ps -q -f name=tic-tac-toe-game)" ]; then
    echo "Container is already running"
else
    echo "Container is not running"
    docker-compose up --build -d
fi


echo "the tic-tac-toe game is running on $url "
echo "--------------------------------"
echo "copy the url and paste in your browser"
echo "--------------------------------"
echo "1. stop the container"
echo "2. delete (stop and remove) the container"
echo "3. leave it running and exit"
echo "--------------------------------"
read -p "Enter your choice (1/2/3): " choice

case $choice in
    1)
        docker-compose stop
        ;;
    2)
        docker-compose down
        ;;
    3)
        echo "leaving the container running"
        ;;
esac



