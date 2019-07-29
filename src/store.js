/*!
 * Аквариус
 * File: store.js
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import Vue  from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',

    state: {
        isOpenMainMenu: false,

        mainmenu: [
            {
                title: 'Бесплатная консультация',
                url  : '#',
                icon : 'IconConsulting',
            },
            {
                title: 'Заказать замер',
                url  : '#',
                icon : 'IconSquare',
            },
            {
                title: 'Скачать каталог',
                url  : '#',
                icon : 'IconDownload',
            },
            {
                title: 'О компании',
                url  : '#',
                icon : 'IconSign',
            },
        ],

        logoText: 'Ремонт под ключ квартир,<br>коттеджей, офисов<br>В Москве и МО',

        telephone: '+7 (495) 000 00 00',
        instagram: '#',

        companyInfo  : '<p>ООО «Аквариус» &nbsp;&nbsp;&nbsp; ОГРН 0000000000000</p>',
        privacyPolicy: '#',
        termOfUse    : '#',

        headerDark: false,

        steps: [
            { title: 'Введение' },
            { title: 'Вопрос 1' },
            { title: 'Вопрос 2' },
            { title: 'Вопрос 3' },
        ],

        stepIndex    : 0,
        stepDirection: null,

        objects: {
            room              : 2,
            hall              : 1,
            kitchen           : 1,
            restroom          : 1,
            bathroom          : 1,
            combinedBathroom  : 1,
            isCombinedBathroom: false,
            designProject     : false,
            apartments        : 1,
        },

        types: {
            room: {
                title : 'Комната',
                params: [
                    {
                        type        : 'text',
                        title       : 'Площадь',
                        name        : 'area',
                        defaultValue: null,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Пол',
                        name        : 'floor',
                        defaultValue: 0,
                        options     : [
                            { title: 'Плитка' },
                            { title: 'Ламинат' },
                            { title: 'Паркетная доска на подложку' },
                            { title: 'Массивная доска/Инженерная доска на клей' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Устройство теплого пола',
                        name        : 'floorWarm',
                        defaultValue: false,
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция пола',
                        name        : 'floorSoundproofing',
                        defaultValue: false,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Стены',
                        name        : 'wall',
                        defaultValue: 0,
                        options     : [
                            { title: 'Обои', title2: 'Поклейка обоев' },
                            {
                                title : 'Покраска',
                                title2: 'Окрашивание стен водоэмульсионной краской в два слоя (оклеивание стеклохолстом, шпаклевание Шитрок в два слоя)',
                            },
                            {
                                title : 'Декоративная штукатурка',
                                title2: 'Декоративная штукатурка (оклеивание стеклохолстом, шпаклевание Шитрок в два слоя)',
                            },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Возведение внутренних стен',
                        name        : 'walling',
                        defaultValue: false,
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция стен',
                        name        : 'wallSoundproofing',
                        defaultValue: false,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Потолок',
                        name        : 'ceiling',
                        defaultValue: 0,
                        options     : [
                            { title: 'Гипсокартон в один уровень' },
                            { title: 'Натяжной в один уровень' },
                            { title: 'Натяжной многоуровневый' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция потолка',
                        name        : 'ceilingSoundproofing',
                        defaultValue: false,
                    },
                    { type: 'divider' },
                    {
                        type        : 'checkbox',
                        title       : 'Замена радиаторов',
                        name        : 'radiatorReplacement',
                        defaultValue: false,
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Установка кондиционеров',
                        name        : 'airConditioner',
                        defaultValue: false,
                    },
                ],
            },

            hall: {
                title : 'Коридор',
                params: [
                    {
                        type        : 'text',
                        title       : 'Площадь',
                        name        : 'area',
                        defaultValue: null,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Пол',
                        name        : 'floor',
                        defaultValue: 0,
                        options     : [
                            { title: 'Плитка' },
                            { title: 'Ламинат' },
                            { title: 'Паркетная доска на подложку' },
                            { title: 'Массивная доска/Инженерная доска на клей' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Устройство теплого пола',
                        name        : 'floorWarm',
                        defaultValue: false,
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция пола',
                        name        : 'floorSoundproofing',
                        defaultValue: false,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Стены',
                        name        : 'wall',
                        defaultValue: 0,
                        options     : [
                            { title: 'Обои' },
                            { title: 'Покраска' },
                            { title: 'Декоративная штукатурка' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция стен',
                        name        : 'wallSoundproofing',
                        defaultValue: false,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Потолок',
                        name        : 'ceiling',
                        defaultValue: 0,
                        options     : [
                            { title: 'Покраска' },
                            { title: 'Натяжной в один уровень' },
                            { title: 'Натяжной многоуровневый' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция потолка',
                        name        : 'ceilingSoundproofing',
                        defaultValue: false,
                    },
                ],
            },

            kitchen: {
                title : 'Кухня',
                params: [
                    {
                        type        : 'text',
                        title       : 'Площадь',
                        name        : 'area',
                        defaultValue: null,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Пол',
                        name        : 'floor',
                        defaultValue: 0,
                        options     : [
                            { title: 'Плитка' },
                            { title: 'Ламинат' },
                            { title: 'Паркетная доска на подложку' },
                            { title: 'Массивная доска/Инженерная доска на клей' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Устройство теплого пола',
                        name        : 'floorWarm',
                        defaultValue: false,
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция пола',
                        name        : 'floorSoundproofing',
                        defaultValue: false,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Стены',
                        name        : 'wall',
                        defaultValue: 0,
                        options     : [
                            { title: 'Обои' },
                            { title: 'Покраска' },
                            { title: 'Декоративная штукатурка' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция стен',
                        name        : 'wallSoundproofing',
                        defaultValue: false,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Потолок',
                        name        : 'ceiling',
                        defaultValue: 0,
                        options     : [
                            { title: 'Покраска' },
                            { title: 'Натяжной в один уровень' },
                            { title: 'Натяжной многоуровневый' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция потолка',
                        name        : 'ceilingSoundproofing',
                        defaultValue: false,
                    },
                    { type: 'divider' },
                    {
                        type        : 'checkbox',
                        title       : 'Замена радиаторов',
                        name        : 'radiatorReplacement',
                        defaultValue: false,
                    },
                ],
            },

            restroom: {
                title : 'Туалет',
                params: [
                    {
                        type        : 'text',
                        title       : 'Площадь',
                        name        : 'area',
                        defaultValue: null,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Пол',
                        name        : 'floor',
                        defaultValue: 0,
                        options     : [
                            { title: 'Плитка' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Устройство теплого пола',
                        name        : 'floorWarm',
                        defaultValue: false,
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция пола',
                        name        : 'floorSoundproofing',
                        defaultValue: false,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Стены',
                        name        : 'wall',
                        defaultValue: 0,
                        options     : [
                            { title: 'Плитка' },
                            { title: 'Покраска' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция стен',
                        name        : 'wallSoundproofing',
                        defaultValue: false,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Потолок',
                        name        : 'ceiling',
                        defaultValue: 0,
                        options     : [
                            { title: 'Натяжной в один уровень' },
                            { title: 'Натяжной многоуровневый' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция потолка',
                        name        : 'ceilingSoundproofing',
                        defaultValue: false,
                    },
                    { type: 'divider' },
                    {
                        type        : 'checkbox',
                        title       : 'Замена напольного унитаза на подвесной',
                        name        : 'toiletReplacement',
                        defaultValue: false,
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Система защиты от протечек',
                        name        : 'protect',
                        defaultValue: false,
                    },
                ],
            },

            bathroom: {
                title : 'Ванная',
                params: [
                    {
                        type        : 'text',
                        title       : 'Площадь',
                        name        : 'area',
                        defaultValue: null,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Пол',
                        name        : 'floor',
                        defaultValue: 0,
                        options     : [
                            { title: 'Плитка' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Устройство теплого пола',
                        name        : 'floorWarm',
                        defaultValue: false,
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция пола',
                        name        : 'floorSoundproofing',
                        defaultValue: false,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Стены',
                        name        : 'wall',
                        defaultValue: 0,
                        options     : [
                            { title: 'Плитка' },
                            { title: 'Покраска' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция стен',
                        name        : 'wallSoundproofing',
                        defaultValue: false,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Потолок',
                        name        : 'ceiling',
                        defaultValue: 0,
                        options     : [
                            { title: 'Натяжной в один уровень' },
                            { title: 'Натяжной многоуровневый' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция потолка',
                        name        : 'ceilingSoundproofing',
                        defaultValue: false,
                    },
                    { type: 'divider' },
                    {
                        type        : 'checkbox',
                        title       : 'Замена полотенцесушителя',
                        name        : 'towelDryer',
                        defaultValue: false,
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Гигиенический душ',
                        name        : 'shower',
                        defaultValue: false,
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Система защиты от протечек',
                        name        : 'protect',
                        defaultValue: false,
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Проточный водонагреватель',
                        name        : 'waterHeater',
                        defaultValue: false,
                    },
                ],
            },

            combinedBathroom: {
                title : 'Ванная + Туалет',
                params: [
                    {
                        type        : 'text',
                        title       : 'Площадь',
                        name        : 'area',
                        defaultValue: null,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Пол',
                        name        : 'floor',
                        defaultValue: 0,
                        options     : [
                            { title: 'Плитка' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Устройство теплого пола',
                        name        : 'floorWarm',
                        defaultValue: false,
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция пола',
                        name        : 'floorSoundproofing',
                        defaultValue: false,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Стены',
                        name        : 'wall',
                        defaultValue: 0,
                        options     : [
                            { title: 'Плитка' },
                            { title: 'Покраска' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция стен',
                        name        : 'wallSoundproofing',
                        defaultValue: false,
                    },
                    {
                        type        : 'dropdown',
                        title       : 'Потолок',
                        name        : 'ceiling',
                        defaultValue: 0,
                        options     : [
                            { title: 'Натяжной в один уровень' },
                            { title: 'Натяжной многоуровневый' },
                        ],
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Звукоизоляция потолка',
                        name        : 'ceilingSoundproofing',
                        defaultValue: false,
                    },
                    { type: 'divider' },
                    {
                        type        : 'checkbox',
                        title       : 'Замена полотенцесушителя',
                        name        : 'towelDryer',
                        defaultValue: false,
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Замена напольного унитаза на подвесной',
                        name        : 'toiletReplacement',
                        defaultValue: false,
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Гигиенический душ',
                        name        : 'shower',
                        defaultValue: false,
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Система защиты от протечек',
                        name        : 'protect',
                        defaultValue: false,
                    },
                    {
                        type        : 'checkbox',
                        title       : 'Проточный водонагреватель',
                        name        : 'waterHeater',
                        defaultValue: false,
                    },
                ],
            },

            plumbing: {
                title : 'Сантехника',
                params: [
                    {
                        type : 'title',
                        title: 'Выберите количество сантехнических приборов:',
                    },
                    {
                        type        : 'spin',
                        title       : 'Унитаз',
                        name        : 'toilet',
                        defaultValue: 1,
                    },
                    {
                        type        : 'spin',
                        title       : 'Ванна',
                        name        : 'vanna',
                        defaultValue: 1,
                    },
                    {
                        type        : 'spin',
                        title       : 'Душевая',
                        name        : 'shower',
                        defaultValue: 1,
                    },
                    {
                        type        : 'spin',
                        title       : 'Раковина',
                        name        : 'rakovina',
                        defaultValue: 2,
                    },
                    {
                        type        : 'spin',
                        title       : 'Стиральная машина',
                        name        : 'washingMachine',
                        defaultValue: 1,
                    },
                    {
                        type        : 'spin',
                        title       : 'Посудомоечная машина',
                        name        : 'machine',
                        defaultValue: 0,
                    },
                ],
            },
        },
    },

    getters: {
        telephoneAsLink(state) {
            let plus = state.telephone.length && state.telephone[0] === '+' ? '+' : '';
            return `tel:${plus}${state.telephone.replace(/\D/g, '')}`;
        },
    },

    mutations: {
        mainmenuToggle(state) {
            state.isOpenMainMenu = !state.isOpenMainMenu;
        },

        switchScreen(state, newIndex) {
            if (newIndex === state.stepIndex) return;
            state.stepDirection = newIndex > state.stepIndex ? 'up' : 'down';
            state.stepIndex = newIndex;
        },

        updateHeaderDark(state, amount) { state.headerDark = amount; },

        updateCountRoom(state, amount) { Vue.set(state.objects, 'room', amount); },
        updateCountHall(state, amount) { Vue.set(state.objects, 'hall', amount); },
        updateCountKitchen(state, amount) { Vue.set(state.objects, 'kitchen', amount); },
        updateCountRestroom(state, amount) { Vue.set(state.objects, 'restroom', amount); },
        updateCountBathroom(state, amount) { Vue.set(state.objects, 'bathroom', amount); },
        updateCountCombinedBathroom(state, amount) { Vue.set(state.objects, 'combinedBathroom', amount); },
        updateIsCombinedBathroom(state, amount) { Vue.set(state.objects, 'isCombinedBathroom', amount); },
    },

    actions: {},
});
