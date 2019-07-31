/*!
 * Аквариус
 * File: router.js
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import Vue               from 'vue';
import Router            from 'vue-router';
import StartScreen       from '@/views/StartScreen.vue';
import SelectRooms       from '@/views/SelectRooms';
import PreviewBuild      from '@/views/PreviewBuild';
import AdditionalOptions from '@/views/AdditionalOptions';


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
        {
            path     : '/step-1-of-3',
            name     : 'step1',
            component: SelectRooms,
        },
        {
            path     : '/step-2-of-3',
            name     : 'step2',
            component: PreviewBuild,
        },
        {
            path     : '/step-3-of-3',
            name     : 'step3',
            component: AdditionalOptions,
        },
    ],
});
