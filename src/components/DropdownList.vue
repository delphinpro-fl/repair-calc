<script>/*!
 * Аквариус
 * File: DropdownList.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

export default {
    name: 'DropdownList',
    props: {
        params: Object,
        param: Object,

        gutter: { type: Number, default: 0 },
        speed: { type: Number, default: 300 },
        offsetY: { type: Number, default: 2 },
        offsetX: { type: Number, default: 2 },
        maxDepth: { type: Number, default: 3 },
        easing: { type: String, default: 'ease' },
    },

    data: () => ({
        ready: false,
        baseZIndex: 1000,
        isActive: false, // приоткрыта плашка
        isOpen: false, // открыт список
    }),

    computed: {
        size() {
            return {
                width: this.$el.clientWidth,
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
            return val === -1 ? 'Не выбрано' : this.param.options[val].title;
        },
    },

    mounted() {
        this.$nextTick(() => this.ready = true);
    },

    methods: {
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
                zIndex: (this.baseZIndex) + (this.param.options.length - index),
                top: top + 'px',
                marginLeft: this.isOpen ? 0 : (this.offsetX * (idx + 1)) + 'px',
                width: width + 'px',
                transition: `all ${this.speed}ms ${this.easing}`,
            };
        },

        openDropdown() {
            this.isOpen = true;

            let h = (this.param.options.length + 1) * (this.size.height + this.gutter);
            this.$refs.list.style.height = h + 'px';
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
            @click="toggleDropdown"
        ><span class="x-select__heading"><span v-text="selectedText"></span><i></i></span></span>

        <ul
            v-if="ready"
            class="x-select__dropdown"
            ref="list"
        >
            <li
                v-for="(opt, index) in param.options"
                class="x-select__item"
                :class="{isCurrent:isSelected(index)}"
                :data-value="index"
                :style="optionStyles(index)"
                @click="pickOption(index, opt.title)"
            ><span class="x-select__title" v-text="opt.title"></span></li>
        </ul>
    </div>
</template>

<style lang="scss" src="../assets/scss/components/DropdownList.scss"></style>
