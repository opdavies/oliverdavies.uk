{ pkgs }:

pkgs.writeShellApplication {
  name = "drafts";

  runtimeInputs = with pkgs; [ gnugrep ];

  text = ''
    grep -r 'draft: true' "''${1:-source}"
  '';
}
