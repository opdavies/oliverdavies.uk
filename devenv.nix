{ pkgs, ... }:

{
  packages = [ pkgs.git ];

  languages.php = {
    enable = true;
    version = "8.3";
  };

  processes.sculpin-watch.exec = "sculpin generate --server --watch";

  scripts.sculpin-build.exec = "sculpin generate --env prod --clean --no-interaction";
}
