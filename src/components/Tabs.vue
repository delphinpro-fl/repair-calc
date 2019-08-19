<script>/*!
 * Аквариус
 * File: Tabs.vue
 * © 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import IconAngle      from '@/components/Icon/IconAngle';
import { mapGetters } from 'vuex';


export default {
    name: 'Tabs',

    components: {
        IconAngle,
    },

    data: () => ({
        active: 0,
    }),

    computed: {
        ...mapGetters([
            'roomList',
        ]),
        allTab() {
            let totalArea = this.roomList.reduce((acc, item) => {
                return acc + (item.params.area ? item.params.area : 0);
            }, 0);
            return {
                title   : 'Все',
                subtitle: `${totalArea} м²`,
            };
        },
        tabs() {
            return [
                this.allTab,
                ...this.roomList.filter(item => item.type !== 'plumbing').map(item => ({
                    title   : item.title,
                    subtitle: item.params.area ? `${item.params.area} м²` : '&nbsp;',
                })),
            ];
        },
    },
    methods : {
        setActive(index) {
            this.active = index;
            this.$emit('change', index);
        },
    },
};
</script>

<template>
    <div class="tabs">
        <div
            class="tabs__tab tab"
            :class="{tab_active: index === active}"
            v-for="(tab, index) in tabs" :key="index"
            @click="setActive(index)"
        >
            <span class="tab__title">{{tab.title}}</span>
            <span class="tab__subtitle" v-html="tab.subtitle"></span>
        </div>
        <!--
                <div class="result-tabs__button result-tabs__button_prev"
                    v-if="showNavButtons"
                    @click="switchTab(-1)"
                >
                    <IconLeft/>
                </div>
                <div class="result-tabs__scroller" ref="scroller">
                    <div class="result-tabs__tabs" ref="tabs">
                    </div>
                </div>
                <div class="result-tabs__button result-tabs__button_prev"
                    v-if="showNavButtons"
                    @click="switchTab(1)"
                >
                    <IconRight/>
                </div>
        -->
    </div>
</template>

<style lang="scss" src="../assets/scss/components/Tabs.scss"></style>
