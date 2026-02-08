{ inputs, lib, ... }:

{
  imports = [
    inputs.devshell.flakeModule
  ];

  perSystem =
    { pkgs, self', ... }:
    {
      devshells.default = {
        commands = import ./_commands.nix { inherit lib pkgs; };

        packagesFrom = [
          self'.packages.default
        ];

        packages = with pkgs; [
          nixd
        ];
      };
    };
}
