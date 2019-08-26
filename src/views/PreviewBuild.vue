<script>/*!
 * Аквариус
 * File: SelectRooms.vue
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import RoomList              from '@/components/RoomList';
import RoomParams            from '@/components/RoomParams';
import ScrollButton          from '@/components/ScrollButton';
import NextRoomButton        from '@/components/NextRoomButton';
import { colors }            from '@/library/colors';
import { checkCompleteRoom } from '@/library/functions';


const wallsHeight = 3;
function wallsArea(area) { return 4.75 * wallsHeight * Math.sqrt(area); }

export default {
    name: 'PreviewBuild',

    components: {
        RoomList,
        RoomParams,
        ScrollButton,
        NextRoomButton,
    },

    data: () => ({
        windowHeight: window.innerHeight,
        tm          : null,

        activeRoomIndex: 0,
        roomList       : [],

        colorIndex: 0, // используется при создании комнат
    }),

    computed: {
        styles() { return { minHeight: this.windowHeight + 'px' }; },
        currentColor() { return this.roomList.length ? this.roomList[this.activeRoomIndex].color : null; },
        activeRoom() { return this.roomList[this.activeRoomIndex]; },
        isLastRoom() { return this.activeRoomIndex === this.roomList.length - 1; },
        isCompleteActiveRoom() { return checkCompleteRoom(this.activeRoom); },
        isCompleteAllRooms() {
            let complete = true;
            for (let i = 0; i < this.roomList.length; i++) {
                if (!checkCompleteRoom(this.roomList[i])) {
                    complete = false;
                    break;
                }
            }
            return complete;
        },

        previewCeiling() {
            if (this.roomList.length <= this.activeRoomIndex) return '';
            let view = `ceiling-${this.activeRoom.params.ceiling}`;
            return `/design/img/views/${this.activeRoom.type}/${view}.png`;
        },
        previewWall() {
            if (this.roomList.length <= this.activeRoomIndex) return '';
            let { params } = this.activeRoom;
            let view       = `wall-${params['wall']}`;

            // Дополнительные опции
            if (params['towelDryer'] || params['waterHeater']) {
                view += `-${+params['towelDryer']}`;
                view += `${+params['waterHeater']}`;
            }

            return `/design/img/views/${this.activeRoom.type}/${view}.jpg`;
        },
        previewGround() {
            if (this.roomList.length <= this.activeRoomIndex) return '';
            let view = `ground-${this.activeRoom.params.floor}`;
            return `/design/img/views/${this.activeRoom.type}/${view}.png`;
        },
    },

    mounted() {
        this.$store.commit('switchScreen', 2);
        this.$store.commit('updateHeaderDark', false);
        this.makeRooms();
        window.addEventListener('resize', this.onResize.bind(this));
    },

    methods: {
        onResize() {
            clearTimeout(this.tm);
            this.tm = setTimeout(() => this.windowHeight = window.innerHeight, 300);
        },
        onScroll(data) {
            if (this.$store.state.headerDark !== (data.top !== 0)) {
                this.$store.commit('updateHeaderDark', data.top !== 0);
            }
        },

        makeRooms() {
            this.activeRoomIndex = 0;
            this.roomList        = [];
            if (this.$store.state.objects.room > 0) {
                this.makeRoom('room', this.$store.state.objects.room);
            }
            if (this.$store.state.objects.hall > 0) {
                this.makeRoom('hall', this.$store.state.objects.hall);
            }
            if (this.$store.state.objects.kitchen > 0) {
                this.makeRoom('kitchen', this.$store.state.objects.kitchen);
            }
            if (this.$store.state.objects.isCombinedBathroom) {
                if (this.$store.state.objects.combinedBathroom > 0) {
                    this.makeRoom('combinedBathroom', this.$store.state.objects.combinedBathroom);
                }
            } else {
                if (this.$store.state.objects.restroom > 0) {
                    this.makeRoom('restroom', this.$store.state.objects.restroom);
                }
                if (this.$store.state.objects.bathroom > 0) {
                    this.makeRoom('bathroom', this.$store.state.objects.bathroom);
                }
            }

            this.makePlumbings();
        },
        makeRoom(type, count) {
            for (let i = 0; i < count; i++) {
                let params = {};
                this.$store.state.types[type].params.forEach(param => {
                    if (param.type !== 'divider' && param.type !== 'title') {
                        let initialValue = ('defaultValue' in param) ? param.defaultValue : 0;
                        this.$set(params, param.name, initialValue);
                    }
                });

                let title = count > 1
                    ? `${this.$store.state.types[type].title} ${i + 1}`
                    : this.$store.state.types[type].title;

                let color = colors[(this.colorIndex++ % colors.length)];

                let value = {
                    type,
                    title,
                    color,
                    complete : false,
                    wallsArea: wallsArea(params.area),
                    params,
                };

                value.complete = checkCompleteRoom(value);

                this.roomList.push(value);
            }
        },
        makePlumbings() {
            const hasToilet        = val => val.type === 'restroom' || val.type === 'combinedBathroom';
            const hasBath          = val => val.type === 'bathroom' || val.type === 'combinedBathroom';
            const hasBathOrKitchen = val => hasBath(val) || val.type === 'kitchen';

            // Считаем минимальную сантехнику
            let params = {
                toilet        : this.roomList.reduce((acc, val) => hasToilet(val) ? acc + 1 : acc, 0),
                vanna         : this.roomList.reduce((acc, val) => hasBath(val) ? acc + 1 : acc, 0),
                shower        : this.roomList.reduce((acc, val) => hasBath(val) ? acc + 1 : acc, 0),
                rakovina      : this.roomList.reduce((acc, val) => hasBathOrKitchen(val) ? acc + 1 : acc, 0),
                washingMachine: 1,
                machine       : 0,
            };

            let color = colors[(this.colorIndex++ % colors.length)];

            let value = {
                type    : 'plumbing',
                title   : this.$store.state.types.plumbing.title,
                color,
                complete: true,
                params,
            };

            this.roomList.push(value);
        },

        onChangeParam(name, value) {
            this.$set(this.roomList[this.activeRoomIndex].params, name, value);
            let complete = checkCompleteRoom(this.activeRoom);
            this.$set(this.roomList[this.activeRoomIndex], 'complete', complete);
        },

        changeActiveRoom(newIndex) {
            // console.log(newIndex);
            // if (checkCompleteRoom(this.roomList[newIndex])) {
            this.activeRoomIndex = newIndex;
            // }
        },

        nextRoom() {
            this.activeRoomIndex = Math.min(this.activeRoomIndex + 1, this.roomList.length - 1);
        },

        nextScreen() {
            this.roomList = this.roomList.map(room => {
                if ('wallsArea' in room) {
                    room.wallsArea = wallsArea(room.params.area);
                }
                return room;
            });
            this.$store.commit('updateRoomList', this.roomList);
            this.$router.push({ name: 'step3' });
        },
    },
};
</script>

<template>
    <div class="preview-build">
        <VueScrollbar class="vue-scrollbar" :onScroll="onScroll">
            <div class="preview-build__container container" :style="styles">
                <div class="preview-build__workarea  rooms-definition">

                    <div class="preview-build__column preview-build__column_list">
                        <div class="preview-build__title">Комнаты</div>
                        <RoomList
                            :items="roomList"
                            :active="activeRoomIndex"
                            @change="changeActiveRoom"
                        ></RoomList>
                    </div>

                    <div class="preview-build__column preview-build__column_main">
                        <div class="preview-box" :style="{borderColor:currentColor}">
                            <img class="preview" :src="previewWall" alt="">
                            <img class="preview" :src="previewCeiling" alt="">
                            <img class="preview" :src="previewGround" alt="">
                        </div>

                        <div class="preview-build__next" v-if="isCompleteActiveRoom && !isLastRoom">
                            <NextRoomButton :color="currentColor" @click="nextRoom"/>
                        </div>
                        <div class="preview-build__button" v-if="isCompleteAllRooms && isLastRoom">
                            <ScrollButton aria-label="Продолжить" @click="nextScreen"/>
                        </div>

<!--
                        <pre>
{{previewWall}}
{{previewCeiling}}
{{previewGround}}
</pre>
                        <pre>Room definition [{{activeRoomIndex}}]: {{roomList[activeRoomIndex]}}</pre>
-->
                    </div>

                    <div class="preview-build__column preview-build__column_params">
                        <RoomParams
                            class="preview-build__param-list"
                            :types="$store.state.types"
                            :type="roomList[activeRoomIndex].type"
                            :params="roomList[activeRoomIndex].params"
                            v-if="roomList.length"
                            @change="onChangeParam"
                        ></RoomParams>
                    </div>
                </div>
            </div>
        </VueScrollbar>
    </div>
</template>

<style lang="scss" src="../assets/scss/components/PreviewBuild.scss"></style>
