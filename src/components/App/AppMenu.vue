<script>/*!
 * Аквариус
 * File: AppMenu.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import BurgerButton  from '@/components/BurgerButton';
import MainMenu      from '@/components/MainMenu';
import IconInstagram from '@/components/Icon/IconInstagram';


export default {
    name: 'AppMenu',

    components: {
        IconInstagram,
        BurgerButton,
        MainMenu,
    },

    data: () => ({}),

    computed: {
        isOpen() {
            return this.$store.state.isOpenMainMenu;
        },
    },

};
</script>

<template>
    <div class="app-menu" :class="{'app-menu_state_open':isOpen}">
        <div class="app-menu__header">
            <div class="app-menu__title">Меню</div>
            <div class="app-menu__close">
                <BurgerButton aria-label="Закрыть меню"></BurgerButton>
            </div>
        </div>
        <VueScrollbar class="app-menu__body vue-scrollbar">
            <div class="app-menu__content">
                <div class="app-menu__phone">
                    <a :href="$store.getters.telephoneAsLink">{{$store.state.telephone}}</a>
                </div>
                <MainMenu class="app-menu__items"></MainMenu>
                <div class="app-menu__footer">
                    <div class="app-menu__soc" v-if="$store.state.instagram">
                        <a :href="$store.state.instagram">
                            <span>Наш instagram</span>
                            <i>
                                <IconInstagram></IconInstagram>
                            </i>
                        </a>
                    </div>
                    <div class="app-menu__info">
                        <div v-html="$store.state.companyInfo" v-if="$store.state.companyInfo"></div>
                        <p v-if="$store.state.privacyPolicy">
                            <a :href="$store.state.privacyPolicy">Положение о конфиденциальности</a>
                        </p>
                        <p v-if="$store.state.termOfUse">
                            <a :href="$store.state.termOfUse">Условия использования</a>
                        </p>
                    </div>
                </div>
            </div>
        </VueScrollbar>
    </div>
</template>

<style lang="scss" src="../../assets/scss/components/AppMenu.scss"></style>
