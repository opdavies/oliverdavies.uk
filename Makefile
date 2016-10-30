.PHONY: clean

BOWER="node_modules/.bin/bower"
GULP="node_modules/.bin/gulp"
SCULPIN="vendor/bin/sculpin"

init: build watch

build:
	composer install \
		&& yarn \
		&& $(BOWER) install \
		&& $(GULP) build

clean:
	rm -rf node_modules/ output_*/ vendor/

generate:
	$(SCULPIN) generate --clean --no-interaction

gulp:
	$(GULP) watch

serve:
	$(SCULPIN) generate --server --clean --no-interaction

watch:
	$(SCULPIN) generate --server --watch --clean --no-interaction
