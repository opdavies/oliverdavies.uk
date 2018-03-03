ENV := dev
PORT := 8000

.PHONY: test

all: init generate-assets build

clean:
	rm -rf \
		node_modules \
		output_* \
		source/build \
		vendor

init:
	composer install
	yarn install

generate-assets:
	yarn run encore dev

build:
	vendor/bin/sculpin generate --env=$(ENV) --clean --no-interaction

serve:
	vendor/bin/sculpin generate --server --env=$(ENV) --port=$(PORT) --clean --no-interaction

watch:
	vendor/bin/sculpin generate --server --env=$(ENV) --port=$(PORT) --watch --clean --no-interaction
