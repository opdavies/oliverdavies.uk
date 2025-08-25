{ inputs, ... }:

{
  imports = [ inputs.devshell.flakeModule ];

  perSystem.devshells.default =
    { pkgs, ... }:
    {
      packages = with pkgs; [
        nodePackages.browser-sync

        (php83.buildEnv {
          extraConfig = ''
            error_reporting = E_ALL & ~E_DEPRECATED & ~E_USER_DEPRECATED
          '';
        })

        php83Packages.composer
        tailwindcss

        (import ../drafts.nix { inherit pkgs; })
        (import ../new-draft.nix { inherit pkgs; })
      ];
    };
}
