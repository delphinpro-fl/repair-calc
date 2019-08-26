<script>/*!
 * Аквариус
 * File: ResultScreen.vue
 * © 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import IconDownload from '@/components/Icon/IconDownload';


export default {
    name: 'ResultScreen',

    components: {
        IconDownload,
    },

    data: () => ({
        windowHeight: window.innerHeight,
        tm          : null,
    }),

    computed: {
        styles() { return { minHeight: this.windowHeight + 'px' }; },
    },

    created() {
        if (!this.$store.state.roomList.length) {
            location.href = '/';
        }
    },

    mounted() {
        this.$store.commit('switchScreen', 4);
        this.$store.commit('updateHeaderDark', false);
        window.addEventListener('resize', this.onResize.bind(this));
    },

    methods: {
        onResize() {
            clearTimeout(this.tm);
            this.tm = setTimeout(() => this.windowHeight = window.innerHeight, 300);
        },
        onScroll(data) {
            if (this.$store.state.headerDark !== (data.top !== 0)) {
                this.$store.commit('updateHeaderDark', data.top !== 0);
            }
        },
    },
};
</script>

<template>
    <div class="result-screen">
        <VueScrollbar class="vue-scrollbar" :onScroll="onScroll">
            <div class="result-screen__container container" :style="styles">
                <div class="result-screen__wrapper">
                    <div class="result-screen__title">Стоимость и сроки ремонта</div>
                </div>
                <div class="result-screen__footer">
                    <div class="result-screen__note">
                        Все стоимости носят примерный характер и не могут считаться публичной офертой
                    </div>
                    <div class="result-screen__docs">
                        <a class="download" href="#">
                            <IconDownload/>
                            <span>Скачать расчет</span>
                        </a>
                        <button class="send">
                            <IconDownload/>
                            <span>Отправить себе расчет</span>
                        </button>
                    </div>
                    <div class="result-screen__bottom">
                        <p><a class="" href="#">Консультация по результату</a></p>
                        <p><a class="" href="#">Выберите ваш подарок!</a></p>
                    </div>
                </div>
            </div>
        </VueScrollbar>
    </div>
</template>

<style lang="scss" src="../assets/scss/components/ResultScreen.scss"></style>
