<script>/*!
 * Аквариус
 * File: OptionRow.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

export default {
    name: 'OptionRow',

    props: {
        label  : String,
        id     : String,
        reverse: Boolean,
    },

    computed: {
        labelTag() {
            return this.id ? 'label' : 'div';
        },
    },
};
</script>

<template>
    <div class="option-row" :class="{'option-row_reverse':reverse}">
        <component class="option-row__label" :is="labelTag" :for="id">{{label}}</component>
        <div class="option-row__control">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" src="../assets/scss/components/OptionRow.scss"></style>
