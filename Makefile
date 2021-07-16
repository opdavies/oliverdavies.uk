COMPOSE_PROJECT_NAME?=oliverdavies-uk
DOCKER_IMAGE_NAME:=ghcr.io/opdavies/$(COMPOSE_PROJECT_NAME)-web

assets-watch:
	npm ci
	npm run watch

build-images:
	docker image build . \
		--file tools/docker/images/Dockerfile \
		--tag $(DOCKER_IMAGE_NAME):$(DOCKER_TAG) \
		--tag $(DOCKER_IMAGE_NAME):latest \
		--target=production

deploy:
	cd tools/deployment && ansible-playbook deploy.yml

destroy:
	COMPOSE_PROJECT_NAME=$(COMPOSE_PROJECT_NAME) docker-compose down --volumes --remove-orphans

disable:
	COMPOSE_PROJECT_NAME=$(COMPOSE_PROJECT_NAME) docker-compose down

enable:
	COMPOSE_PROJECT_NAME=$(COMPOSE_PROJECT_NAME) docker-compose up --detach --build

ps:
	COMPOSE_PROJECT_NAME=$(COMPOSE_PROJECT_NAME) docker-compose ps

push-images:
	docker image push $(DOCKER_IMAGE_NAME):$(DOCKER_TAG)
	docker image push $(DOCKER_IMAGE_NAME):latest

.PHONY: *

# vim: noexpandtab filetype=make
