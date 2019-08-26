<script>/*!
 * Аквариус
 * File: App.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import AppHeader               from '@/components/App/AppHeader';
import AppMenu                 from '@/components/App/AppMenu';
import { EVENT_CLICK_OUTSIDE } from '@/library/constants';
import AppToast                from '@/components/App/AppToast';


export default {
    name: 'App',

    components: {
        AppHeader,
        AppMenu,
        AppToast,
    },

    computed: {
        darkHeader() {
            return this.$store.state.headerDark;
        },
    },

    mounted() {
        this.$el.addEventListener('click', e => {
            this.$bus.$emit(EVENT_CLICK_OUTSIDE, -1);
        });
        this.loadData();
    },

    methods: {
        screenBefore(el) {
            el.classList.add(this.$store.state.stepDirection);
        },
        screenAfter(el) {
            el.classList.remove(this.$store.state.stepDirection);
        },
        async loadData() {
            let response = await fetch('/api/data');
            if (!response.ok) {
                this.$store.commit('setToastMessage', `${response.status} ${response.statusText}`);
            } else {
                let data = await response.json();
                this.$store.commit('updateTypes', data.types);
                this.$store.commit('updatePrices', data.prices);
            }
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
        <AppToast :msg="$store.state.toastMessage"></AppToast>
    </div>
</template>
