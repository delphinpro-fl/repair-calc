/*!
 * Аквариус
 * File: main.js
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import './assets/scss/main.scss';

import Vue          from 'vue';
import VueScrollbar from 'vue2-scrollbar';

import App    from './App.vue';
import router from './router';
import store  from './store';


Vue.config.productionTip = false;

Number.prototype.fmt = function (decimal = 0) {
    return this.toFixed(decimal).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

Vue.component('VueScrollbar', VueScrollbar);

new Vue({
    router,
    store,
    render : h => h(App),
    mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
}).$mount('#app');
