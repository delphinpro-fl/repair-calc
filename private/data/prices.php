<?php
/**
 * Аквариус
 *
 * @author      delphinpro <delphinpro@gmail.com>
 * @copyright   copyright © 2019 delphinpro
 * @license     licensed under the MIT license
 */

return [
    'wallsHeight'   => 3,
    'designProject' => [
        ['from' => 0, 'coefficient' => 2000],
        ['from' => 50, 'coefficient' => 1600],
        ['from' => 150, 'coefficient' => 1450],
    ],
    'dismantling'   => ['coefficient' => 950],
    'roughWorks'    => [
        'walls' => ['price' => 900, 'dimension' => 'м²'],
        'floor' => ['price' => 560, 'dimension' => 'м²'],
    ],
    'finishWorks'   => [
        'floor'   => [
            'tile'         => [
                'title'     => 'Монтаж керамической плитки',
                'price'     => 950,
                'dimension' => 'м²',
            ],
            'laminate'     => [
                'title'     => 'Укладка ламината',
                'price'     => 450,
                'dimension' => 'м²',
            ],
            'parquet'      => [
                'title'     => 'Укладка паркетной доски на подложку',
                'price'     => 650,
                'dimension' => 'м²',
            ],
            'massiveBoard' => [
                'title'     => 'Укладка массивной/инженерной доски на клей',
                'price'     => 850,
                'dimension' => 'м²',
            ],
        ],
        'walls'   => [
            'wallpaper' => [
                'title'     => 'Поклейка обоев',
                'price'     => 280,
                'dimension' => 'м²',
            ],
            'painting'  => [
                'title'     => 'Окрашивание стен водоэмульсионной краской в два слоя (оклеивание стеклохолстом, шпаклевание Шитрок в два слоя)',
                'price'     => 570,
                'dimension' => 'м²',
            ],
            'plaster'   => [
                'title'     => 'Декоративная штукатурка  (оклеивание стеклохолстом, шпаклевание Шитрок в два слоя)',
                'price'     => 1260,
                'dimension' => 'м²',
            ],
            'tile'      => [
                'title'     => 'Монтаж керамической плитки',
                'price'     => 1100,
                'dimension' => 'м²',
            ],
        ],
        'ceiling' => [
            'drywall'  => [
                'title'     => 'Гипсокартон',
                'price'     => 1720,
                'dimension' => 'м²',
            ],
            'stretch1' => [
                'title'     => 'Натяжной в один уровень',
                'price'     => 900,
                'dimension' => 'м²',
            ],
            'stretch2' => [
                'title'     => 'Натяжной многоуровневый',
                'price'     => 1850,
                'dimension' => 'м²',
            ],
            'painting' => [
                'title'     => 'Покраска',
                'price'     => 1100,
                'dimension' => 'м²',
            ],
        ],
    ],
    'cleaning'      => ['price' => 4500],
    'electric'      => ['price' => 1650],
    'plumbing'      => ['price' => 8500],
    'options'       => [
        'floorWarm'            => [
            'price'     => 350,
            'dimension' => 'м²',
            'title'     => 'Устройство теплого пола',
        ],
        'floorSoundproofing'   => [
            'price'     => 550,
            'dimension' => 'м²',
            'title'     => 'Звукоизоляция пола',
        ],
        'walling'              => [
            'price'     => 775,
            'dimension' => 'м²',
            'title'     => 'Возведение внутренних стен',
        ],
        'wallSoundproofing'    => [
            'price'     => 650,
            'dimension' => 'м²',
            'title'     => 'Звукоизоляция стен',
        ],
        'ceilingSoundproofing' => [
            'price'     => 850,
            'dimension' => 'м²',
            'title'     => 'Звукоизоляция потолка',
        ],
        'radiatorReplacement'  => [
            'price'     => 2500,
            'dimension' => 'шт',
            'title'     => 'Замена радиаторов',
        ],
        'airConditioner'       => [
            'price'     => 11000,
            'dimension' => 'шт',
            'title'     => 'Установка кондиционера',
        ],
        'towelDryer'           => [
            'price'     => 3500,
            'dimension' => 'шт',
            'title'     => 'Замена полотенцесушителя',
        ],
        'toiletReplacement'    => [
            'price'     => 4000,
            'dimension' => 'шт',
            'title'     => 'Замена напольного унитаза на подвесной',
        ],
        'shower'               => [
            'price'     => 1500,
            'dimension' => 'шт',
            'title'     => 'Гигиениический душ',
        ],
        'protect'              => [
            'price'     => 5000,
            'dimension' => 'шт',
            'title'     => 'Система защиты от протечек',
        ],
        'waterHeater'          => [
            'price'     => 3000,
            'dimension' => 'шт',
            'title'     => 'Проточный водонагреватель',
        ],
    ],
];
