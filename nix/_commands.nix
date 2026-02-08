{ lib, pkgs, ... }:

let
  inherit (lib) getExe;
in
[
  {
    command =
      # bash
      ''
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
    command =
      # bash
      ''
        ${getExe pkgs.rsync} -avzP \
          result/ \
          home02:/nginx-data/oliverdavies.uk \
          --delete --delete-after \
          --exclude='_*/'
      '';
    help = "deploys the built artifact to production";
    name = "deploy";
  }

  {
    category = "[dev commands]";
    command =
      # bash
      ''
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
    command =
      # bash
      ''
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
