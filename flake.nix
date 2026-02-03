{
  inputs = {
    devshell.inputs.nixpkgs.follows = "nixpkgs";
    devshell.url = "github:numtide/devshell";
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:opdavies/nixpkgs/add-sculpin";
  };

  outputs =
    inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" ];

      imports = [ inputs.devshell.flakeModule ];

      perSystem =
        { lib, pkgs, ... }:
        {
          devshells.default = {
            commands = import ./nix/commands.nix { inherit lib pkgs; };

            packages = with pkgs; [
              nixd
              sculpin
            ];
          };

          formatter = pkgs.nixfmt;
        };
    };
}
