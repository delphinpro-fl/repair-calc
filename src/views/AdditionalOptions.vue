<script>/*!
 * Аквариус
 * File: SelectRooms.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import ScrollButton from '@/components/ScrollButton';
import IconInfo     from '@/components/Icon/IconInfo';
import OptionRow    from '@/components/OptionRow';


export default {
    name: 'AdditionalOptions',

    components: {
        OptionRow,
        ScrollButton,
        IconInfo,
    },

    data: () => ({
        windowHeight: window.innerHeight,
        tm          : null,
    }),

    computed: {
        styles() {
            return { minHeight: this.windowHeight + 'px' };
        },

        designProject: {
            get() { return this.$store.state.designProject; },
            set(v) { this.$store.commit('updateDesignProject', v); },
        },

        apartments: {
            get() { return this.$store.state.apartments; },
            set(v) { this.$store.commit('updateApartments', v); },
        },
    },

    mounted() {
        this.$store.commit('switchScreen', 3);
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
        nextScreen() {
            this.$router.push({ name: 'result' });
        },
    },
};
</script>

<template>
    <div class="additional-options">
        <VueScrollbar class="vue-scrollbar" :onScroll="onScroll">
            <div class="additional-options__container container" :style="styles">
                <div>
                    <div class="additional-options__rows-align">
                        <div class="additional-options__title">
                            <span>Требуется ли дизайн-проект?</span>
                            <div class="info-icon">
                                <IconInfo/>
                            </div>
                        </div>

                        <div class="additional-options__rows">
                            <div class="additional-options__row">
                                <OptionRow id="r1" label="Да" :reverse="true">
                                    <label class="radio2">
                                        <input id="r1"
                                            type="radio"
                                            :value="true"
                                            :checked="designProject===true"
                                            v-model="designProject"
                                        ><span></span>
                                    </label>
                                </OptionRow>
                            </div>
                            <div class="additional-options__row">
                                <OptionRow id="r2" label="Нет" :reverse="true">
                                    <label class="radio2">
                                        <input id="r2"
                                            type="radio"
                                            :value="false"
                                            :checked="designProject===false"
                                            v-model="designProject"
                                        ><span></span>
                                    </label>
                                </OptionRow>
                            </div>
                        </div>
                    </div>

                    <div class="additional-options__rows-align">
                        <div class="additional-options__title">
                            <span>Тип помещения</span>
                            <div class="info-icon">
                                <IconInfo/>
                            </div>
                        </div>

                        <div class="additional-options__rows">
                            <div class="additional-options__row">
                                <OptionRow id="r21" label="Новостройка" :reverse="true">
                                    <label class="radio2">
                                        <input id="r21"
                                            type="radio"
                                            :value="1"
                                            :checked="apartments===1"
                                            v-model="apartments"
                                        ><span></span>
                                    </label>
                                </OptionRow>
                            </div>
                            <div class="additional-options__row">
                                <OptionRow id="r22" label="Вторичное жильё" :reverse="true">
                                    <label class="radio2">
                                        <input id="r22"
                                            type="radio"
                                            :value="2"
                                            :checked="apartments===2"
                                            v-model="apartments"
                                        ><span></span>
                                    </label>
                                </OptionRow>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="additional-options__button">
                    <ScrollButton aria-label="Получить расчет" @click="nextScreen"></ScrollButton>
                </div>

            </div>
        </VueScrollbar>
    </div>
</template>

<style lang="scss" src="../assets/scss/components/AdditionalOptions.scss"></style>
