{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  packages = with pkgs; [ git ];

  languages = {
    javascript = {
      enable = true;

      pnpm = {
        enable = true;
        install.enable = true;
      };
    };

    php.enable = true;
  };

  processes = {
    sculpin.exec = "vendor/bin/sculpin generate --server --watch";
    tailwind.exec = "npx tailwindcss --config tailwind.config.ts --input css/tailwind.css --output ../source/build/tailwind.css";
  };

  enterShell = ''
    which composer
    [[ ! -d vendor ]] && composer install
  '';

  tasks = { };

  enterTest = '''';
}
