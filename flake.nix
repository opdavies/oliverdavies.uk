{
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

  outputs =
    { nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system; };
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodePackages.browser-sync

          (php83.buildEnv {
            extraConfig = ''
              error_reporting = E_ALL & ~E_DEPRECATED & ~E_USER_DEPRECATED
            '';
          })

          php83Packages.composer
          tailwindcss

          (import ./drafts.nix { inherit pkgs; })
          (import ./new-draft.nix { inherit pkgs; })
        ];
      };

      formatter.${system} = pkgs.nixfmt-rfc-style;
    };
}
