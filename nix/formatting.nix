{ inputs, ... }:

{
  imports = [
    inputs.treefmt-nix.flakeModule
  ];

  perSystem =
    { config, ... }:
    {
      treefmt = {
        projectRootFile = "flake.nix";

        programs = {
          mdformat = {
            enable = true;

            plugins = ps: [
              ps.mdformat-frontmatter
            ];
          };

          nixfmt.enable = true;
          yamlfmt.enable = true;
        };

        settings.formatter.mdformat.excludes = [
          "source/_pages/drupal-upgrade.md"
          "source/_pages/mentor.md"
          "source/_pages/press.md"
          "source/_pages/speaker.md"
          "source/_posts/2018-09-04-quick-project-switching-phpstorm.md"
          "source/_posts/2018-11-20-rebuilding-bartik-drupals-default-theme-vuejs-tailwind-css.md"
          "source/_posts/2020-04-22-test-driven-drupal-on-gitstore-leanpub.md"
          "source/_posts/2026-02-09-nix-php-developers-phpsw.md"
          "source/_presentations/drupal-8-module-development.md"
          "source/_presentations/out-of-the-box-initiative-update.md"
        ];
      };

      formatter = config.treefmt.build.wrapper;
    };
}
