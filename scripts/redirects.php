#!/usr/bin/env php

<?php

$template = <<<EOS

---
layout: redirect
destination: %DESTINATION%
---

EOS;

$filename = dirname(__FILE__) . '/redirects.csv';

$row = 1;

if (($handle = fopen($filename, 'r')) !== FALSE) {
    while (($data = fgetcsv($handle, filesize($filename))) !== FALSE) {
var_dump($data[0]);
        $templateData = [
            '%DESTINATION%' => $destination,
        ];

        $output = strtr($template, $templateData);
        file_put_contents("source/{$data[0]}.html", $output);

        $row++;
    }
}

fclose($handle);
