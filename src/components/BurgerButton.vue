<script>/*!
 * Аквариус
 * File: BurgerButton.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

export default {
    name: 'BurgerButton',

    methods: {
        toggleMenu() {
            this.$store.commit('mainmenuToggle');
        },
    },
};
</script>

<template>
    <button
        class="burger-button"
        :class="{'burger-button_close':$store.state.isOpenMainMenu}"
        type="button"
        @click="toggleMenu()"
    >
        <span class="burger-button__box">
            <span class="burger-button__line burger-button__line_top"></span>
            <span class="burger-button__line burger-button__line_btm"></span>
        </span>
    </button>
</template>

<style lang="scss" src="../assets/scss/components/BurgerButton.scss"></style>
