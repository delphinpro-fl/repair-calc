<script>/*!
 * Аквариус
 * File: ToggleButton.vue
 * © 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import IconAngle from '@/components/Icon/IconAngle';


export default {
    name: 'ToggleButton',

    components: {
        IconAngle,
    },

    props: {
        isOpen: { type: Boolean, default: false },
    },

    computed: {
        vectorIcon() {
            return this.isOpen ? 'bottom' : 'right';
        },
    },
};
</script>

<template>
    <button class="toggle-button" @click="$emit('click', $event)">
        <IconAngle class="toggle-button__icon" :vector="vectorIcon"/>
    </button>
</template>

<style lang="scss" src="../assets/scss/components/ToggleButton.scss"></style>
