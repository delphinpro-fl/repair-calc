<script>/*!
 * Аквариус
 * File: DropdownList.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import { EVENT_CLICK_OUTSIDE } from '@/library/constants';


export default {
    name : 'DropdownList',
    props: {
        params: Object,
        param : Object,

        gutter  : { type: Number, default: 0 },
        speed   : { type: Number, default: 300 },
        offsetY : { type: Number, default: 2 },
        offsetX : { type: Number, default: 2 },
        maxDepth: { type: Number, default: 3 },
        easing  : { type: String, default: 'ease' },
    },

    data: () => ({
        ready     : false,
        baseZIndex: 1000,
        isActive  : false, // приоткрыта плашка
        isOpen    : false, // открыт список
    }),

    computed: {
        size() {
            return {
                width : this.$el.clientWidth,
                height: this.$el.clientHeight,
            };
        },

        placeholderStyles() {
            return {
                zIndex: this.baseZIndex + 1 + this.param.options.length,
            };
        },

        selectedText() {
            let val = this.params[this.param.name];
            if (val === -1) return 'Не выбрано';
            let selectedOption = this.param.options.find(item => item.value === val);
            if (selectedOption) {
                return selectedOption.title;
            }
            return `Error (${val})`;
        },
    },

    mounted() {
        this.$nextTick(() => this.ready = true);
        this.$bus.$on(EVENT_CLICK_OUTSIDE, this.onClickOutside);
    },

    beforeDestroy() {
        this.$bus.$off(EVENT_CLICK_OUTSIDE, this.onClickOutside);
    },

    methods: {
        onClickOutside(e) {
            if (e !== this._uid) {
                this.closeDropdown();
            }
        },

        isSelected(index) {
            let val = this.params[this.param.name];
            return val === index;
        },

        optionStyles(index) {
            let idx = index <= (this.maxDepth - 1) ? index : (this.maxDepth - 1);

            let top = this.isOpen
                ? (this.size.height * (index + 1))
                : (this.offsetY * (idx + 1));

            let width = this.isOpen
                ? (this.size.width)
                : (this.size.width - this.offsetX * (idx + 1) * 2);

            return {
                zIndex    : (this.baseZIndex) + (this.param.options.length - index),
                top       : top + 'px',
                marginLeft: this.isOpen ? 0 : (this.offsetX * (idx + 1)) + 'px',
                width     : width + 'px',
                transition: `all ${this.speed}ms ${this.easing}`,
            };
        },

        openDropdown() {
            this.isOpen = true;
            let h       = (this.param.options.length + 1) * (this.size.height + this.gutter);

            this.$refs.list.style.height = h + 'px';
            this.$bus.$emit(EVENT_CLICK_OUTSIDE, this._uid);
        },

        closeDropdown() {
            this.isOpen = false;

            this.$refs.list.style.height = '';
        },

        toggleDropdown() {
            if (this.isOpen) {
                this.closeDropdown();
            } else {
                this.openDropdown();
            }
        },

        pickOption(index) {
            this.closeDropdown();
            this.$emit('change', index);
        },
    },
};
</script>

<template>
    <div
        class="x-select"
        :class="{isOpen,isActive}"
        :style="{zIndex:isOpen?baseZIndex+1:baseZIndex}"
    >
        <span
            class="x-select__placeholder"
            :style="placeholderStyles"
            @click.stop="toggleDropdown"
        ><span class="x-select__heading"><span v-text="selectedText"></span><i></i></span></span>

        <ul
            class="x-select__dropdown"
            v-if="ready"
            ref="list"
        >
            <li
                class="x-select__item"
                v-for="(opt, index) in param.options"
                :class="{isCurrent:isSelected(opt.value)}"
                :data-value="opt.value"
                :style="optionStyles(index)"
                @click="pickOption(opt.value, opt.title)"
            ><span class="x-select__title" v-text="opt.title"></span></li>
        </ul>
    </div>
</template>

<style lang="scss" src="../assets/scss/components/DropdownList.scss"></style>
