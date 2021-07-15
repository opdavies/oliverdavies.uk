COMPOSE_PROJECT_NAME?=oliverdavies-uk
DOCKER_IMAGE_NAME:=ghcr.io/opdavies/$(COMPOSE_PROJECT_NAME)-web

assets-watch:
	npm ci
	npm run watch

build-images:
	docker image build \
		--file tools/docker/images/Dockerfile \
		--target=production \
		--tag $(DOCKER_IMAGE_NAME):latest \
		--tag $(DOCKER_IMAGE_NAME):$(DOCKER_TAG) \
		.

deploy:
	cd tools/deployment && ansible-playbook deploy.yml

disable:
	COMPOSE_PROJECT_NAME=$(COMPOSE_PROJECT_NAME) docker-compose down

enable:
	COMPOSE_PROJECT_NAME=$(COMPOSE_PROJECT_NAME) docker-compose up -d --build

ps:
	COMPOSE_PROJECT_NAME=$(COMPOSE_PROJECT_NAME) docker-compose ps

push-images:
	docker image push $(DOCKER_IMAGE_NAME):latest
	docker image push $(DOCKER_IMAGE_NAME):$(DOCKER_TAG)

.PHONY: *

# vim: noexpandtab filetype=make
