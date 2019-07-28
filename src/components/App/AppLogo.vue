<script>/*!
 * Аквариус
 * File: AppLogo.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

export default {
    name: 'AppLogo',

    props: {
        text: String,
    },
};
</script>

<template>
    <div class="app-logo">
        <a class="app-logo__link" href="/">
            <img class="app-logo__image" src="../../assets/images/logo.png" alt="Аквариус логотип">
        </a>
        <div class="app-logo__text" v-html="text" v-if="text"></div>
    </div>
</template>

<style lang="scss" src="../../assets/scss/components/AppLogo.scss"></style>
