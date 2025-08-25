{ pkgs }:

pkgs.writeShellApplication {
  name = "publish";

  runtimeInputs = with pkgs; [ rsync php ];

  text = ''
    vendor/bin/sculpin generate --env prod

    rsync -uvrP static/ output_prod "$@"
    rsync -uvrP output_prod/ nixedo.oliverdavies.uk:/var/www/vhosts/website-sculpin "$@"
  '';
}
