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

        telephone: '+7 (495) 000 00 00',
        instagram: '#',

        companyInfo  : '<p>ООО «Аквариус» &nbsp;&nbsp;&nbsp; ОГРН 0000000000000</p>',
        privacyPolicy: '#',
        termOfUse    : '#',
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
    },

    actions: {},
});
