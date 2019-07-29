<script>/*!
 * Аквариус
 * File: SelectRooms.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import ScrollButton from '@/components/ScrollButton';
import SpinControl  from '@/components/SpinControl';
import OptionRow    from '@/components/OptionRow';
import IosSwitch    from '@/components/IosSwitch';


export default {
    name: 'QuestionScreen1',

    components: {
        ScrollButton,
        SpinControl,
        OptionRow,
        IosSwitch,
    },

    data: () => ({
        windowHeight: window.innerHeight,
        tm          : null,

        pageTitle: 'Выберите количество комнат, в которых необходим ремонт',
    }),

    computed: {
        room              : {
            get() {return this.$store.state.objects.room;},
            set(value) {this.$store.commit('updateCountRoom', value);},
        },
        hall              : {
            get() {return this.$store.state.objects.hall;},
            set(value) {this.$store.commit('updateCountHall', value);},
        },
        kitchen           : {
            get() {return this.$store.state.objects.kitchen;},
            set(value) {this.$store.commit('updateCountKitchen', value);},
        },
        restroom          : {
            get() {return this.$store.state.objects.restroom;},
            set(value) {this.$store.commit('updateCountRestroom', value);},
        },
        bathroom          : {
            get() {return this.$store.state.objects.bathroom;},
            set(value) {this.$store.commit('updateCountBathroom', value);},
        },
        combinedBathroom  : {
            get() {return this.$store.state.objects.combinedBathroom;},
            set(value) {this.$store.commit('updateCountCombinedBathroom', value);},
        },
        isCombinedBathroom: {
            get() {return this.$store.state.objects.isCombinedBathroom;},
            set(value) {this.$store.commit('updateIsCombinedBathroom', value);},
        },

        styles() {
            return {
                minHeight: this.windowHeight + 'px',
            };
        },
    },

    mounted() {
        this.$store.commit('switchScreen', 1);
        this.$store.commit('updateHeaderDark', false);
        window.addEventListener('resize', this.onResize.bind(this));
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
            this.$router.push({ name: 'step2' });
        },
    },
};
</script>

<template>
    <div class="select-rooms">
        <VueScrollbar class="vue-scrollbar" :onScroll="onScroll">
            <div class="select-rooms__container container" :style="styles">
                <div>
                    <div class="select-rooms__title">{{pageTitle}}</div>
                    <div class="select-rooms__rows-align">
                        <div class="select-rooms__rows">
                            <OptionRow class="select-rooms__row" label="Комната">
                                <SpinControl v-model="room" :min="0"></SpinControl>
                            </OptionRow>
                            <OptionRow class="select-rooms__row" label="Коридор">
                                <SpinControl v-model="hall" :min="0"></SpinControl>
                            </OptionRow>
                            <OptionRow class="select-rooms__row" label="Кухня">
                                <SpinControl v-model="kitchen" :min="0"></SpinControl>
                            </OptionRow>
                            <OptionRow class="select-rooms__row" id="isCombinedBathroom" label="Совмещенный санузел">
                                <IosSwitch id="isCombinedBathroom"
                                    v-model="isCombinedBathroom"
                                    size="large"
                                    theme="green"
                                ></IosSwitch>
                            </OptionRow>
                            <OptionRow class="select-rooms__row" label="Туалет" v-if="!isCombinedBathroom">
                                <SpinControl v-model="restroom" :min="0"></SpinControl>
                            </OptionRow>
                            <OptionRow class="select-rooms__row" label="Ванная" v-if="!isCombinedBathroom">
                                <SpinControl v-model="bathroom" :min="0"></SpinControl>
                            </OptionRow>
                            <OptionRow class="select-rooms__row" label="Ванная + Туалет" v-if="isCombinedBathroom">
                                <SpinControl v-model="combinedBathroom" :min="0"></SpinControl>
                            </OptionRow>
                        </div>
                    </div>
                </div>
                <div class="select-rooms__button">
                    <ScrollButton aria-label="Далее" @click="nextScreen"></ScrollButton>
                </div>
            </div>
        </VueScrollbar>
    </div>
</template>

<style lang="scss" src="../assets/scss/components/SelectRooms.scss"></style>
