<script>/*!
 * Аквариус
 * File: AppHeader.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import BurgerButton from '@/components/BurgerButton';
import AppLogo      from '@/components/App/AppLogo';
import StepProgress from '@/components/StepProgress';


export default {
    name: 'AppHeader',

    props: {
        dark: Boolean,
    },

    components: {
        AppLogo,
        BurgerButton,
        StepProgress,
    },
};
</script>

<template>
    <div class="header" :class="{header_dark: dark}">
        <div class="header__container container">
            <div class="header__logo">
                <AppLogo :text="$store.state.logoText"></AppLogo>
            </div>
            <div class="header__menu">
                <StepProgress
                    :step-index="$store.state.stepIndex"
                    :steps="$store.state.steps"
                ></StepProgress>
            </div>
            <div class="header__button">
                <BurgerButton aria-label="Открыть меню"></BurgerButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="../../assets/scss/components/AppHeader.scss"></style>
