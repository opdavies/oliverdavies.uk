{
  inputs = {
    devshell.inputs.nixpkgs.follows = "nixpkgs";
    devshell.url = "github:numtide/devshell";
    flake-parts.url = "github:hercules-ci/flake-parts";
    treefmt-nix.inputs.nixpkgs.follows = "nixpkgs";
    treefmt-nix.url = "github:numtide/treefmt-nix";
    nixpkgs.url = "github:opdavies/nixpkgs/add-sculpin";
  };

  outputs =
    inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" ];

      imports = [
        inputs.devshell.flakeModule

        ./nix/formatting.nix
      ];

      perSystem =
        {
          lib,
          pkgs,
          self',
          ...
        }:
        {
          packages.default = pkgs.stdenv.mkDerivation {
            name = "oliverdavies.uk";

            src = ./.;

            buildInputs = with pkgs; [
              lightningcss
              sculpin
            ];

            buildPhase = ''
              mkdir -p "$out"

              lightningcss \
                --bundle \
                --minify \
                --output-file source/build/app.css \
                source/assets/css/index.css

              sculpin generate --env prod

              cp -r output_prod/* "$out"
            '';
          };

          devshells.default = {
            commands = import ./nix/commands.nix { inherit lib pkgs; };

            packagesFrom = [
              self'.packages.default
            ];

            packages = with pkgs; [
              nixd
            ];
          };

          formatter = pkgs.nixfmt;
        };
    };
}
