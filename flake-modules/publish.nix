{
  perSystem =
    { pkgs, ... }:
    {
      packages.publish = pkgs.writeShellApplication {
        name = "publish";

        runtimeInputs = with pkgs; [
          rsync
          php
        ];

        text = ''
          vendor/bin/sculpin generate --env prod

          rsync -uvrP static/ output_prod "$@"
          rsync -uvrP output_prod/ home02:/nginx-data/oliverdavies.uk "$@"
        '';
      };
    };
}
