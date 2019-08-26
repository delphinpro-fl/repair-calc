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

        toastMessage: '',

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

        roomList     : [],
        designProject: true,
        apartments   : 1,

        types : {},
        prices: null,
    },

    getters: {
        roomList: state => [...state.roomList],
        telephoneAsLink(state) {
            let plus = state.telephone.length && state.telephone[0] === '+' ? '+' : '';
            return `tel:${plus}${state.telephone.replace(/\D/g, '')}`;
        },
    },

    mutations: {
        setToastMessage(state, msg) { state.toastMessage = msg; },
        hideToast(state) { state.toastMessage = ''; },

        mainmenuToggle(state) {
            state.isOpenMainMenu = !state.isOpenMainMenu;
        },

        switchScreen(state, newIndex) {
            if (newIndex === state.stepIndex) return;
            state.stepDirection = newIndex > state.stepIndex ? 'up' : 'down';
            state.stepIndex     = newIndex;
        },

        updateTypes(state, data) { state.types = data; },
        updatePrices(state, data) { state.prices = data; },

        updateHeaderDark(state, amount) { state.headerDark = amount; },

        updateCountRoom(state, amount) { Vue.set(state.objects, 'room', amount); },
        updateCountHall(state, amount) { Vue.set(state.objects, 'hall', amount); },
        updateCountKitchen(state, amount) { Vue.set(state.objects, 'kitchen', amount); },
        updateCountRestroom(state, amount) { Vue.set(state.objects, 'restroom', amount); },
        updateCountBathroom(state, amount) { Vue.set(state.objects, 'bathroom', amount); },
        updateCountCombinedBathroom(state, amount) { Vue.set(state.objects, 'combinedBathroom', amount); },
        updateIsCombinedBathroom(state, amount) { Vue.set(state.objects, 'isCombinedBathroom', amount); },

        updateDesignProject(state, amount) { state.designProject = amount; },
        updateApartments(state, amount) { state.apartments = amount; },

        updateRoomList(state, amount) { state.roomList = amount; },
    },

    actions: {},
});
