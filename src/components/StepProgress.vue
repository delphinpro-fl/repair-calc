<script>/*!
 * Аквариус
 * File: StepProgress.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import IconCheck from '@/components/Icon/IconCheck';


export default {
    name: 'StepProgress',

    components: {
        IconCheck,
    },

    props: {
        stepIndex: Number,
        steps    : Array,
    },

    data: () => ({}),

    methods: {
        itemClasses(index) {
            return {
                'step-progress__item_active'  : index === this.stepIndex,
                'step-progress__item_complete': index < this.stepIndex,
            };
        },

        onClick(index) {
            if (index < this.stepIndex) {
                this.$emit('change', index);
            }
        },
    },
};
</script>

<template>
    <nav class="step-progress">
        <ul class="step-progress__list">
            <li class="step-progress__item"
                v-for="(step, index) in steps"
                :class="itemClasses(index)"
                @click="onClick(index)"
            >
                <span class="step-progress__index">
                    <span>{{index + 1}}</span>
                    <IconCheck/>
                </span>
                <span class="step-progress__title">{{step.title}}</span>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" src="../assets/scss/components/StepProgress.scss"></style>
