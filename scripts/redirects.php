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
        if ($row === 1) {
            continue;
        }

        $templateData = [
            '%DESTINATION%' => $data[1],
        ];

        $output = strtr($template, $templateData);
        file_put_contents("source/{$data[0]}.html", $output);

        echo "Written to {$data[0]}.html\n";
        $row++;
    }
}

fclose($handle);
