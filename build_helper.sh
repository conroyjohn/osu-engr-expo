#!/usr/bin/env bash

LAMBDA_DIRS="hello-world"

#define temporary variables
S3_SCRATCH_BUCKET= $1
BASEDIR=$PWD
LAMBDASDIR=$PWD/lambdas
BUILD_DIR=$PWD/build

let exitcode=0
let currentexitcode=0

# copy cloudformation templates
cp $PWD/cloudformation/*.yaml $BUILD_DIR
cp $PWD/cloudformation/*config.json $BUILD_DIR

# copy lambda code and install modules if needed
for module in $LAMBDA_DIRS
do
    echo "Building Module:$module"
    cp -R $LAMBDASDIR/$module $BUILD_DIR
    if [ $? -gt 0 ]; then
      echo "Build packaging failed for $module"
      exit $?
    fi
    if [ -f $BUILD_DIR/$module/requirements.txt ]; then
      echo "$BUILD_DIR/$module/requirements.txt exists."
      pip install -r $BUILD_DIR/$module/requirements.txt -t $BUILD_DIR/$module
    fi
done

cd $BUILD_DIR && aws cloudformation package --template osu-engr-expo.yaml --s3-bucket ${S3_ARTIFACT_BUCKET} --output-template-file osu-engr-expo-packaged.yaml  --force-upload

exit 0
