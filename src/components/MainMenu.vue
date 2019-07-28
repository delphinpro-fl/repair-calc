<script>/*!
 * Аквариус
 * File: MainMenu.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import IconConsulting from '@/components/Icon/IconConsulting';
import IconSquare     from '@/components/Icon/IconSquare';
import IconDownload   from '@/components/Icon/IconDownload';
import IconSign       from '@/components/Icon/IconSign';


export default {
    name: 'Mainmenu',

    components: {
        IconConsulting,
        IconSquare,
        IconDownload,
        IconSign,
    },

    data: () => ({}),

    computed: {
        menu() {
            return this.$store.state.mainmenu;
        },
    },
};
</script>

<template>
    <ul class="mainmenu" v-if="menu.length">
        <li class="mainmenu__item" v-for="item in menu">
            <a class="mainmenu__link" :href="item.url">
                <span class="mainmenu__iconbox"><span :is="item.icon"></span></span>
                <span class="mainmenu__title">{{item.title}}</span>
            </a>
        </li>
    </ul>
</template>

<style lang="scss" src="../assets/scss/components/MainMenu.scss"></style>
