<?php

define('DIR_ROOT', realpath('..'));

function template($template, $data = [])
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


$uri = trim($_SERVER['REQUEST_URI'], '/');
$segments = explode('/', $uri);

if (count($segments) && $segments[0] === 'api') {
    array_shift($segments);
    if (!count($segments)) {
        header('Not Found', true, 404);
        die;
    }
    $data = [];
    $action = array_shift($segments);
    switch ($action) {
        case 'data':
            $data['types'] = include '../private/data/types.php';
            $data['prices'] = include '../private/data/prices.php';
            break;
        default:
            header('Not Found', true, 404);
            die;
    }

    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    die;
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
