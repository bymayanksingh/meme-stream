#!/bin/bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
rm package-lock.json
npm install
