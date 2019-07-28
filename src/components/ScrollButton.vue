<script>/*!
 * Аквариус
 * File: ScrollButton.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

export default {
    name: 'ScrollButton',
};
</script>

<template>
    <button class="scroll-button" type="button" @click="$emit('click')">
        <span class="scroll-button__iconbox">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g fill="currentColor">
                    <path d="M256.4,512L124.7,372.8l42.7-40.3l88.9,94l88.4-94l42.7,40.2L256.4,512z M256.1,0c-16.1,0-29.3,13.2-29.3,29.3 s13.2,29.3,29.3,29.3s29.3-13.2,29.3-29.3S272.2,0,256.1,0z M256.1,117.3c-16.1,0-29.3,13.2-29.3,29.3s13.2,29.3,29.3,29.3 s29.3-13.2,29.3-29.3S272.2,117.3,256.1,117.3z M256.1,234.7c-16.1,0-29.3,13.2-29.3,29.3s13.2,29.3,29.3,29.3s29.3-13.2,29.3-29.3 S272.2,234.7,256.1,234.7z"></path>
                </g>
            </svg>
        </span>
    </button>
</template>

<style lang="scss" src="../assets/scss/components/ScrollButton.scss"></style>
