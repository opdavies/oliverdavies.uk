COMPOSE_PROJECT_NAME?=oliverdavies-uk
DOCKER_WEB_IMAGE_NAME:=ghcr.io/opdavies/$(COMPOSE_PROJECT_NAME)-web

assets-watch:
	npm ci
	npm run watch

build-images:
	docker image build . \
		--file tools/docker/images/Dockerfile \
		--tag $(DOCKER_WEB_IMAGE_NAME):$(DOCKER_TAG) \
		--tag $(DOCKER_WEB_IMAGE_NAME):latest \
		--target=production

deploy:
	cd tools/deployment && ansible-playbook deploy.yml

destroy:
	COMPOSE_PROJECT_NAME=$(COMPOSE_PROJECT_NAME) docker-compose down --volumes --remove-orphans

disable:
	COMPOSE_PROJECT_NAME=$(COMPOSE_PROJECT_NAME) docker-compose down --remove-orphans

enable:
	COMPOSE_PROJECT_NAME=$(COMPOSE_PROJECT_NAME) docker-compose up --detach --build --remove-orphans

ps:
	COMPOSE_PROJECT_NAME=$(COMPOSE_PROJECT_NAME) docker-compose ps

push-images:
	docker image push $(DOCKER_WEB_IMAGE_NAME):$(DOCKER_TAG)
	docker image push $(DOCKER_WEB_IMAGE_NAME):latest

run-production:
	docker-compose --file docker-compose-production.yaml up --detach --remove-orphans

.PHONY: *

# vim: noexpandtab filetype=make
