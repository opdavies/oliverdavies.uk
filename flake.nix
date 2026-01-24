{
  inputs = {
    devshell.inputs.nixpkgs.follows = "nixpkgs";
    devshell.url = "github:numtide/devshell";
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs =
    inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" ];

      imports = [ inputs.devshell.flakeModule ];

      perSystem =
        { pkgs, ... }:
        {
          devshells.default = {
            packages = with pkgs; [
              (php83.buildEnv {
                extraConfig = ''error_reporting = E_ALL & ~E_DEPRECATED & ~E_USER_DEPRECATED'';
              })

              php83Packages.composer

              (pkgs.writeScriptBin "create-blog-post" ''
                #!${lib.getExe pkgs.bash}

                set -euo pipefail

                if [[ $# -lt 1 ]]; then
                  echo "Usage: $(basename $0) <slug>"

                  exit 1
                fi

                today="$(date +%Y-%m-%d)"

                filename="$today-$1.md"

                cat << EOF_POST > "source/_posts/$filename"
                ---
                title:
                tags: []
                ---


                EOF_POST

                "$EDITOR" "source/_posts/$filename"
              '')

              (pkgs.writeScriptBin "build" ''
                #!${lib.getExe pkgs.bash}

                vendor/bin/sculpin generate \
                  --clean \
                  --env "''${1:-prod}" \
                  --no-interaction
              '')

              (pkgs.writeScriptBin "clean" ''
                #!${lib.getExe pkgs.bash}

                rm -rfv output_*/ vendor/
              '')

              (pkgs.writeScriptBin "deploy" ''
                #!${lib.getExe pkgs.bash}

                ${lib.getExe pkgs.rsync} -avzP \
                  output_prod/ \
                  home02:/nginx-data/oliverdavies.uk \
                  --delete --delete-after \
                  --exclude='_*/'
              '')


              (pkgs.writeScriptBin "publish" ''
                #!${lib.getExe pkgs.bash}

                set -euo pipefail

                # TODO: ask for a commit message and commit any changes with the message.
                # TODO: tag the commit with the current timestamp?

                build
                deploy
                git push
              '')

              (pkgs.writeScriptBin "start" ''
                #!${lib.getExe pkgs.bash}

                vendor/bin/sculpin generate \
                  --clean \
                  --no-interaction \
                  --server \
                  --watch \
                  "$@"
              '')

              (pkgs.writeScriptBin "start-browsersync" ''
                #!${lib.getExe pkgs.bash}

                ${pkgs.nodePackages.browser-sync}/bin/browser-sync start \
                  --files output_dev \
                  --no-notify \
                  --no-open \
                  --no-ui \
                  --server output_dev
              '')
            ];
          };

          formatter = pkgs.nixfmt;
        };
    };
}
