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
      imports = [
        inputs.devshell.flakeModule

        ./nix/dev-shell.nix
        ./nix/formatter.nix
        ./nix/package.nix
        ./nix/systems.nix
      ];
    };
}
