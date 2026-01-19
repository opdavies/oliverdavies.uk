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
        { pkgs, self', ... }:
        {
          devshells.default = {
            packages = with pkgs; [
              (php83.buildEnv {
                extraConfig = ''error_reporting = E_ALL & ~E_DEPRECATED & ~E_USER_DEPRECATED'';
              })

              php83Packages.composer

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
                  --delete --delete-after
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
