{
  description = "oliverdavies.uk-sculpin";

  inputs = {
    devshell.url = "github:numtide/devshell";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
  };

  outputs = inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [ inputs.devshell.flakeModule ];

      systems = [ "x86_64-linux" ];

      perSystem = { config, self', inputs', pkgs, system, ... }: {
        devshells.default = {
          packages = with pkgs; [
            "nodejs"
            "nodePackages.pnpm"
            "php81"
            "php81Packages.composer"
          ];
        };
      };
    };
}
