<script>/*!
 * Аквариус
 * File: RoomList.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import RoomListButton from '@/components/RoomListButton';


export default {
    name: 'RoomList',

    components: {
        RoomListButton,
    },

    props: {
        items : Array,
        active: Number,
    },

    methods: {
        onChange(index) {
            this.$emit('change', index);
        },
    },
};
</script>

<template>
    <div class="room-list">
        <div
            class="room-list__item"
            v-for="(item, index) in items" :key="index"
            @click="onChange(index)"
        >
            <RoomListButton
                :title="item.title"
                :color="item.color"
                :is-active="index===active"
                :is-complete="item.complete"
            ></RoomListButton>
        </div>
    </div>
</template>

<style lang="scss" src="../assets/scss/components/RoomList.scss"></style>
