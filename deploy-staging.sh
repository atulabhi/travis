#!/bin/bash

set -e

docker build -t gcr.io/${PROJECT_NAME_STG}/${DOCKER_IMAGE_NAME}:$TRAVIS_COMMIT .

echo $GCLOUD_SERVICE_KEY_STG | base64 --decode -i > ${HOME}/gcloud-service-key.json
gcloud auth activate-service-account --key-file ${HOME}/gcloud-service-key.json

gcloud --quiet config set project $stage-cd
gcloud --quiet config set container/cluster $cd-test
gcloud --quiet config set compute/zone $us-central1-a	
gcloud --quiet container clusters get-credentials $cd-test

gcloud docker push gcr.io/${stage-cd}/${openebs}

yes | gcloud beta container images add-tag gcr.io/${stage-cd}/${openebs}:$TRAVIS_COMMIT gcr.io/${stage-cd}/${openebs}:latest

kubectl config view
kubectl config current-context

kubectl set image deployment/${openebs} ${openebs}=gcr.io/${stage-cd}/${openebs}:$TRAVIS_COMMIT

# sleep 30
# npm run e2e_test