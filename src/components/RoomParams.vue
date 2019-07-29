<script>/*!
 * Аквариус
 * File: RoomParams.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import IosSwitch    from '@/components/IosSwitch';
import SpinControl  from '@/components/SpinControl';
import DropdownList from '@/components/DropdownList';


export default {
    name: 'RoomParams',

    components: {
        IosSwitch,
        SpinControl,
        DropdownList,
    },

    props: {
        types : Object,
        type  : String,
        params: Object,
    },

    data: () => ({
        incId: 1,
    }),

    computed: {
        paramList() { return this.types[this.type].params; },
    },

    methods: {
        getId(index) { return 'id-room-param-' + index; },

        onChangeInput(val, name) { this.$emit('change', name, Math.abs(val)); },
        onChangeSelect(val, name) { this.$emit('change', name, +val); },
        onChangeCheckbox(name, value) { this.$emit('change', name, value); },
    },
};
</script>

<template>
    <div class="room-params">
        <template class="room-params__item" v-for="(param, index) in paramList">

            <div class="room-param-divider" v-if="param.type==='divider'" :key="index"></div>

            <div class="room-param" v-else-if="param.type==='title'" :key="index">
                <div class="room-param__title" v-text="param.title"></div>
            </div>

            <div class="room-param room-param_type_text" v-else-if="param.type==='text'" :key="index">
                <div class="room-param__title" v-text="param.title"></div>
                <div class="room-param__control">
                    <input
                        type="number"
                        :value="params[param.name]"
                        @input="onChangeInput(+$event.target.value, param.name)"
                    >
                </div>
                <div class="room-param__title">м²</div>
            </div>

            <div class="room-param room-param_type_spin" v-else-if="param.type==='spin'" :key="index">
                <div class="room-param__title" v-text="param.title"></div>
                <div class="room-param__control">
                    <SpinControl
                        :value="params[param.name]"
                        :min="0"
                        @input="onChangeInput($event, param.name)"
                    ></SpinControl>
                </div>
            </div>

            <div class="room-param room-param_type_dropdown" v-else-if="param.type==='dropdown'" :key="index">
                <div class="room-param__title" v-text="param.title"></div>
                <div class="room-param__control">
                    <DropdownList
                        :param="param"
                        :params="params"
                        :offset-x="1"
                        @change="onChangeSelect($event, param.name)"
                    ></DropdownList>
                </div>
            </div>

            <div class="room-param room-param_type_checkbox" v-else-if="param.type==='checkbox'" :key="index">
                <label class="room-param__title" v-text="param.title" :for="getId(index)"></label>
                <div class="room-param__control">
                    <IosSwitch
                        theme="green"
                        size="small"
                        :id="getId(index)"
                        :value="params[param.name]"
                        @input="onChangeCheckbox(param.name, $event)"
                    ></IosSwitch>
                </div>
            </div>

        </template>
    </div>
</template>

<style lang="scss" src="../assets/scss/components/RoomParams.scss"></style>
