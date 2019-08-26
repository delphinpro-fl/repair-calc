<?php

define('DIR_ROOT', realpath('..'));

function template(string $template, array $data = []): string
{
    $template = str_replace('</head>', "\n\t{{HEAD}}\n</head>", $template);
    $template = str_replace('</body>', "\n\t{{BODY}}\n</body>", $template);

    return preg_replace_callback('/{{([_a-z]+)}}/Usi', function ($m) use ($data) {

        $key = $m[1];

        if (array_key_exists($key, $data)) {
            return $data[$key];
        }

        return '';
    }, $template);
}


$entryHtml = DIR_ROOT
    .DIRECTORY_SEPARATOR.'private'
    .DIRECTORY_SEPARATOR.'templates'
    .DIRECTORY_SEPARATOR.'base.php';

$page = [
    'title' => 'Аквариус',
];

if (file_exists($entryHtml)) {
    $templateContent = file_get_contents($entryHtml);
    echo template($templateContent, [
        'PAGE_TITLE' => 'Аквариус',
    ]);
}
