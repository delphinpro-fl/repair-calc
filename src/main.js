/*!
 * Аквариус
 * File: main.js
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import './assets/scss/main.scss';

import Vue    from 'vue';
import App    from './App.vue';
import router from './router';
import store  from './store';


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render : h => h(App),
    mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
}).$mount('#app');
