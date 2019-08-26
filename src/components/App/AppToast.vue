<script>/*!
 * Аквариус
 * File: AppToast.vue
 * © 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

export default {
    name: 'AppToast',

    props: {
        msg: { type: String, default: '' },
    },

    methods: {
        hideMe() {
            this.$store.commit('hideToast');
        },
    },
};
</script>

<template>
    <div class="toast" :class="{show: !!msg}" v-html="msg" @click="hideMe"></div>
</template>

<style lang="scss" src="../../assets/scss/components/AppToast.scss"></style>
