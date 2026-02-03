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
        { pkgs, ... }:
        {
          devshells.default = {
            packages = with pkgs; [
              nixd

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
                date: $today
                ---


                EOF_POST

                "$EDITOR" "source/_posts/$filename"
              '')

              (pkgs.writeScriptBin "build" ''
                #!${lib.getExe pkgs.bash}

                build-css

                ${lib.getExe pkgs.sculpin} generate \
                  --clean \
                  --env "''${1:-prod}" \
                  --no-interaction
              '')

              (pkgs.writeScriptBin "build-css" ''
                #!${lib.getExe pkgs.bash}

                ${lib.getExe pkgs.lightningcss} \
                  --bundle \
                  --minify \
                  --output-file source/build/app.css \
                  source/assets/css/index.css
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

              (pkgs.writeScriptBin "start" ''
                #!${lib.getExe pkgs.bash}

                ${lib.getExe pkgs.sculpin} generate \
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
