<script>/*!
 * Аквариус
 * File: IosSwitch.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

const checkSize = value => ['small', 'normal', 'large'].indexOf(value) !== -1;

export default {
    name: 'IosSwitch',

    props: {
        value: Boolean,
        size : { type: String, default: 'normal', validator: checkSize },
        theme: { type: String, default: 'green' },
    },

    computed: {
        rootClasses() {
            let base  = 'ios-switch';
            let size  = ` ${base}_size_${this.size}`;
            let theme = ` ${base}_theme_${this.theme}`;

            return `${base}${theme}${size}`;
        },
    },
};
</script>

<template>
    <label :class="rootClasses">
        <input class="ios-switch__element"
            type="checkbox"
            :checked="value"
            @change="$emit('input', $event.target.checked)"
        >
        <span class="ios-switch__indicator"><span class="ios-switch__knob"></span></span>
    </label>
</template>

<style lang="scss" src="../assets/scss/components/IosSwitch.scss"></style>
