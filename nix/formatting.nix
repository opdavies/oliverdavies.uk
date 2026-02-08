{ inputs, ... }:

{
  imports = [
    inputs.treefmt-nix.flakeModule
  ];

  perSystem =
    { config, ... }:
    {
      treefmt = {
        programs = {
          nixfmt.enable = true;
          yamlfmt.enable = true;
        };

      };

      formatter = config.treefmt.build.wrapper;
    };
}
