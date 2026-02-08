{ inputs, ... }:

{
  imports = [
    inputs.treefmt-nix.flakeModule
  ];

  perSystem =
    { pkgs, ... }:
    {
      treefmt = {
        programs = {
          nixfmt.enable = true;
          yamlfmt.enable = true;
        };

      };
      formatter = pkgs.nixfmt;
    };
}
