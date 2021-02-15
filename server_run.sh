#!/bin/bash

touch .env
echo "NODE_ENV=development" >> .env
echo "PORT=8081" >> .env
echo "MONGODB_URL=mongodb://127.0.0.1:27017/memeapp" >> .env 

#DB or any other environment variables you want to setup.

npm start
