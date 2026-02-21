{
  perSystem =
    { pkgs, ... }:
    {
      packages.default = pkgs.stdenv.mkDerivation {
        name = "oliverdavies.uk";

        src = ./..;

        buildInputs = with pkgs; [
          lightningcss
          sculpin
        ];

        buildPhase = ''
          mkdir -p "$out"

          lightningcss \
            --bundle \
            --minify \
            --output-file source/assets/css/build/app.css \
            source/assets/css/app.css

          sculpin generate --env prod

          cp -r output_prod/* "$out"
        '';
      };
    };
}
