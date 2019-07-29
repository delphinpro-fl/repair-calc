/*!
 * Аквариус
 * File: router.js
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import Vue         from 'vue';
import Router      from 'vue-router';
import StartScreen from '@/views/StartScreen.vue';


Vue.use(Router);

export default new Router({
    mode  : 'history',
    base  : process.env.BASE_URL,
    routes: [
        {
            path     : '/',
            name     : 'start',
            component: StartScreen,
        },
    ],
});
