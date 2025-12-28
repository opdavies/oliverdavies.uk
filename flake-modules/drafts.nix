{
  perSystem =
    { pkgs, ... }:
    {
      packages.drafts = pkgs.writeShellApplication {
        name = "drafts";

        runtimeInputs = with pkgs; [ gnugrep ];

        text = ''
          echo "oob"
            grep -r 'draft: true' "''${1:-source}"
        '';
      };
    };
}
