{ pkgs, ... }:

{
  packages = with pkgs; [
    git
    tailwindcss
  ];

  languages = {
    php.enable = true;
  };

  processes = {
    sculpin.exec = "vendor/bin/sculpin generate --server --watch";

    tailwind = {
      exec = "tailwindcss --config tailwind.config.ts --input css/tailwind.css --output ../source/build/tailwind.css --watch";

      process-compose = {
        is_tty = true;
        working_dir = "assets";
      };
    };
  };

  tasks = { };

  enterShell = ''
    [[ ! -d vendor ]] && composer install
  '';

  enterTest = '''';

  scripts = {
    publish.exec = ''
      sculpin generate --env prod
      rsync -avz static/ output_prod
      rsync -avz output_prod/ ssh.oliverdavies.uk:/var/www/vhosts/www.oliverdavies.uk
    '';

    "tailwind-build".exec = ''
      cd assets
      tailwindcss --config tailwind.config.ts --input css/tailwind.css --output ../source/build/tailwind.css --minify
    '';
  };

}
