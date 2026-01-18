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

          tailwindcss

          (pkgs.writeScriptBin "build" ''
            #!${lib.getExe pkgs.bash}

            export PATH="$PATH:vendor/bin"

            sculpin generate --clean --env "''${1:-prod}" --no-interaction
          '')

          (pkgs.writeScriptBin "build-css" ''
            #!${lib.getExe pkgs.bash}

            tailwindcss \
              --config tailwind.config.ts \
              --input css/tailwind.css \
              --output ../source/build/tailwind.css
          '')

          (pkgs.writeScriptBin "clean" ''
            #!${lib.getExe pkgs.bash}

            rm -rfv output_*/ vendor/
          '')

          (pkgs.writeScriptBin "deploy" ''
            #!${lib.getExe pkgs.bash}

            export PATH="$PATH:vendor/bin"

            ${lib.getExe pkgs.rsync} -avzP output_prod/ \
              home02:/nginx-data/oliverdavies.uk \
              --delete --delete-after
              ;;
          '')

          (pkgs.writeScriptBin "start" ''
            #!${lib.getExe pkgs.bash}

            export PATH="$PATH:vendor/bin"

            sculpin generate --clean --no-interaction --server --watch "$@"
          '')
        ];
      };
    };
}
