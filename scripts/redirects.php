#!/usr/bin/env php

<?php

$csv = __FILE__ . '/redirects.csv';

$template = <<<EOS
---
layout: redirect
destination: %DESTINATION%
---

EOS;

$row = 0;
if (($handle = fopen($csv, 'r')) !== FALSE) {
    while (($data = fgetcsv($handle, filesize($csv))) !== FALSE) {
        $row++;

        if ($row > 1) {
            $templateData = [
                '%DESTINATION%' => $data[1],
            ];

            $output = strtr($template, $templateData);
            file_put_contents("source/{$data[0]}.html", $output);

            echo "Written to {$data[0]}.html\n";
        }
    }
}

fclose($handle);
