<script>/*!
 * Аквариус
 * File: SpinControl.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

export default {
    name: 'SpinControl',

    props: {
        value: Number,
        min  : { type: Number, default: -Infinity },
        max  : { type: Number, default: Infinity },
        step : { type: Number, default: 1 },
    },

    data: () => ({}),

    methods: {
        increase() {
            let newValue = Math.min(this.value + this.step, this.max);
            if (newValue !== this.value) this.$emit('input', newValue);
        },

        decrease() {
            let newValue = Math.max(this.value - this.step, this.min);
            if (newValue !== this.value) this.$emit('input', newValue);
        },
    },
};
</script>

<template>
    <div class="spin">
        <button class="spin__btn spin__btn_decrease" @click="decrease" type="button"><span>&lt;</span></button>
        <input class="spin__input" type="number" :value="value">
        <button class="spin__btn spin__btn_increase" @click="increase" type="button"><span>&gt;</span></button>
    </div>
</template>

<style lang="scss" src="../assets/scss/components/SpinControl.scss"></style>
