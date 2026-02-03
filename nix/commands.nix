{ lib, pkgs, ... }:

let
  inherit (lib) getExe;
in
[
  {
    category = "[build commands]";
    command = ''
      build-css

      ${getExe pkgs.sculpin} generate \
        --clean \
        --env "''${1:-prod}" \
        --no-interaction
    '';
    help = "builds the website artifact for production";
    name = "build";
  }

  {
    category = "[build commands]";
    command = ''
      ${getExe pkgs.lightningcss} \
        --bundle \
        --minify \
        --output-file source/build/app.css \
        source/assets/css/index.css
    '';
    help = "builds the CSS stylesheet for production";
    name = "build-css";
  }

  {
    category = "[build commands]";
    command = ''rm -rfv output_*/ source/build/app.css'';
    help = "cleans temporary files";
    name = "clean";
  }

  {
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
    help = "scaffolds a new blog post with a given slug";
    name = "create-blog-post";
  }

  {
    command = ''
      ${getExe pkgs.rsync} -avzP \
        output_prod/ \
        home02:/nginx-data/oliverdavies.uk \
        --delete --delete-after \
        --exclude='_*/'
    '';
    help = "deploys the built artifact to production";
    name = "deploy";
  }

  {
    category = "[dev commands]";
    command = ''
      ${getExe pkgs.sculpin} generate \
        --clean \
        --no-interaction \
        --server \
        --watch \
        "$@"
    '';
    help = "starts the sculpin server";
    name = "start";
  }

  {
    category = "[dev commands]";
    command = ''
      ${pkgs.nodePackages.browser-sync}/bin/browser-sync start \
        --files output_dev \
        --no-notify \
        --no-open \
        --no-ui \
        --server output_dev
    '';
    help = "starts browsersync";
    name = "start-browsersync";
  }
]
