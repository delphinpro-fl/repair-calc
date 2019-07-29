<script>/*!
 * Аквариус
 * File: NextRoomButton.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

export default {
    name: 'NextRoomButton',

    props: {
        color: String,
    },
};
</script>

<template>
    <button
        class="next-room-button"
        :style="{color}"
        @click="$emit('click', $event)"
    ><span class="next-room-button__text">Перейти к следующей комнате</span></button>
</template>

<style lang="scss" src="../assets/scss/components/NextRoomButton.scss"></style>
