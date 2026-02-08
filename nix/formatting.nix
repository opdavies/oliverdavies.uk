{ inputs, ... }:
{
  imports = [
    inputs.treefmt-nix.flakeModule
  ];

  perSystem.treefmt = {
    flakeCheck = true;

    programs = {
      nixfmt.enable = true;
      yamlfmt.enable = true;
    };
  };
}
