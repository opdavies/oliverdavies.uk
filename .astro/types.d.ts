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
