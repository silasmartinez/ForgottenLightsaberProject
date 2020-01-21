#!/bin/bash

VERSION=$(head package.json| grep version| awk -F\" '{print $4}')
REPO="forgotten.azurecr.io/forgottenlightsaber:$VERSION"
npm run build
echo "Running docker build..."
docker build -f Dockerfile -t $REPO .
echo "Pushing to remote container store"
docker push $REPO 
