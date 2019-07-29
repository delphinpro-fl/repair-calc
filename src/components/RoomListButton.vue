<script>/*!
 * Аквариус
 * File: RoomListButton.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import IconCheck from '@/components/Icon/IconCheck';


export default {
    name: 'RoomListButton',

    props: {
        isActive  : Boolean,
        isComplete: Boolean,
        title     : String,
        color     : String,
    },

    components: {
        IconCheck,
    },
};
</script>

<template>
    <button class="room-list-button" :class="{isActive}" type="button">
        <span class="dot" :class="{isComplete}" :style="{color}">
            <IconCheck/>
        </span>
        <span v-text="title"></span>
    </button>
</template>

<style lang="scss" src="../assets/scss/components/RoomListButton.scss"></style>
