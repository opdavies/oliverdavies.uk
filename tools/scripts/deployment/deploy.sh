#!/bin/bash

set -e -o pipefail

GIT_ARTIFACT_REPOSITORY="git@github.com:opdavies/oliverdavies.uk-built"
GIT_COMMIT_SHA="$(git rev-parse HEAD | cut -c 1-8)"
GIT_LOCAL_BRANCH="$(git current-branch)"

clean_old_artifact_repositories() {
  rm -fr ./build-artifact ./build-artifacts-repository || true
}

clone_the_artifact_repository() {
  git clone $GIT_ARTIFACT_REPOSITORY ./build-artifacts-repository
}

ensure_we_are_on_the_correct_branch() {
  git -C ./build-artifacts-repository checkout "$GIT_LOCAL_BRANCH" || git -C ./build-artifacts-repository checkout -b "$GIT_LOCAL_BRANCH"
}

generate_and_copy_static_files() {
  docker-compose run --rm assets run production
  docker-compose run --rm app generate --env prod

  docker cp oliverdaviesuk-sculpin_app_1:/app/output_prod ./build-artifact

  rsync --checksum --archive --compress --verbose --delete --exclude .git \
    build-artifact/ \
    build-artifacts-repository/
}

add_commit_and_push_static_files() {
  git -C ./build-artifacts-repository add --force .

  COMMIT_MESSAGE="Build artifact for the branch ${GIT_LOCAL_BRANCH} at commit ${GIT_COMMIT_SHA} - https://github.com/opdavies/oliverdavies-uk-sculpin/commit/${GIT_COMMIT_SHA}"

  git -C ./build-artifacts-repository commit --allow-empty -m "$COMMIT_MESSAGE"
  git -C ./build-artifacts-repository push -u origin HEAD
}

clean_old_artifact_repositories
clone_the_artifact_repository
ensure_we_are_on_the_correct_branch
generate_and_copy_static_files
add_commit_and_push_static_files
