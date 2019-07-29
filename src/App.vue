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

    computed: {
        darkHeader() {
            return this.$store.state.headerDark;
        },
    },

    methods: {
        screenBefore(el) {
            console.log('screenBefore', this.$store.state.stepDirection, el);
            el.classList.add(this.$store.state.stepDirection);
        },
        screenAfter(el) {
            console.log('screenAfter',this.$store.state.stepDirection,  el);
            el.classList.remove(this.$store.state.stepDirection);
        },
    },
};
</script>

<template>
    <div
        class="app"
        id="app"
        :class="{app_dark: $store.state.stepIndex> 0}"
    >
        <AppHeader :dark="darkHeader"></AppHeader>
        <transition
            @before-enter="screenBefore"
            @before-leave="screenBefore"
            @after-enter="screenAfter"
            @after-leave="screenAfter"
        >
            <router-view class="app__screen"/>
        </transition>
        <AppMenu></AppMenu>
    </div>
</template>
