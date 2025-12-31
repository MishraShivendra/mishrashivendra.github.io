#!/bin/bash -ex

REMOTE=origin
BRANCH=main
MAX_RETRIES=10
SLEEP=10

for i in $(seq 1 $MAX_RETRIES); do
  echo "Attempt $i to push..."
  git push $REMOTE $BRANCH && exit 0
  echo "Push failed. Retrying in $SLEEP seconds..."
  sleep $SLEEP
done

echo "Push failed after $MAX_RETRIES attempts."
exit 1

