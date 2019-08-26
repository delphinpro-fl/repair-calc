<script>/*!
 * Аквариус
 * File: ResultCostItem.vue
 * © 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import ToggleButton from '@/components/ToggleButton';


export default {
    name: 'ResultCostItem',

    components: {
        ToggleButton,
    },

    props: {
        title : { type: String, default: '' },
        price : { type: Number, default: 0 },
        items : { type: Array, default: null },
        groups: { type: Array, default: null },
        color: { type: String, default: '#fff' },
    },

    data: () => ({
        isOpenDetails: false,
    }),

    methods: {
        toggleState() {
            this.isOpenDetails = !this.isOpenDetails;
        },
    },
};
</script>

<template>
    <div class="result-cost-item">
        <div class="result-cost-item__header">
            <div class="result-cost-item__dot-indicator">
                <i class="result-cost-item__dot dot" :style="{color}"></i>
            </div>
            <div class="result-cost-item__title">{{ title }}</div>
            <!--<div class="result-cost-item__duration">15 дней</div>-->
            <div class="result-cost-item__cost">{{price.fmt()}} ₽</div>
            <div class="result-cost-item__button">
                <ToggleButton
                    v-if="items || groups"
                    :is-open="isOpenDetails"
                    @click="toggleState"
                ></ToggleButton>
            </div>
        </div>
        <div class="result-cost-item__body" v-if="items && isOpenDetails">
            <div class="result-table">
                <div class="result-table__row" v-for="item in items">
                    <span>{{item.title}}</span>
                    <span>{{item.qty.value.toFixed()}} {{item.qty.dimension}}</span>
                    <span>&times;</span>
                    <span>{{item.price}} ₽</span>
                    <span>{{item.cost.fmt()}} ₽</span>
                </div>
                <div class="result-table__total" v-if="price">
                    <span>Итого:</span>
                    <span>{{price.fmt()}} ₽</span>
                </div>
            </div>
        </div>
        <div class="result-cost-item__body" v-if="groups && isOpenDetails">
            <div class="result-table">
                <template v-for="group in groups">
                    <div class="result-table__row result-table__header">
                        <span>{{group.title}}</span>
                    </div>
                    <div class="result-table__row" v-for="item in group.items">
                        <span>{{item.title}}</span>
                        <span>{{item.qty.value.toFixed()}} {{item.qty.dimension}}</span>
                        <span>&times;</span>
                        <span>{{item.price}} ₽</span>
                        <span>{{item.cost.fmt()}} ₽</span>
                    </div>
                </template>
                <div class="result-table__total" v-if="price">
                    <span>Итого:</span>
                    <span>{{price.fmt()}} ₽</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="../assets/scss/components/ResultCostItem.scss"></style>
