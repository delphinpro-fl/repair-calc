<?php
/**
 * Аквариус
 *
 * @author      delphinpro <delphinpro@gmail.com>
 * @copyright   copyright © 2019 delphinpro
 * @license     licensed under the MIT license
 */

//==
//== Константы вариантов отделки
//== связаны с картинками
//== ======================================= ==//

/* Варианты отделки потолка */
const CEILING_DRYWALL    = 1;
const CEILING_STRETCH_1L = 2;
const CEILING_STRETCH_2L = 3;
const CEILING_PAINTING   = 4;

/* Варианты отделки пола */
const FLOOR_TILE          = 1;
const FLOOR_LAMINATE      = 2;
const FLOOR_PARQUET       = 3;
const FLOOR_MASSIVE_BOARD = 4;

/* Варианты отделки стен */
const WALLS_WALLPAPER = 1;
const WALLS_PAINTING  = 2;
const WALLS_PLASTER   = 3;
const WALLS_TILE      = 4;

return [
    'room' => [
        'title'  => 'Комната',
        'params' => [
            [
                'type'         => 'text',
                'title'        => 'Площадь',
                'name'         => 'area',
                'defaultValue' => null,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Пол',
                'name'         => 'floor',
                'defaultValue' => FLOOR_LAMINATE,
                'options'      => [
                    ['title' => 'Плитка', 'value' => FLOOR_TILE],
                    ['title' => 'Ламинат', 'value' => FLOOR_LAMINATE],
                    ['title' => 'Паркетная доска на подложку', 'value' => FLOOR_PARQUET],
                    [
                        'title' => 'Массивная доска/Инженерная доска на клей',
                        'value' => FLOOR_MASSIVE_BOARD,
                    ],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Устройство теплого пола',
                'name'         => 'floorWarm',
                'defaultValue' => false,
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция пола',
                'name'         => 'floorSoundproofing',
                'defaultValue' => false,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Стены',
                'name'         => 'wall',
                'defaultValue' => WALLS_WALLPAPER,
                'options'      => [
                    ['title' => 'Обои', 'value' => WALLS_WALLPAPER],
                    ['title' => 'Покраска', 'value' => WALLS_PAINTING],
                    ['title' => 'Декоративная штукатурка', 'value' => WALLS_PLASTER],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Возведение внутренних стен',
                'name'         => 'walling',
                'defaultValue' => false,
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция стен',
                'name'         => 'wallSoundproofing',
                'defaultValue' => false,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Потолок',
                'name'         => 'ceiling',
                'defaultValue' => CEILING_STRETCH_1L,
                'options'      => [
                    ['title' => 'Гипсокартон в один уровень', 'value' => CEILING_DRYWALL],
                    ['title' => 'Натяжной в один уровень', 'value' => CEILING_STRETCH_1L],
                    ['title' => 'Натяжной многоуровневый', 'value' => CEILING_STRETCH_2L],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция потолка',
                'name'         => 'ceilingSoundproofing',
                'defaultValue' => false,
            ],
            ['type' => 'divider'],
            [
                'type'         => 'checkbox',
                'title'        => 'Замена радиаторов',
                'name'         => 'radiatorReplacement',
                'defaultValue' => false,
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Установка кондиционеров',
                'name'         => 'airConditioner',
                'defaultValue' => false,
            ],
        ],
    ],

    'hall' => [
        'title'  => 'Коридор',
        'params' => [
            [
                'type'         => 'text',
                'title'        => 'Площадь',
                'name'         => 'area',
                'defaultValue' => null,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Пол',
                'name'         => 'floor',
                'defaultValue' => FLOOR_PARQUET,
                'options'      => [
                    ['title' => 'Плитка', 'value' => FLOOR_TILE],
                    ['title' => 'Ламинат', 'value' => FLOOR_LAMINATE],
                    ['title' => 'Паркетная доска на подложку', 'value' => FLOOR_PARQUET],
                    [
                        'title' => 'Массивная доска/Инженерная доска на клей',
                        'value' => FLOOR_MASSIVE_BOARD,
                    ],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Устройство теплого пола',
                'name'         => 'floorWarm',
                'defaultValue' => false,
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция пола',
                'name'         => 'floorSoundproofing',
                'defaultValue' => false,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Стены',
                'name'         => 'wall',
                'defaultValue' => WALLS_PAINTING,
                'options'      => [
                    ['title' => 'Обои', 'value' => WALLS_WALLPAPER],
                    ['title' => 'Покраска', 'value' => WALLS_PAINTING],
                    ['title' => 'Декоративная штукатурка', 'value' => WALLS_PLASTER],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция стен',
                'name'         => 'wallSoundproofing',
                'defaultValue' => false,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Потолок',
                'name'         => 'ceiling',
                'defaultValue' => CEILING_PAINTING,
                'options'      => [
                    ['title' => 'Покраска', 'value' => CEILING_PAINTING],
                    ['title' => 'Натяжной в один уровень', 'value' => CEILING_STRETCH_1L],
                    ['title' => 'Натяжной многоуровневый', 'value' => CEILING_STRETCH_2L],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция потолка',
                'name'         => 'ceilingSoundproofing',
                'defaultValue' => false,
            ],
        ],
    ],

    'kitchen' => [
        'title'  => 'Кухня',
        'params' => [
            [
                'type'         => 'text',
                'title'        => 'Площадь',
                'name'         => 'area',
                'defaultValue' => null,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Пол',
                'name'         => 'floor',
                'defaultValue' => FLOOR_MASSIVE_BOARD,
                'options'      => [
                    ['title' => 'Плитка', 'value' => FLOOR_TILE],
                    ['title' => 'Ламинат', 'value' => FLOOR_LAMINATE],
                    ['title' => 'Паркетная доска на подложку', 'value' => FLOOR_PARQUET],
                    [
                        'title' => 'Массивная доска/Инженерная доска на клей',
                        'value' => FLOOR_MASSIVE_BOARD,
                    ],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Устройство теплого пола',
                'name'         => 'floorWarm',
                'defaultValue' => false,
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция пола',
                'name'         => 'floorSoundproofing',
                'defaultValue' => false,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Стены',
                'name'         => 'wall',
                'defaultValue' => WALLS_PLASTER,
                'options'      => [
                    ['title' => 'Обои', 'value' => WALLS_WALLPAPER],
                    ['title' => 'Покраска', 'value' => WALLS_PAINTING],
                    ['title' => 'Декоративная штукатурка', 'value' => WALLS_PLASTER],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция стен',
                'name'         => 'wallSoundproofing',
                'defaultValue' => false,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Потолок',
                'name'         => 'ceiling',
                'defaultValue' => CEILING_STRETCH_2L,
                'options'      => [
                    ['title' => 'Покраска', 'value' => CEILING_PAINTING],
                    ['title' => 'Натяжной в один уровень', 'value' => CEILING_STRETCH_1L],
                    ['title' => 'Натяжной многоуровневый', 'value' => CEILING_STRETCH_2L],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция потолка',
                'name'         => 'ceilingSoundproofing',
                'defaultValue' => false,
            ],
            ['type' => 'divider'],
            [
                'type'         => 'checkbox',
                'title'        => 'Замена радиаторов',
                'name'         => 'radiatorReplacement',
                'defaultValue' => false,
            ],
        ],
    ],

    'restroom' => [
        'title'  => 'Туалет',
        'params' => [
            [
                'type'         => 'text',
                'title'        => 'Площадь',
                'name'         => 'area',
                'defaultValue' => null,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Пол',
                'name'         => 'floor',
                'defaultValue' => FLOOR_TILE,
                'options'      => [
                    ['title' => 'Плитка', 'value' => FLOOR_TILE],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Устройство теплого пола',
                'name'         => 'floorWarm',
                'defaultValue' => false,
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция пола',
                'name'         => 'floorSoundproofing',
                'defaultValue' => false,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Стены',
                'name'         => 'wall',
                'defaultValue' => WALLS_TILE,
                'options'      => [
                    ['title' => 'Плитка', 'value' => WALLS_TILE],
                    ['title' => 'Покраска', 'value' => WALLS_PAINTING],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция стен',
                'name'         => 'wallSoundproofing',
                'defaultValue' => false,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Потолок',
                'name'         => 'ceiling',
                'defaultValue' => CEILING_STRETCH_1L,
                'options'      => [
                    ['title' => 'Натяжной в один уровень', 'value' => CEILING_STRETCH_1L],
                    ['title' => 'Натяжной многоуровневый', 'value' => CEILING_STRETCH_2L],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция потолка',
                'name'         => 'ceilingSoundproofing',
                'defaultValue' => false,
            ],
            ['type' => 'divider'],
            [
                'type'         => 'checkbox',
                'title'        => 'Замена напольного унитаза на подвесной',
                'name'         => 'toiletReplacement',
                'defaultValue' => false,
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Система защиты от протечек',
                'name'         => 'protect',
                'defaultValue' => false,
            ],
        ],
    ],

    'bathroom' => [
        'title'  => 'Ванная',
        'params' => [
            [
                'type'         => 'text',
                'title'        => 'Площадь',
                'name'         => 'area',
                'defaultValue' => null,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Пол',
                'name'         => 'floor',
                'defaultValue' => FLOOR_TILE,
                'options'      => [
                    ['title' => 'Плитка', 'value' => FLOOR_TILE],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Устройство теплого пола',
                'name'         => 'floorWarm',
                'defaultValue' => false,
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция пола',
                'name'         => 'floorSoundproofing',
                'defaultValue' => false,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Стены',
                'name'         => 'wall',
                'defaultValue' => WALLS_TILE,
                'options'      => [
                    ['title' => 'Плитка', 'value' => WALLS_TILE],
                    ['title' => 'Покраска', 'value' => WALLS_PAINTING],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция стен',
                'name'         => 'wallSoundproofing',
                'defaultValue' => false,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Потолок',
                'name'         => 'ceiling',
                'defaultValue' => CEILING_STRETCH_1L,
                'options'      => [
                    ['title' => 'Натяжной в один уровень', 'value' => CEILING_STRETCH_1L],
                    ['title' => 'Натяжной многоуровневый', 'value' => CEILING_STRETCH_2L],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция потолка',
                'name'         => 'ceilingSoundproofing',
                'defaultValue' => false,
            ],
            ['type' => 'divider'],
            [
                'type'         => 'checkbox',
                'title'        => 'Замена полотенцесушителя',
                'name'         => 'towelDryer',
                'defaultValue' => false,
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Гигиенический душ',
                'name'         => 'shower',
                'defaultValue' => false,
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Система защиты от протечек',
                'name'         => 'protect',
                'defaultValue' => false,
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Проточный водонагреватель',
                'name'         => 'waterHeater',
                'defaultValue' => false,
            ],
        ],
    ],

    'combinedBathroom' => [
        'title'  => 'Ванная + Туалет',
        'params' => [
            [
                'type'         => 'text',
                'title'        => 'Площадь',
                'name'         => 'area',
                'defaultValue' => null,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Пол',
                'name'         => 'floor',
                'defaultValue' => FLOOR_TILE,
                'options'      => [
                    ['title' => 'Плитка', 'value' => FLOOR_TILE],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Устройство теплого пола',
                'name'         => 'floorWarm',
                'defaultValue' => false,
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция пола',
                'name'         => 'floorSoundproofing',
                'defaultValue' => false,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Стены',
                'name'         => 'wall',
                'defaultValue' => WALLS_TILE,
                'options'      => [
                    ['title' => 'Плитка', 'value' => WALLS_TILE],
                    ['title' => 'Покраска', 'value' => WALLS_PAINTING],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция стен',
                'name'         => 'wallSoundproofing',
                'defaultValue' => false,
            ],
            [
                'type'         => 'dropdown',
                'title'        => 'Потолок',
                'name'         => 'ceiling',
                'defaultValue' => CEILING_STRETCH_1L,
                'options'      => [
                    ['title' => 'Натяжной в один уровень', 'value' => CEILING_STRETCH_1L],
                    ['title' => 'Натяжной многоуровневый', 'value' => CEILING_STRETCH_2L],
                ],
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Звукоизоляция потолка',
                'name'         => 'ceilingSoundproofing',
                'defaultValue' => false,
            ],
            ['type' => 'divider'],
            [
                'type'         => 'checkbox',
                'title'        => 'Замена полотенцесушителя',
                'name'         => 'towelDryer',
                'defaultValue' => false,
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Замена напольного унитаза на подвесной',
                'name'         => 'toiletReplacement',
                'defaultValue' => false,
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Гигиенический душ',
                'name'         => 'shower',
                'defaultValue' => false,
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Система защиты от протечек',
                'name'         => 'protect',
                'defaultValue' => false,
            ],
            [
                'type'         => 'checkbox',
                'title'        => 'Проточный водонагреватель',
                'name'         => 'waterHeater',
                'defaultValue' => false,
            ],
        ],
    ],

    'plumbing' => [
        'title'  => 'Сантехника',
        'params' => [
            [
                'type'  => 'title',
                'title' => 'Выберите количество сантехнических приборов=>',
            ],
            [
                'type'         => 'spin',
                'title'        => 'Унитаз',
                'name'         => 'toilet',
                'defaultValue' => 1,
            ],
            [
                'type'         => 'spin',
                'title'        => 'Ванна',
                'name'         => 'vanna',
                'defaultValue' => 1,
            ],
            [
                'type'         => 'spin',
                'title'        => 'Душевая',
                'name'         => 'shower',
                'defaultValue' => 1,
            ],
            [
                'type'         => 'spin',
                'title'        => 'Раковина',
                'name'         => 'rakovina',
                'defaultValue' => 2,
            ],
            [
                'type'         => 'spin',
                'title'        => 'Стиральная машина',
                'name'         => 'washingMachine',
                'defaultValue' => 1,
            ],
            [
                'type'         => 'spin',
                'title'        => 'Посудомоечная машина',
                'name'         => 'machine',
                'defaultValue' => 0,
            ],
        ],
    ],
];
