---
title: Converting .aax files to .flac with Nix
tags: [linux, nix]
date: 2026-02-06
---

Here is a script from my [nix-config repository][nix-config] that allows me to
download .aax files from my Audible library and convert them to .flac files:

```nix
(pkgs.writeShellApplication {
  name = "convert-audiobook";

  runtimeInputs = with pkgs; [
    aaxtomp3
    audible-cli
  ];

  text = ''
    if [[ $# -eq 0 ]]; then
      echo "Usage: $(basename "$0") <file>"

      exit 1
    fi

    file="''$1"

    aaxtomp3 \
      --authcode "$(audible activation-bytes)" \
      --flac \
      --single \
      "$file"
  '';
})
```

Once converted, I can upload and listen to the .flac file within my
installation of Audiobookshelf.

[nix-config]: https://git.oliverdavies.uk/opdavies/nix-config
