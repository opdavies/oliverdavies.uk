{
  perSystem =
    { pkgs, ... }:
    {
      packages.default = pkgs.stdenv.mkDerivation {
        name = "oliverdavies.uk";

        src = ./.;

        buildInputs = with pkgs; [
          lightningcss
          sculpin
        ];

        buildPhase = ''
          mkdir -p "$out"

          lightningcss \
            --bundle \
            --minify \
            --output-file source/build/app.css \
            source/assets/css/index.css

          sculpin generate --env prod

          cp -r output_prod/* "$out"
        '';
      };
    };
}
