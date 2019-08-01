<script>/*!
 * Аквариус
 * File: IconAngle.vue
 * © 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

const checkValues = value => ['top', 'right', 'bottom', 'left'].indexOf(value) !== -1;

export default {
    name: 'IconAngle',

    props: {
        vector: {
            type     : String,
            default  : 'right',
            validator: checkValues,
        },
    },

    computed: {
        classes() { return 'icon-angle-' + this.vector; },
    },
};
</script>

<template>
    <svg class="icon-angle" :class="classes" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <polygon fill="currentColor" points="82.2,256 210.2,128 82.2,0 45.8,36.3 137.5,128 45.8,219.7"></polygon>
    </svg>
</template>

<style lang="scss">
    .icon-angle {
        &-top {
            transform: rotate(-90deg);
        }

        &-left {
            transform: rotate(180deg);
        }

        &-bottom {
            transform: rotate(90deg);
        }
    }
</style>
