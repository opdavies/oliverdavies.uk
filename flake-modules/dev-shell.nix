{ inputs, ... }:

{
  imports = [ inputs.devshell.flakeModule ];

  perSystem =
    { pkgs, self', ... }:
    {
      devshells.default = {
        packages = with pkgs; [
          nodePackages.browser-sync

          (php83.buildEnv {
            extraConfig = ''
              error_reporting = E_ALL & ~E_DEPRECATED & ~E_USER_DEPRECATED
            '';
          })

          php83Packages.composer

          self'.packages.drafts
          self'.packages.new-draft
          self'.packages.publish

          tailwindcss
        ];
      };
    };
}
