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
        { pkgs, lib, ... }:
        {
          devshells.default = {
            commands =
              let
                inherit (lib) getExe;
              in
              [
                {
                  help = "builds the website artifact for production";
                  name = "build";
                  command = ''
                    build-css

                    ${getExe pkgs.sculpin} generate \
                      --clean \
                      --env "''${1:-prod}" \
                      --no-interaction
                  '';
                }

                {
                  help = "builds the CSS stylesheet for production";
                  name = "build-css";
                  command = ''
                    ${getExe pkgs.lightningcss} \
                      --bundle \
                      --minify \
                      --output-file source/build/app.css \
                      source/assets/css/index.css
                  '';
                }

                {
                  help = "cleans temporary files";
                  name = "clean";
                  command = ''rm -rfv output_*/ source/build/app.css'';
                }

                {
                  help = "scaffolds a new blog post with a given slug";
                  name = "create-blog-post";
                  command = ''
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
                  '';
                }

                {
                  name = "deploy";
                  help = "deploys the built artifact to production";
                  command = ''
                    ${getExe pkgs.rsync} -avzP \
                      output_prod/ \
                      home02:/nginx-data/oliverdavies.uk \
                      --delete --delete-after \
                      --exclude='_*/'
                  '';
                }

                {
                  name = "start";
                  help = "starts the sculpin server";
                  command = ''
                    ${getExe pkgs.sculpin} generate \
                      --clean \
                      --no-interaction \
                      --server \
                      --watch \
                      "$@"
                  '';
                }

                {
                  name = "start-browsersync";
                  help = "starts browsersync";
                  command = ''
                    ${pkgs.nodePackages.browser-sync}/bin/browser-sync start \
                      --files output_dev \
                      --no-notify \
                      --no-open \
                      --no-ui \
                      --server output_dev
                  '';
                }
              ];

            packages = with pkgs; [
              nixd
              sculpin
            ];
          };

          formatter = pkgs.nixfmt;
        };
    };
}
