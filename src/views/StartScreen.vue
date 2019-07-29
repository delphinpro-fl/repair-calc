<script>/*!
 * Аквариус
 * File: views/StartScreen.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import ScrollButton from '@/components/ScrollButton';


export default {
    name: 'StartScreen',

    components: {
        ScrollButton,
    },

    data: () => ({
        windowHeight: window.innerHeight,
        tm          : null,
    }),

    mounted() {
        window.addEventListener('resize', this.onResize.bind(this));
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    },

    computed: {
        styles() {
            return {
                minHeight: this.windowHeight + 'px',
            };
        },
    },

    methods: {
        onResize() {
            clearTimeout(this.tm);
            this.tm = setTimeout(() => this.windowHeight = window.innerHeight, 300);
        },

        onScroll(data) {
            this.$store.commit('updateHeaderDark', data.top !== 0);
        },

        nextScreen() {
            this.$store.commit('switchScreen', 1);
            this.$router.push({ name: 'step1' });
        },
    },
};
</script>

<template>
    <div class="start-screen">
        <VueScrollbar class="vue-scrollbar" :onScroll="onScroll">
            <div class="start-screen__container container" :style="styles">
                <div class="start-screen__title">
                    Пройдите тест за 1&nbsp;минуту и<br>
                    узнайте стоимость вашего<br>
                    ремонта и дизайна интерьера!
                </div>
                <div class="start-screen__hint">
                    После прохождения теста получите смету,<br>
                    без ввода телефона и личных данных {{windowHeight}}
                </div>
                <div class="start-screen__text">
                    <div class="gift-text">
                        Ответьте на три вопроса теста и получите <span class="gift">подарок</span>
                    </div>
                </div>
                <div class="start-screen__button" @click="nextScreen">
                    <ScrollButton aria-label="Начать тест"></ScrollButton>
                </div>
            </div>
        </VueScrollbar>
    </div>
</template>

<style lang="scss" src="../assets/scss/components/StartScreen.scss"></style>
