<script>/*!
 * Аквариус
 * File: App.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import AppHeader from '@/components/App/AppHeader';
import AppMenu   from '@/components/App/AppMenu';


export default {
    name: 'App',

    components: {
        AppHeader,
        AppMenu,
    },
};
</script>

<template>
    <div class="app" id="app">
        <AppHeader></AppHeader>
        <router-view/>
        <AppMenu></AppMenu>
    </div>
</template>
