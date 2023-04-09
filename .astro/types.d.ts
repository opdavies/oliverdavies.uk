declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S | ((context: SchemaContext) => S);
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	const entryMap: {
		"blog": {
"10-years-working-full-time-drupal-php.md": {
  id: "10-years-working-full-time-drupal-php.md",
  slug: "10-years-working-full-time-drupal-php",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2014.md": {
  id: "2014.md",
  slug: "2014",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"accessible-bristol-site.md": {
  id: "accessible-bristol-site.md",
  slug: "accessible-bristol-site",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"add-taxonomy-term-multiple-nodes-using-sql.md": {
  id: "add-taxonomy-term-multiple-nodes-using-sql.md",
  slug: "add-taxonomy-term-multiple-nodes-using-sql",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"adding-custom-theme-templates-drupal-7.md": {
  id: "adding-custom-theme-templates-drupal-7.md",
  slug: "adding-custom-theme-templates-drupal-7",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"announcing-the-drupal-vm-generator.md": {
  id: "announcing-the-drupal-vm-generator.md",
  slug: "announcing-the-drupal-vm-generator",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"automating-sculpin-jenkins.md": {
  id: "automating-sculpin-jenkins.md",
  slug: "automating-sculpin-jenkins",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"back-future-gits-diff-apply-commands.md": {
  id: "back-future-gits-diff-apply-commands.md",
  slug: "back-future-gits-diff-apply-commands",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"building-gmail-filters-in-php.md": {
  id: "building-gmail-filters-in-php.md",
  slug: "building-gmail-filters-in-php",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"building-oliverdavies-uk-1-initial-setup.md": {
  id: "building-oliverdavies-uk-1-initial-setup.md",
  slug: "building-oliverdavies-uk-1-initial-setup",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"building-the-new-phpsw-website.md": {
  id: "building-the-new-phpsw-website.md",
  slug: "building-the-new-phpsw-website",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"change-content-type-multiple-nodes-using-sql.md": {
  id: "change-content-type-multiple-nodes-using-sql.md",
  slug: "change-content-type-multiple-nodes-using-sql",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"checking-if-user-logged-drupal-right-way.md": {
  id: "checking-if-user-logged-drupal-right-way.md",
  slug: "checking-if-user-logged-drupal-right-way",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"checkout-specific-revision-svn-command-line.md": {
  id: "checkout-specific-revision-svn-command-line.md",
  slug: "checkout-specific-revision-svn-command-line",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"cleanly-retrieving-user-profile-data-using-entity-metadata-wrapper.md": {
  id: "cleanly-retrieving-user-profile-data-using-entity-metadata-wrapper.md",
  slug: "cleanly-retrieving-user-profile-data-using-entity-metadata-wrapper",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"conditional-email-addresses-webform.md": {
  id: "conditional-email-addresses-webform.md",
  slug: "conditional-email-addresses-webform",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"configuring-the-reroute-email-module.md": {
  id: "configuring-the-reroute-email-module.md",
  slug: "configuring-the-reroute-email-module",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"continuous-integration-vs-continuous-integration.md": {
  id: "continuous-integration-vs-continuous-integration.md",
  slug: "continuous-integration-vs-continuous-integration",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"create-better-photo-gallery-drupal-part-1.md": {
  id: "create-better-photo-gallery-drupal-part-1.md",
  slug: "create-better-photo-gallery-drupal-part-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"create-better-photo-gallery-drupal-part-2.md": {
  id: "create-better-photo-gallery-drupal-part-2.md",
  slug: "create-better-photo-gallery-drupal-part-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"create-better-photo-gallery-drupal-part-21.md": {
  id: "create-better-photo-gallery-drupal-part-21.md",
  slug: "create-better-photo-gallery-drupal-part-21",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"create-better-photo-gallery-drupal-part-3.md": {
  id: "create-better-photo-gallery-drupal-part-3.md",
  slug: "create-better-photo-gallery-drupal-part-3",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"create-block-social-media-icons-using-cck-views-and-nodequeue.md": {
  id: "create-block-social-media-icons-using-cck-views-and-nodequeue.md",
  slug: "create-block-social-media-icons-using-cck-views-and-nodequeue",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"create-flickr-photo-gallery-using-feeds-cck-views.md": {
  id: "create-flickr-photo-gallery-using-feeds-cck-views.md",
  slug: "create-flickr-photo-gallery-using-feeds-cck-views",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"create-multigroups-drupal-7-using-field-collections.md": {
  id: "create-multigroups-drupal-7-using-field-collections.md",
  slug: "create-multigroups-drupal-7-using-field-collections",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"create-omega-subtheme-less-css-preprocessor-using-omega-tools-and-drush.md": {
  id: "create-omega-subtheme-less-css-preprocessor-using-omega-tools-and-drush.md",
  slug: "create-omega-subtheme-less-css-preprocessor-using-omega-tools-and-drush",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"create-slideshow-multiple-images-using-fancy-slide.md": {
  id: "create-slideshow-multiple-images-using-fancy-slide.md",
  slug: "create-slideshow-multiple-images-using-fancy-slide",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"create-virtual-hosts-mac-os-x-using-virtualhostx.md": {
  id: "create-virtual-hosts-mac-os-x-using-virtualhostx.md",
  slug: "create-virtual-hosts-mac-os-x-using-virtualhostx",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"create-zen-sub-theme-using-drush.md": {
  id: "create-zen-sub-theme-using-drush.md",
  slug: "create-zen-sub-theme-using-drush",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"creating-custom-phpunit-command-ddev.md": {
  id: "creating-custom-phpunit-command-ddev.md",
  slug: "creating-custom-phpunit-command-ddev",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"creating-custom-phpunit-command-docksal.md": {
  id: "creating-custom-phpunit-command-docksal.md",
  slug: "creating-custom-phpunit-command-docksal",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"creating-local-and-staging-sites-drupals-domain-module-enabled.md": {
  id: "creating-local-and-staging-sites-drupals-domain-module-enabled.md",
  slug: "creating-local-and-staging-sites-drupals-domain-module-enabled",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"creating-using-custom-tokens-drupal-7.md": {
  id: "creating-using-custom-tokens-drupal-7.md",
  slug: "creating-using-custom-tokens-drupal-7",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"croeso-php-south-wales.md": {
  id: "croeso-php-south-wales.md",
  slug: "croeso-php-south-wales",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"debugging-drupal-commerce-illuminate-collections.md": {
  id: "debugging-drupal-commerce-illuminate-collections.md",
  slug: "debugging-drupal-commerce-illuminate-collections",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"debugging-php-docker-xdebug-neovim-dap.md": {
  id: "debugging-php-docker-xdebug-neovim-dap.md",
  slug: "debugging-php-docker-xdebug-neovim-dap",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"decorating-entity-metadata-wrapper-add-refactor-methods.md": {
  id: "decorating-entity-metadata-wrapper-add-refactor-methods.md",
  slug: "decorating-entity-metadata-wrapper-add-refactor-methods",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"display-custom-menu-drupal-7-theme-template-file.md": {
  id: "display-custom-menu-drupal-7-theme-template-file.md",
  slug: "display-custom-menu-drupal-7-theme-template-file",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"display-git-branch-or-tag-names-your-bash-prompt.md": {
  id: "display-git-branch-or-tag-names-your-bash-prompt.md",
  slug: "display-git-branch-or-tag-names-your-bash-prompt",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"display-number-facebook-fans-php.md": {
  id: "display-number-facebook-fans-php.md",
  slug: "display-number-facebook-fans-php",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"dividing-drupals-process-and-preprocess-functions-separate-files.md": {
  id: "dividing-drupals-process-and-preprocess-functions-separate-files.md",
  slug: "dividing-drupals-process-and-preprocess-functions-separate-files",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"docker-resources.md": {
  id: "docker-resources.md",
  slug: "docker-resources",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"dont-bootstrap-drupal-use-drush.md": {
  id: "dont-bootstrap-drupal-use-drush.md",
  slug: "dont-bootstrap-drupal-use-drush",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"download-different-versions-drupal-drush.md": {
  id: "download-different-versions-drupal-drush.md",
  slug: "download-different-versions-drupal-drush",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"drupal-8-5-released.md": {
  id: "drupal-8-5-released.md",
  slug: "drupal-8-5-released",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"drupal-8-commerce-fixing-error-on-user-checkout.md": {
  id: "drupal-8-commerce-fixing-error-on-user-checkout.md",
  slug: "drupal-8-commerce-fixing-error-on-user-checkout",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"drupal-association.md": {
  id: "drupal-association.md",
  slug: "drupal-association",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"drupal-automated-testing-workshop-notes.md": {
  id: "drupal-automated-testing-workshop-notes.md",
  slug: "drupal-automated-testing-workshop-notes",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"drupal-body-classes-tailwind-css.md": {
  id: "drupal-body-classes-tailwind-css.md",
  slug: "drupal-body-classes-tailwind-css",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"drupal-bristol-testing-workshop.md": {
  id: "drupal-bristol-testing-workshop.md",
  slug: "drupal-bristol-testing-workshop",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"drupal-vm-generator-updates.md": {
  id: "drupal-vm-generator-updates.md",
  slug: "drupal-vm-generator-updates",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"drupalcamp-bristol-2018.md": {
  id: "drupalcamp-bristol-2018.md",
  slug: "drupalcamp-bristol-2018",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"drupalcamp-bristol-2019-speakers-sessions-announced.md": {
  id: "drupalcamp-bristol-2019-speakers-sessions-announced.md",
  slug: "drupalcamp-bristol-2019-speakers-sessions-announced",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"drupalcamp-bristol-early-bird-tickets-sessions-sponsors.md": {
  id: "drupalcamp-bristol-early-bird-tickets-sessions-sponsors.md",
  slug: "drupalcamp-bristol-early-bird-tickets-sessions-sponsors",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"drupalcamp-london-2014.md": {
  id: "drupalcamp-london-2014.md",
  slug: "drupalcamp-london-2014",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"drupalcamp-london-2019-tickets.md": {
  id: "drupalcamp-london-2019-tickets.md",
  slug: "drupalcamp-london-2019-tickets",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"drupalcamp-london-testing-workshop.md": {
  id: "drupalcamp-london-testing-workshop.md",
  slug: "drupalcamp-london-testing-workshop",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"easier-git-repository-cloning-insteadof.md": {
  id: "easier-git-repository-cloning-insteadof.md",
  slug: "easier-git-repository-cloning-insteadof",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"easier-sculpin-commands-composer-npm-scripts.md": {
  id: "easier-sculpin-commands-composer-npm-scripts.md",
  slug: "easier-sculpin-commands-composer-npm-scripts",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"easily-embed-typekit-fonts-your-drupal-website.md": {
  id: "easily-embed-typekit-fonts-your-drupal-website.md",
  slug: "easily-embed-typekit-fonts-your-drupal-website",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"entityform.md": {
  id: "entityform.md",
  slug: "entityform",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"experimenting-events-drupal-8.md": {
  id: "experimenting-events-drupal-8.md",
  slug: "experimenting-events-drupal-8",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"feature-flags-sculpin.md": {
  id: "feature-flags-sculpin.md",
  slug: "feature-flags-sculpin",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"finding-the-last-commit-that-a-patch-applies-to.md": {
  id: "finding-the-last-commit-that-a-patch-applies-to.md",
  slug: "finding-the-last-commit-that-a-patch-applies-to",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"fixing-drupal-simpletest-issues-inside-docker-containers.md": {
  id: "fixing-drupal-simpletest-issues-inside-docker-containers.md",
  slug: "fixing-drupal-simpletest-issues-inside-docker-containers",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"forward-one-domain-another-using-modrewrite-htaccess.md": {
  id: "forward-one-domain-another-using-modrewrite-htaccess.md",
  slug: "forward-one-domain-another-using-modrewrite-htaccess",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"git-format-patch-your-friend.md": {
  id: "git-format-patch-your-friend.md",
  slug: "git-format-patch-your-friend",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"github-actions-phpunit-colours.md": {
  id: "github-actions-phpunit-colours.md",
  slug: "github-actions-phpunit-colours",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"going-drupalcon.md": {
  id: "going-drupalcon.md",
  slug: "going-drupalcon",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"going-full-vim.md": {
  id: "going-full-vim.md",
  slug: "going-full-vim",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"how-add-date-popup-calendar-custom-form.md": {
  id: "how-add-date-popup-calendar-custom-form.md",
  slug: "how-add-date-popup-calendar-custom-form",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"how-create-apply-patches.md": {
  id: "how-create-apply-patches.md",
  slug: "how-create-apply-patches",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"how-fix-vagrant-loading-wrong-virtual-machine.md": {
  id: "how-fix-vagrant-loading-wrong-virtual-machine.md",
  slug: "how-fix-vagrant-loading-wrong-virtual-machine",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"how-install-configure-subversion-svn-server-ubuntu.md": {
  id: "how-install-configure-subversion-svn-server-ubuntu.md",
  slug: "how-install-configure-subversion-svn-server-ubuntu",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"how-put-your-php-application-subdirectory-another-site-nginx.md": {
  id: "how-put-your-php-application-subdirectory-another-site-nginx.md",
  slug: "how-put-your-php-application-subdirectory-another-site-nginx",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"how-run-drupal-8-phpunit-tests-within-docksal-phpstorm.md": {
  id: "how-run-drupal-8-phpunit-tests-within-docksal-phpstorm.md",
  slug: "how-run-drupal-8-phpunit-tests-within-docksal-phpstorm",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"how-use-environment-variables-your-drupal-settings-docksal.md": {
  id: "how-use-environment-variables-your-drupal-settings-docksal.md",
  slug: "how-use-environment-variables-your-drupal-settings-docksal",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"ignoring-phpcs-sniffs-phpunit-tests.md": {
  id: "ignoring-phpcs-sniffs-phpunit-tests.md",
  slug: "ignoring-phpcs-sniffs-phpunit-tests",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"imagefield-import-archive.md": {
  id: "imagefield-import-archive.md",
  slug: "imagefield-import-archive",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"improve-jpg-quality-imagecache-and-imageapi.md": {
  id: "improve-jpg-quality-imagecache-and-imageapi.md",
  slug: "improve-jpg-quality-imagecache-and-imageapi",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"include-css-fonts-using-sass-each-loop.md": {
  id: "include-css-fonts-using-sass-each-loop.md",
  slug: "include-css-fonts-using-sass-each-loop",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"include-environment-specific-settings-files-pantheon.md": {
  id: "include-environment-specific-settings-files-pantheon.md",
  slug: "include-environment-specific-settings-files-pantheon",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"include-local-drupal-settings-file-environment-configuration-and-overrides.md": {
  id: "include-local-drupal-settings-file-environment-configuration-and-overrides.md",
  slug: "include-local-drupal-settings-file-environment-configuration-and-overrides",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"install-nomensa-media-player-drupal.md": {
  id: "install-nomensa-media-player-drupal.md",
  slug: "install-nomensa-media-player-drupal",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"installing-nagios-centos.md": {
  id: "installing-nagios-centos.md",
  slug: "installing-nagios-centos",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"interview-drupal-expert-code-enigma.md": {
  id: "interview-drupal-expert-code-enigma.md",
  slug: "interview-drupal-expert-code-enigma",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"introducing-drupal-distribution-meetups.md": {
  id: "introducing-drupal-distribution-meetups.md",
  slug: "introducing-drupal-distribution-meetups",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"introducing-the-drupal-meetups-twitterbot.md": {
  id: "introducing-the-drupal-meetups-twitterbot.md",
  slug: "introducing-the-drupal-meetups-twitterbot",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"leaving-nomensa-joining-precedent.md": {
  id: "leaving-nomensa-joining-precedent.md",
  slug: "leaving-nomensa-joining-precedent",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"live-blogging-symfonylive-london-2019.md": {
  id: "live-blogging-symfonylive-london-2019.md",
  slug: "live-blogging-symfonylive-london-2019",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"looking-forward-to-drupalcamp-london.md": {
  id: "looking-forward-to-drupalcamp-london.md",
  slug: "looking-forward-to-drupalcamp-london",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"mediacurrent-contrib-half-hour-is-back.md": {
  id: "mediacurrent-contrib-half-hour-is-back.md",
  slug: "mediacurrent-contrib-half-hour-is-back",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"migrating-drupal-8-introduction.md": {
  id: "migrating-drupal-8-introduction.md",
  slug: "migrating-drupal-8-introduction",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"minimum-core-version.md": {
  id: "minimum-core-version.md",
  slug: "minimum-core-version",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"my-first-blog-post-published-for-inviqa.md": {
  id: "my-first-blog-post-published-for-inviqa.md",
  slug: "my-first-blog-post-published-for-inviqa",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"my-first-six-months-transport-wales.md": {
  id: "my-first-six-months-transport-wales.md",
  slug: "my-first-six-months-transport-wales",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"my-new-drupal-modules.md": {
  id: "my-new-drupal-modules.md",
  slug: "my-new-drupal-modules",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"my-sublime-text-2-settings.md": {
  id: "my-sublime-text-2-settings.md",
  slug: "my-sublime-text-2-settings",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"neovim-database-plugin-vim-dadbod-ui.md": {
  id: "neovim-database-plugin-vim-dadbod-ui.md",
  slug: "neovim-database-plugin-vim-dadbod-ui",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"nginx-redirects-query-string-arguments.md": {
  id: "nginx-redirects-query-string-arguments.md",
  slug: "nginx-redirects-query-string-arguments",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"null-users-system-users-drupal.md": {
  id: "null-users-system-users-drupal.md",
  slug: "null-users-system-users-drupal",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"open-sublime-text-2-mac-os-x-command-line.md": {
  id: "open-sublime-text-2-mac-os-x-command-line.md",
  slug: "open-sublime-text-2-mac-os-x-command-line",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"presenting-on-tailwind-css-and-ansible-at-cms-philly.md": {
  id: "presenting-on-tailwind-css-and-ansible-at-cms-philly.md",
  slug: "presenting-on-tailwind-css-and-ansible-at-cms-philly",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"presenting-pdf-slides-using-pdfpc-pdf-presenter-console.md": {
  id: "presenting-pdf-slides-using-pdfpc-pdf-presenter-console.md",
  slug: "presenting-pdf-slides-using-pdfpc-pdf-presenter-console",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"prevent-apache-displaying-text-files-within-web-browser.md": {
  id: "prevent-apache-displaying-text-files-within-web-browser.md",
  slug: "prevent-apache-displaying-text-files-within-web-browser",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"proctor-stevenson.md": {
  id: "proctor-stevenson.md",
  slug: "proctor-stevenson",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"proctors-hosting-next-drupal-meetup.md": {
  id: "proctors-hosting-next-drupal-meetup.md",
  slug: "proctors-hosting-next-drupal-meetup",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"psr4-autoloading-test-cases-drupal-7.md": {
  id: "psr4-autoloading-test-cases-drupal-7.md",
  slug: "psr4-autoloading-test-cases-drupal-7",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"published-my-first-docker-images-docker-hub-adr-tools-sculpin-rst2pdf.md": {
  id: "published-my-first-docker-images-docker-hub-adr-tools-sculpin-rst2pdf.md",
  slug: "published-my-first-docker-images-docker-hub-adr-tools-sculpin-rst2pdf",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"published-my-first-npm-package.md": {
  id: "published-my-first-npm-package.md",
  slug: "published-my-first-npm-package",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"publishing-sculpin-sites-with-github-pages.md": {
  id: "publishing-sculpin-sites-with-github-pages.md",
  slug: "publishing-sculpin-sites-with-github-pages",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"queuing-private-messages-drupal-8.md": {
  id: "queuing-private-messages-drupal-8.md",
  slug: "queuing-private-messages-drupal-8",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"quick-project-switching-phpstorm.md": {
  id: "quick-project-switching-phpstorm.md",
  slug: "quick-project-switching-phpstorm",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"quickest-way-install-sublime-text-2-ubuntu.md": {
  id: "quickest-way-install-sublime-text-2-ubuntu.md",
  slug: "quickest-way-install-sublime-text-2-ubuntu",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"quickly-apply-patches-using-git-curl-or-wget.md": {
  id: "quickly-apply-patches-using-git-curl-or-wget.md",
  slug: "quickly-apply-patches-using-git-curl-or-wget",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"quickly-import-multiples-images-using-imagefieldimport-module.md": {
  id: "quickly-import-multiples-images-using-imagefieldimport-module.md",
  slug: "quickly-import-multiples-images-using-imagefieldimport-module",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"rebuilding-acquia-dashboard-with-vuejs-tailwind-css.md": {
  id: "rebuilding-acquia-dashboard-with-vuejs-tailwind-css.md",
  slug: "rebuilding-acquia-dashboard-with-vuejs-tailwind-css",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"rebuilding-bartik-drupals-default-theme-vuejs-tailwind-css-part-2.md": {
  id: "rebuilding-bartik-drupals-default-theme-vuejs-tailwind-css-part-2.md",
  slug: "rebuilding-bartik-drupals-default-theme-vuejs-tailwind-css-part-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"rebuilding-bartik-drupals-default-theme-vuejs-tailwind-css.md": {
  id: "rebuilding-bartik-drupals-default-theme-vuejs-tailwind-css.md",
  slug: "rebuilding-bartik-drupals-default-theme-vuejs-tailwind-css",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"reflections-speaking-unifieddiff.md": {
  id: "reflections-speaking-unifieddiff.md",
  slug: "reflections-speaking-unifieddiff",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"renaming-gray-grey-tailwind-css.md": {
  id: "renaming-gray-grey-tailwind-css.md",
  slug: "renaming-gray-grey-tailwind-css",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"restructuring-my-tailwindjs-configuration-files.md": {
  id: "restructuring-my-tailwindjs-configuration-files.md",
  slug: "restructuring-my-tailwindjs-configuration-files",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"review-adminhover-module.md": {
  id: "review-adminhover-module.md",
  slug: "review-adminhover-module",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"review-image-caption-module.md": {
  id: "review-image-caption-module.md",
  slug: "review-image-caption-module",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"review-teleport-module.md": {
  id: "review-teleport-module.md",
  slug: "review-teleport-module",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"running-drupal-88-symfony-local-server.md": {
  id: "running-drupal-88-symfony-local-server.md",
  slug: "running-drupal-88-symfony-local-server",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"sculpin-twig-resources.md": {
  id: "sculpin-twig-resources.md",
  slug: "sculpin-twig-resources",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"simplifying-drupal-migrations-xautoload.md": {
  id: "simplifying-drupal-migrations-xautoload.md",
  slug: "simplifying-drupal-migrations-xautoload",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"site-upgraded-drupal-7.md": {
  id: "site-upgraded-drupal-7.md",
  slug: "site-upgraded-drupal-7",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"some-useful-git-aliases.md": {
  id: "some-useful-git-aliases.md",
  slug: "some-useful-git-aliases",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"some-useful-links-using-simpletest-drupal.md": {
  id: "some-useful-links-using-simpletest-drupal.md",
  slug: "some-useful-links-using-simpletest-drupal",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"south-wales-drupal-user-group.md": {
  id: "south-wales-drupal-user-group.md",
  slug: "south-wales-drupal-user-group",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"speaking-drupalcon-amsterdam.md": {
  id: "speaking-drupalcon-amsterdam.md",
  slug: "speaking-drupalcon-amsterdam",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"speaking-drupalcon-europe-2020.md": {
  id: "speaking-drupalcon-europe-2020.md",
  slug: "speaking-drupalcon-europe-2020",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"speaking-remotely-during-covid-19.md": {
  id: "speaking-remotely-during-covid-19.md",
  slug: "speaking-remotely-during-covid-19",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"splitting-new-drupal-project-from-repo.md": {
  id: "splitting-new-drupal-project-from-repo.md",
  slug: "splitting-new-drupal-project-from-repo",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"streaming-spabby-gary-hockin-about-drupal.md": {
  id: "streaming-spabby-gary-hockin-about-drupal.md",
  slug: "streaming-spabby-gary-hockin-about-drupal",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"style-drupal-6s-taxonomy-lists-php-css-and-jquery.md": {
  id: "style-drupal-6s-taxonomy-lists-php-css-and-jquery.md",
  slug: "style-drupal-6s-taxonomy-lists-php-css-and-jquery",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"survey-results-my-drupalcon-europe-session-test-driven-drupal.md": {
  id: "survey-results-my-drupalcon-europe-session-test-driven-drupal.md",
  slug: "survey-results-my-drupalcon-europe-session-test-driven-drupal",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"test-driven-ansible-role-development-molecule.md": {
  id: "test-driven-ansible-role-development-molecule.md",
  slug: "test-driven-ansible-role-development-molecule",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"test-driven-drupal-on-gitstore-leanpub.md": {
  id: "test-driven-drupal-on-gitstore-leanpub.md",
  slug: "test-driven-drupal-on-gitstore-leanpub",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"test-driven-drupal-presentation-drupalcon-europe.md": {
  id: "test-driven-drupal-presentation-drupalcon-europe.md",
  slug: "test-driven-drupal-presentation-drupalcon-europe",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"testing-tailwind-css-plugins-jest.md": {
  id: "testing-tailwind-css-plugins-jest.md",
  slug: "testing-tailwind-css-plugins-jest",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"thanks.md": {
  id: "thanks.md",
  slug: "thanks",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"turning-drupal-module-into-feature.md": {
  id: "turning-drupal-module-into-feature.md",
  slug: "turning-drupal-module-into-feature",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"tweets-drupalcamp-london.md": {
  id: "tweets-drupalcamp-london.md",
  slug: "tweets-drupalcamp-london",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"uis-ive-rebuilt-tailwind-css.md": {
  id: "uis-ive-rebuilt-tailwind-css.md",
  slug: "uis-ive-rebuilt-tailwind-css",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"updating-features-adding-components-using-drush.md": {
  id: "updating-features-adding-components-using-drush.md",
  slug: "updating-features-adding-components-using-drush",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"updating-forked-github-repos.md": {
  id: "updating-forked-github-repos.md",
  slug: "updating-forked-github-repos",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"updating-override-node-options-tests.md": {
  id: "updating-override-node-options-tests.md",
  slug: "updating-override-node-options-tests",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"upgrading-dransible-project-drupal-9.md": {
  id: "upgrading-dransible-project-drupal-9.md",
  slug: "upgrading-dransible-project-drupal-9",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"use-authorized-keys-create-passwordless-ssh-connection.md": {
  id: "use-authorized-keys-create-passwordless-ssh-connection.md",
  slug: "use-authorized-keys-create-passwordless-ssh-connection",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"use-regular-expressions-search-replace-coda-or-textmate.md": {
  id: "use-regular-expressions-search-replace-coda-or-textmate.md",
  slug: "use-regular-expressions-search-replace-coda-or-textmate",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"use-sass-and-compass-drupal-7-using-sassy.md": {
  id: "use-sass-and-compass-drupal-7-using-sassy.md",
  slug: "use-sass-and-compass-drupal-7-using-sassy",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"useful-drupal-6-modules.md": {
  id: "useful-drupal-6-modules.md",
  slug: "useful-drupal-6-modules",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"useful-vagrant-commands.md": {
  id: "useful-vagrant-commands.md",
  slug: "useful-vagrant-commands",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"using-feature-flags-in-drupal-development.md": {
  id: "using-feature-flags-in-drupal-development.md",
  slug: "using-feature-flags-in-drupal-development",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"using-imagecache-and-imagecrop-my-portfolio.md": {
  id: "using-imagecache-and-imagecrop-my-portfolio.md",
  slug: "using-imagecache-and-imagecrop-my-portfolio",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"using-laravel-collections-drupal.md": {
  id: "using-laravel-collections-drupal.md",
  slug: "using-laravel-collections-drupal",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"using-pcss-extension-postcss-webpack-encore.md": {
  id: "using-pcss-extension-postcss-webpack-encore.md",
  slug: "using-pcss-extension-postcss-webpack-encore",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"using-remote-files-when-developing-locally-stage-file-proxy-module.md": {
  id: "using-remote-files-when-developing-locally-stage-file-proxy-module.md",
  slug: "using-remote-files-when-developing-locally-stage-file-proxy-module",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"using-tailwind-css-your-drupal-theme.md": {
  id: "using-tailwind-css-your-drupal-theme.md",
  slug: "using-tailwind-css-your-drupal-theme",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"using-traefik-local-proxy-sculpin.md": {
  id: "using-traefik-local-proxy-sculpin.md",
  slug: "using-traefik-local-proxy-sculpin",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"using-transition-props-vuejs.md": {
  id: "using-transition-props-vuejs.md",
  slug: "using-transition-props-vuejs",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"weeknotes-2021-06-05.md": {
  id: "weeknotes-2021-06-05.md",
  slug: "weeknotes-2021-06-05",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"weeknotes-2021-06-12.md": {
  id: "weeknotes-2021-06-12.md",
  slug: "weeknotes-2021-06-12",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"weeknotes-2021-07-24.md": {
  id: "weeknotes-2021-07-24.md",
  slug: "weeknotes-2021-07-24",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"weeknotes-2021-08-06.md": {
  id: "weeknotes-2021-08-06.md",
  slug: "weeknotes-2021-08-06",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"what-git-flow.md": {
  id: "what-git-flow.md",
  slug: "what-git-flow",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"writing-article-linux-journal.md": {
  id: "writing-article-linux-journal.md",
  slug: "writing-article-linux-journal",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"writing-info-file-drupal-7-theme.md": {
  id: "writing-info-file-drupal-7-theme.md",
  slug: "writing-info-file-drupal-7-theme",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"writing-new-drupal-8-module-using-test-driven-development-tdd.md": {
  id: "writing-new-drupal-8-module-using-test-driven-development-tdd.md",
  slug: "writing-new-drupal-8-module-using-test-driven-development-tdd",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zenophile.md": {
  id: "zenophile.md",
  slug: "zenophile",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
},
"daily-email": {
"2022-08-12.md": {
  id: "2022-08-12.md",
  slug: "2022-08-12",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-13.md": {
  id: "2022-08-13.md",
  slug: "2022-08-13",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-14.md": {
  id: "2022-08-14.md",
  slug: "2022-08-14",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-15.md": {
  id: "2022-08-15.md",
  slug: "2022-08-15",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-16.md": {
  id: "2022-08-16.md",
  slug: "2022-08-16",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-17.md": {
  id: "2022-08-17.md",
  slug: "2022-08-17",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-18.md": {
  id: "2022-08-18.md",
  slug: "2022-08-18",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-19.md": {
  id: "2022-08-19.md",
  slug: "2022-08-19",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-20.md": {
  id: "2022-08-20.md",
  slug: "2022-08-20",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-21.md": {
  id: "2022-08-21.md",
  slug: "2022-08-21",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-22.md": {
  id: "2022-08-22.md",
  slug: "2022-08-22",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-23.md": {
  id: "2022-08-23.md",
  slug: "2022-08-23",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-24.md": {
  id: "2022-08-24.md",
  slug: "2022-08-24",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-25.md": {
  id: "2022-08-25.md",
  slug: "2022-08-25",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-26.md": {
  id: "2022-08-26.md",
  slug: "2022-08-26",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-27.md": {
  id: "2022-08-27.md",
  slug: "2022-08-27",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-28.md": {
  id: "2022-08-28.md",
  slug: "2022-08-28",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-29.md": {
  id: "2022-08-29.md",
  slug: "2022-08-29",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-30.md": {
  id: "2022-08-30.md",
  slug: "2022-08-30",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-08-31.md": {
  id: "2022-08-31.md",
  slug: "2022-08-31",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-01.md": {
  id: "2022-09-01.md",
  slug: "2022-09-01",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-02.md": {
  id: "2022-09-02.md",
  slug: "2022-09-02",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-03.md": {
  id: "2022-09-03.md",
  slug: "2022-09-03",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-04.md": {
  id: "2022-09-04.md",
  slug: "2022-09-04",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-05.md": {
  id: "2022-09-05.md",
  slug: "2022-09-05",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-06.md": {
  id: "2022-09-06.md",
  slug: "2022-09-06",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-07.md": {
  id: "2022-09-07.md",
  slug: "2022-09-07",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-08.md": {
  id: "2022-09-08.md",
  slug: "2022-09-08",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-09.md": {
  id: "2022-09-09.md",
  slug: "2022-09-09",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-10.md": {
  id: "2022-09-10.md",
  slug: "2022-09-10",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-11.md": {
  id: "2022-09-11.md",
  slug: "2022-09-11",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-12.md": {
  id: "2022-09-12.md",
  slug: "2022-09-12",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-14.md": {
  id: "2022-09-14.md",
  slug: "2022-09-14",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-16.md": {
  id: "2022-09-16.md",
  slug: "2022-09-16",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-17.md": {
  id: "2022-09-17.md",
  slug: "2022-09-17",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-19.md": {
  id: "2022-09-19.md",
  slug: "2022-09-19",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-20.md": {
  id: "2022-09-20.md",
  slug: "2022-09-20",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-21.md": {
  id: "2022-09-21.md",
  slug: "2022-09-21",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-22.md": {
  id: "2022-09-22.md",
  slug: "2022-09-22",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-23.md": {
  id: "2022-09-23.md",
  slug: "2022-09-23",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-25.md": {
  id: "2022-09-25.md",
  slug: "2022-09-25",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-26.md": {
  id: "2022-09-26.md",
  slug: "2022-09-26",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-27.md": {
  id: "2022-09-27.md",
  slug: "2022-09-27",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-28.md": {
  id: "2022-09-28.md",
  slug: "2022-09-28",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-09-30.md": {
  id: "2022-09-30.md",
  slug: "2022-09-30",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-01.md": {
  id: "2022-10-01.md",
  slug: "2022-10-01",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-02.md": {
  id: "2022-10-02.md",
  slug: "2022-10-02",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-03.md": {
  id: "2022-10-03.md",
  slug: "2022-10-03",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-08.md": {
  id: "2022-10-08.md",
  slug: "2022-10-08",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-09.md": {
  id: "2022-10-09.md",
  slug: "2022-10-09",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-10.md": {
  id: "2022-10-10.md",
  slug: "2022-10-10",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-11.md": {
  id: "2022-10-11.md",
  slug: "2022-10-11",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-12.md": {
  id: "2022-10-12.md",
  slug: "2022-10-12",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-17.md": {
  id: "2022-10-17.md",
  slug: "2022-10-17",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-18.md": {
  id: "2022-10-18.md",
  slug: "2022-10-18",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-19.md": {
  id: "2022-10-19.md",
  slug: "2022-10-19",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-20.md": {
  id: "2022-10-20.md",
  slug: "2022-10-20",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-21.md": {
  id: "2022-10-21.md",
  slug: "2022-10-21",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-24.md": {
  id: "2022-10-24.md",
  slug: "2022-10-24",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-25.md": {
  id: "2022-10-25.md",
  slug: "2022-10-25",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-26.md": {
  id: "2022-10-26.md",
  slug: "2022-10-26",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-27.md": {
  id: "2022-10-27.md",
  slug: "2022-10-27",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-28.md": {
  id: "2022-10-28.md",
  slug: "2022-10-28",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-29.md": {
  id: "2022-10-29.md",
  slug: "2022-10-29",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-10-30.md": {
  id: "2022-10-30.md",
  slug: "2022-10-30",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-08.md": {
  id: "2022-11-08.md",
  slug: "2022-11-08",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-09.md": {
  id: "2022-11-09.md",
  slug: "2022-11-09",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-11.md": {
  id: "2022-11-11.md",
  slug: "2022-11-11",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-12.md": {
  id: "2022-11-12.md",
  slug: "2022-11-12",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-13.md": {
  id: "2022-11-13.md",
  slug: "2022-11-13",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-14.md": {
  id: "2022-11-14.md",
  slug: "2022-11-14",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-15.md": {
  id: "2022-11-15.md",
  slug: "2022-11-15",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-16.md": {
  id: "2022-11-16.md",
  slug: "2022-11-16",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-17.md": {
  id: "2022-11-17.md",
  slug: "2022-11-17",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-18.md": {
  id: "2022-11-18.md",
  slug: "2022-11-18",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-19.md": {
  id: "2022-11-19.md",
  slug: "2022-11-19",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-20.md": {
  id: "2022-11-20.md",
  slug: "2022-11-20",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-21.md": {
  id: "2022-11-21.md",
  slug: "2022-11-21",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-22.md": {
  id: "2022-11-22.md",
  slug: "2022-11-22",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-23.md": {
  id: "2022-11-23.md",
  slug: "2022-11-23",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-24.md": {
  id: "2022-11-24.md",
  slug: "2022-11-24",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-25.md": {
  id: "2022-11-25.md",
  slug: "2022-11-25",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-11-30.md": {
  id: "2022-11-30.md",
  slug: "2022-11-30",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-01.md": {
  id: "2022-12-01.md",
  slug: "2022-12-01",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-02.md": {
  id: "2022-12-02.md",
  slug: "2022-12-02",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-03.md": {
  id: "2022-12-03.md",
  slug: "2022-12-03",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-04.md": {
  id: "2022-12-04.md",
  slug: "2022-12-04",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-05.md": {
  id: "2022-12-05.md",
  slug: "2022-12-05",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-06.md": {
  id: "2022-12-06.md",
  slug: "2022-12-06",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-07.md": {
  id: "2022-12-07.md",
  slug: "2022-12-07",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-08.md": {
  id: "2022-12-08.md",
  slug: "2022-12-08",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-09.md": {
  id: "2022-12-09.md",
  slug: "2022-12-09",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-10.md": {
  id: "2022-12-10.md",
  slug: "2022-12-10",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-15.md": {
  id: "2022-12-15.md",
  slug: "2022-12-15",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-20.md": {
  id: "2022-12-20.md",
  slug: "2022-12-20",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-21.md": {
  id: "2022-12-21.md",
  slug: "2022-12-21",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-22.md": {
  id: "2022-12-22.md",
  slug: "2022-12-22",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-23.md": {
  id: "2022-12-23.md",
  slug: "2022-12-23",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-28.md": {
  id: "2022-12-28.md",
  slug: "2022-12-28",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-29.md": {
  id: "2022-12-29.md",
  slug: "2022-12-29",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-30.md": {
  id: "2022-12-30.md",
  slug: "2022-12-30",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2022-12-31.md": {
  id: "2022-12-31.md",
  slug: "2022-12-31",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-01.md": {
  id: "2023-01-01.md",
  slug: "2023-01-01",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-02.md": {
  id: "2023-01-02.md",
  slug: "2023-01-02",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-03.md": {
  id: "2023-01-03.md",
  slug: "2023-01-03",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-04.md": {
  id: "2023-01-04.md",
  slug: "2023-01-04",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-05.md": {
  id: "2023-01-05.md",
  slug: "2023-01-05",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-06.md": {
  id: "2023-01-06.md",
  slug: "2023-01-06",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-07.md": {
  id: "2023-01-07.md",
  slug: "2023-01-07",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-16.md": {
  id: "2023-01-16.md",
  slug: "2023-01-16",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-17.md": {
  id: "2023-01-17.md",
  slug: "2023-01-17",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-18.md": {
  id: "2023-01-18.md",
  slug: "2023-01-18",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-19.md": {
  id: "2023-01-19.md",
  slug: "2023-01-19",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-20.md": {
  id: "2023-01-20.md",
  slug: "2023-01-20",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-21.md": {
  id: "2023-01-21.md",
  slug: "2023-01-21",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-22.md": {
  id: "2023-01-22.md",
  slug: "2023-01-22",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-23.md": {
  id: "2023-01-23.md",
  slug: "2023-01-23",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-24.md": {
  id: "2023-01-24.md",
  slug: "2023-01-24",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-01-25.md": {
  id: "2023-01-25.md",
  slug: "2023-01-25",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-02-07.md": {
  id: "2023-02-07.md",
  slug: "2023-02-07",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-02-08.md": {
  id: "2023-02-08.md",
  slug: "2023-02-08",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-02-09.md": {
  id: "2023-02-09.md",
  slug: "2023-02-09",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-02-16.md": {
  id: "2023-02-16.md",
  slug: "2023-02-16",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-02-17.md": {
  id: "2023-02-17.md",
  slug: "2023-02-17",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-02-18.md": {
  id: "2023-02-18.md",
  slug: "2023-02-18",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-02-19.md": {
  id: "2023-02-19.md",
  slug: "2023-02-19",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-02-20.md": {
  id: "2023-02-20.md",
  slug: "2023-02-20",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-03-01.md": {
  id: "2023-03-01.md",
  slug: "2023-03-01",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-03-02.md": {
  id: "2023-03-02.md",
  slug: "2023-03-02",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-03-03.md": {
  id: "2023-03-03.md",
  slug: "2023-03-03",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-03-04.md": {
  id: "2023-03-04.md",
  slug: "2023-03-04",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-03-05.md": {
  id: "2023-03-05.md",
  slug: "2023-03-05",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-03-08.md": {
  id: "2023-03-08.md",
  slug: "2023-03-08",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-03-09.md": {
  id: "2023-03-09.md",
  slug: "2023-03-09",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-03-13.md": {
  id: "2023-03-13.md",
  slug: "2023-03-13",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-03-14.md": {
  id: "2023-03-14.md",
  slug: "2023-03-14",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-03-15.md": {
  id: "2023-03-15.md",
  slug: "2023-03-15",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-03-21.md": {
  id: "2023-03-21.md",
  slug: "2023-03-21",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-03-22.md": {
  id: "2023-03-22.md",
  slug: "2023-03-22",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-03-27.md": {
  id: "2023-03-27.md",
  slug: "2023-03-27",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-04-07.md": {
  id: "2023-04-07.md",
  slug: "2023-04-07",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
"2023-04-08.md": {
  id: "2023-04-08.md",
  slug: "2023-04-08",
  body: string,
  collection: "daily-email",
  data: InferEntrySchema<"daily-email">
} & { render(): Render[".md"] },
},
"talk": {
"about-drupal-association.md": {
  id: "about-drupal-association.md",
  slug: "about-drupal-association",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"automated-testing-test-driven-development-drupal-8.md": {
  id: "automated-testing-test-driven-development-drupal-8.md",
  slug: "automated-testing-test-driven-development-drupal-8",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"building-presenting-slide-decks-rst2pdf.md": {
  id: "building-presenting-slide-decks-rst2pdf.md",
  slug: "building-presenting-slide-decks-rst2pdf",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"building-static-websites-sculpin.md": {
  id: "building-static-websites-sculpin.md",
  slug: "building-static-websites-sculpin",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"configuring-all-the-things-drupal-8.md": {
  id: "configuring-all-the-things-drupal-8.md",
  slug: "configuring-all-the-things-drupal-8",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"dancing-for-drupal.md": {
  id: "dancing-for-drupal.md",
  slug: "dancing-for-drupal",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"decoupling-drupal-vuejs.md": {
  id: "decoupling-drupal-vuejs.md",
  slug: "decoupling-drupal-vuejs",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"deploying-drupal-fabric.md": {
  id: "deploying-drupal-fabric.md",
  slug: "deploying-drupal-fabric",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"deploying-php-ansible-ansistrano.md": {
  id: "deploying-php-ansible-ansistrano.md",
  slug: "deploying-php-ansible-ansistrano",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"deploying-php-fabric.md": {
  id: "deploying-php-fabric.md",
  slug: "deploying-php-fabric",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"drupal-8-module-development.md": {
  id: "drupal-8-module-development.md",
  slug: "drupal-8-module-development",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"drupal-8-php-libraries-drupalorg-api.md": {
  id: "drupal-8-php-libraries-drupalorg-api.md",
  slug: "drupal-8-php-libraries-drupalorg-api",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"drupal-8-rejoining-the-herd.md": {
  id: "drupal-8-rejoining-the-herd.md",
  slug: "drupal-8-rejoining-the-herd",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"drupal-8.md": {
  id: "drupal-8.md",
  slug: "drupal-8",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"drupal-ldap-module.md": {
  id: "drupal-ldap-module.md",
  slug: "drupal-ldap-module",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"drupal-vm-generator.md": {
  id: "drupal-vm-generator.md",
  slug: "drupal-vm-generator",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"drupal-vm-meet-symfony-console.md": {
  id: "drupal-vm-meet-symfony-console.md",
  slug: "drupal-vm-meet-symfony-console",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"drupalorg-2015.md": {
  id: "drupalorg-2015.md",
  slug: "drupalorg-2015",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"drush-make-drupalbristol.md": {
  id: "drush-make-drupalbristol.md",
  slug: "drush-make-drupalbristol",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"getting-your-data-into-drupal-8.md": {
  id: "getting-your-data-into-drupal-8.md",
  slug: "getting-your-data-into-drupal-8",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"git-flow.md": {
  id: "git-flow.md",
  slug: "git-flow",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"goodbye-drush-make-hello-composer.md": {
  id: "goodbye-drush-make-hello-composer.md",
  slug: "goodbye-drush-make-hello-composer",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"introduction-to-mob-programming.md": {
  id: "introduction-to-mob-programming.md",
  slug: "introduction-to-mob-programming",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"it-all-started-with-a-patch.md": {
  id: "it-all-started-with-a-patch.md",
  slug: "it-all-started-with-a-patch",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"modern-drupal-development-with-composer.md": {
  id: "modern-drupal-development-with-composer.md",
  slug: "modern-drupal-development-with-composer",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"out-of-the-box-initiative-update.md": {
  id: "out-of-the-box-initiative-update.md",
  slug: "out-of-the-box-initiative-update",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"so-what-is-this-drupal-thing.md": {
  id: "so-what-is-this-drupal-thing.md",
  slug: "so-what-is-this-drupal-thing",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"taking-flight-with-tailwind-css.md": {
  id: "taking-flight-with-tailwind-css.md",
  slug: "taking-flight-with-tailwind-css",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"tdd-test-driven-drupal.md": {
  id: "tdd-test-driven-drupal.md",
  slug: "tdd-test-driven-drupal",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"test-drive-twig-with-sculpin.md": {
  id: "test-drive-twig-with-sculpin.md",
  slug: "test-drive-twig-with-sculpin",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"things-you-should-know-about-php.md": {
  id: "things-you-should-know-about-php.md",
  slug: "things-you-should-know-about-php",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"upgrading-your-site-drupal-9.md": {
  id: "upgrading-your-site-drupal-9.md",
  slug: "upgrading-your-site-drupal-9",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"using-illuminate-collections-outside-laravel.md": {
  id: "using-illuminate-collections-outside-laravel.md",
  slug: "using-illuminate-collections-outside-laravel",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"working-with-workspace.md": {
  id: "working-with-workspace.md",
  slug: "working-with-workspace",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
"working-without-workspace.md": {
  id: "working-without-workspace.md",
  slug: "working-without-workspace",
  body: string,
  collection: "talk",
  data: InferEntrySchema<"talk">
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
