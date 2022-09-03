#!/usr/bin/env bash

# Execute in the pipeline pre stage to set up the environment

# Rewrite environment variables

echo "this is: $VITE_BASE_SERVER_URL"

# VITE_BASE_SERVER_URL
if [[ $CI_COMMIT_REF_NAME == "master" ]] ||
    [[ $CI_COMMIT_REF_NAME =~ ^hotfix.* ]] ||
    [[ $CI_COMMIT_REF_NAME =~ ^release.* ]] ||
    [[ $CI_COMMIT_REF_NAME =~ ^v.* ]]; then
    sed -i "s+@VITE_BASE_SERVER_URL+$VITE_BASE_SERVER_URL+g" .env.production
    cat .env.production
else
    sed -i "s+@VITE_BASE_SERVER_URL+$VITE_BASE_SERVER_URL+g" .env.development
    cat .env.development
fi
