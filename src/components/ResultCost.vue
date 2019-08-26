<script>/*!
 * Аквариус
 * File: ResultCost.vue
 * © 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

import Tabs           from '@/components/Tabs';
import ResultCostItem from '@/components/ResultCostItem';
import {
    CEILING_DRYWALL,
    CEILING_PAINTING,
    CEILING_STRETCH_1L,
    CEILING_STRETCH_2L,
    FLOOR_LAMINATE,
    FLOOR_MASSIVE_BOARD,
    FLOOR_PARQUET,
    FLOOR_TILE,
    WALLS_PAINTING,
    WALLS_PLASTER,
    WALLS_TILE,
    WALLS_WALLPAPER,
}                     from '@/library/constants';
import { mapGetters } from 'vuex';
import { colors }     from '@/library/colors';


export default {
    name: 'ResultCost',

    components: {
        Tabs,
        ResultCostItem,
    },

    data: () => ({
        activeTab: 0,

        settings: {
            wallsHeight  : 3,
            designProject: [
                { from: 0, coefficient: 2000 },
                { from: 50, coefficient: 1600 },
                { from: 150, coefficient: 1450 },
            ],
            dismantling  : { coefficient: 950 },
            roughWorks   : {
                walls: { price: 900, dimension: 'м²' },
                floor: { price: 560, dimension: 'м²' },
            },
            finishWorks  : {
                floor  : {
                    tile        : {
                        title    : 'Монтаж керамической плитки',
                        price    : 950,
                        dimension: 'м²',
                    },
                    laminate    : {
                        title    : 'Укладка ламината',
                        price    : 450,
                        dimension: 'м²',
                    },
                    parquet     : {
                        title    : 'Укладка паркетной доски на подложку',
                        price    : 650,
                        dimension: 'м²',
                    },
                    massiveBoard: {
                        title    : 'Укладка массивной/инженерной доски на клей',
                        price    : 850,
                        dimension: 'м²',
                    },
                },
                walls  : {
                    wallpaper: {
                        title    : 'Поклейка обоев',
                        price    : 280,
                        dimension: 'м²',
                    },
                    painting : {
                        title    : 'Окрашивание стен водоэмульсионной краской в два слоя (оклеивание стеклохолстом, шпаклевание Шитрок в два слоя)',
                        price    : 570,
                        dimension: 'м²',
                    },
                    plaster  : {
                        title    : 'Декоративная штукатурка  (оклеивание стеклохолстом, шпаклевание Шитрок в два слоя)',
                        price    : 1260,
                        dimension: 'м²',
                    },
                    tile     : {
                        title    : 'Монтаж керамической плитки',
                        price    : 1100,
                        dimension: 'м²',
                    },
                },
                ceiling: {
                    drywall : {
                        title    : 'Гипсокартон',
                        price    : 1720,
                        dimension: 'м²',
                    },
                    stretch1: {
                        title    : 'Натяжной в один уровень',
                        price    : 900,
                        dimension: 'м²',
                    },
                    stretch2: {
                        title    : 'Натяжной многоуровневый',
                        price    : 1850,
                        dimension: 'м²',
                    },
                    painting: {
                        title    : 'Покраска',
                        price    : 1100,
                        dimension: 'м²',
                    },
                },
            },
            cleaning     : { price: 4500 },
            electric     : { price: 1650 },
            plumbing     : { price: 8500 },
            options      : {
                floorWarm           : { price: 350, dimension: 'м²', title: 'Устройство теплого пола' },
                floorSoundproofing  : { price: 550, dimension: 'м²', title: 'Звукоизоляция пола' },
                walling             : { price: 775, dimension: 'м²', title: 'Возведение внутренних стен' },
                wallSoundproofing   : { price: 650, dimension: 'м²', title: 'Звукоизоляция стен' },
                ceilingSoundproofing: { price: 850, dimension: 'м²', title: 'Звукоизоляция потолка' },
                radiatorReplacement : { price: 2500, dimension: 'шт', title: 'Замена радиаторов' },
                airConditioner      : { price: 11000, dimension: 'шт', title: 'Установка кондиционера' },
                towelDryer          : { price: 3500, dimension: 'шт', title: 'Замена полотенцесушителя' },
                toiletReplacement   : { price: 4000, dimension: 'шт', title: 'Замена напольного унитаза на подвесной' },
                shower              : { price: 1500, dimension: 'шт', title: 'Гигиениический душ' },
                protect             : { price: 5000, dimension: 'шт', title: 'Система защиты от протечек' },
                waterHeater         : { price: 3000, dimension: 'шт', title: 'Проточный водонагреватель' },
            },
        },
    }),

    computed: {
        ...mapGetters([
            'roomList',
        ]),
        room() { return this.roomList[this.activeTab - 1]; },
        shownAll() { return this.activeTab === 0; },
        costItems() {
            let result = [];
            if (this.$store.state.designProject && this.shownAll) {
                result.push({
                    key  : 1,
                    color: colors[0],
                    title: 'Дизайн проект ремонта',
                    price: this.costDesignProject,
                });
            }
            if (this.$store.state.apartments === 2 && this.shownAll) {
                result.push({
                    key  : 2,
                    color: colors[1],
                    title: 'Демонтажные работы',
                    price: this.costDismantling,
                });
            }

            let wallsArea = 0;
            if (this.shownAll) {
                wallsArea = this.totalWallsArea;
            } else if ('wallsArea' in this.room) {
                wallsArea = this.room.wallsArea;
            }

            let area = 0;
            if (this.shownAll) {
                area = this.totalArea;
            } else if ('params' in this.room && 'area' in this.room.params) {
                area = this.room.params.area;
            }

            let costRoughWorks = (this.settings.roughWorks.walls.price * wallsArea)
                + (this.settings.roughWorks.floor.price * area);

            if (costRoughWorks) {
                result.push({
                    key  : 3,
                    color: colors[2],
                    title: 'Черновые работы',
                    price: costRoughWorks,
                    items: [
                        {
                            title: 'Оштукатуривание, шпаклевание, грунтование стен',
                            price: this.settings.roughWorks.walls.price,
                            qty  : { value: wallsArea, dimension: this.settings.roughWorks.walls.dimension },
                            cost : this.settings.roughWorks.walls.price * wallsArea,
                        },
                        {
                            title: 'Полы (грунтование, стяжка пола)',
                            price: this.settings.roughWorks.floor.price,
                            qty  : { value: area, dimension: this.settings.roughWorks.floor.dimension },
                            cost : this.settings.roughWorks.floor.price * area,
                        },
                    ],
                });
            }

            let finishWorksWallsItems = [];
            let costWallsWallpaper    = this.calcCostFinishWorksWalls(WALLS_WALLPAPER);
            let costWallsPainting     = this.calcCostFinishWorksWalls(WALLS_PAINTING);
            let costWallsPlaster      = this.calcCostFinishWorksWalls(WALLS_PLASTER);
            let costWallsTile         = this.calcCostFinishWorksWalls(WALLS_TILE);
            if (costWallsWallpaper.cost) finishWorksWallsItems.push(costWallsWallpaper);
            if (costWallsPainting.cost) finishWorksWallsItems.push(costWallsPainting);
            if (costWallsPlaster.cost) finishWorksWallsItems.push(costWallsPlaster);
            if (costWallsTile.cost) finishWorksWallsItems.push(costWallsTile);

            let finishWorksFloorItems = [];
            let costFloorTile         = this.calcCostFinishWorksFloor(FLOOR_TILE);
            let costFloorLaminate     = this.calcCostFinishWorksFloor(FLOOR_LAMINATE);
            let costFloorParquet      = this.calcCostFinishWorksFloor(FLOOR_PARQUET);
            let costFloorMassiveBoard = this.calcCostFinishWorksFloor(FLOOR_MASSIVE_BOARD);
            if (costFloorTile.cost) finishWorksFloorItems.push(costFloorTile);
            if (costFloorLaminate.cost) finishWorksFloorItems.push(costFloorLaminate);
            if (costFloorParquet.cost) finishWorksFloorItems.push(costFloorParquet);
            if (costFloorMassiveBoard.cost) finishWorksFloorItems.push(costFloorMassiveBoard);

            let finishWorksCeilingItems = [];
            let costCeilingDrywall      = this.calcCostFinishWorksCeiling(CEILING_DRYWALL);
            let costCeilingStretch1     = this.calcCostFinishWorksCeiling(CEILING_STRETCH_1L);
            let costCeilingStretch2     = this.calcCostFinishWorksCeiling(CEILING_STRETCH_2L);
            let costCeilingPainting     = this.calcCostFinishWorksCeiling(CEILING_PAINTING);
            if (costCeilingDrywall.cost) finishWorksCeilingItems.push(costCeilingDrywall);
            if (costCeilingStretch1.cost) finishWorksCeilingItems.push(costCeilingStretch1);
            if (costCeilingStretch2.cost) finishWorksCeilingItems.push(costCeilingStretch2);
            if (costCeilingPainting.cost) finishWorksCeilingItems.push(costCeilingPainting);
            let finishWorksCostTotal = 0
                + finishWorksWallsItems.reduce((acc, item) => acc + item.cost, 0)
                + finishWorksFloorItems.reduce((acc, item) => acc + item.cost, 0)
                + finishWorksCeilingItems.reduce((acc, item) => acc + item.cost, 0)
            ;

            result.push({
                key   : 4,
                color : colors[3],
                title : 'Чистовые и финишные работы',
                price : finishWorksCostTotal,
                groups: [
                    { title: 'Стены', items: finishWorksWallsItems },
                    { title: 'Пол', items: finishWorksFloorItems },
                    { title: 'Потолок', items: finishWorksCeilingItems },
                ],
            });

            if (this.costCleaning) {
                result.push({
                    key  : 5,
                    color: colors[4],
                    title: 'Черновой материал и уборка',
                    price: this.costCleaning,
                });
            }

            if (this.costElectric) {
                result.push({
                    key  : 6,
                    color: colors[5],
                    title: 'Электрика',
                    price: this.costElectric,
                });
            }

            let plumbing      = this.roomList.filter(item => item.type === 'plumbing')[0];
            let countPlumbing = Object.values(plumbing.params).reduce((acc, item) => acc + item, 0);

            if (this.shownAll) {
                result.push({
                    key  : 7,
                    color: colors[6],
                    title: 'Сантехника',
                    price: countPlumbing * this.settings.plumbing.price,
                });
            }

            let items   = [];
            let options = this.settings.options;
            if (!this.shownAll) {
                let area      = this.room.params.area;
                let wallsArea = this.room.wallsArea;
                if (this.room.params.floorWarm) items.push(this.getOpt(options.floorWarm, area));
                if (this.room.params.floorSoundproofing) items.push(this.getOpt(options.floorSoundproofing, area));
                if (this.room.params.walling) items.push(this.getOpt(options.walling, wallsArea));
                if (this.room.params.wallSoundproofing) items.push(this.getOpt(options.wallSoundproofing, wallsArea));
                if (this.room.params.ceilingSoundproofing) items.push(this.getOpt(options.ceilingSoundproofing, area));
                if (this.room.params.radiatorReplacement) items.push(this.getOpt(options.radiatorReplacement, 1));
                if (this.room.params.airConditioner) items.push(this.getOpt(options.airConditioner, 1));
                if (this.room.params.towelDryer) items.push(this.getOpt(options.towelDryer, 1));
                if (this.room.params.toiletReplacement) items.push(this.getOpt(options.toiletReplacement, 1));
                if (this.room.params.shower) items.push(this.getOpt(options.shower, 1));
                if (this.room.params.protect) items.push(this.getOpt(options.protect, 1));
                if (this.room.params.waterHeater) items.push(this.getOpt(options.waterHeater, 1));
            } else {
                let optValues = {
                    floorWarm           : 0,
                    floorSoundproofing  : 0,
                    walling             : 0,
                    wallSoundproofing   : 0,
                    ceilingSoundproofing: 0,
                    radiatorReplacement : 0,
                    airConditioner      : 0,
                    towelDryer          : 0,
                    toiletReplacement   : 0,
                    shower              : 0,
                    protect             : 0,
                    waterHeater         : 0,
                };
                this.roomList.map(room => {
                    if (room.params.floorWarm) optValues.floorWarm += room.params.area;
                    if (room.params.floorSoundproofing) optValues.floorSoundproofing += room.params.area;
                    if (room.params.walling) optValues.walling += room.wallsArea;
                    if (room.params.wallSoundproofing) optValues.wallSoundproofing += room.wallsArea;
                    if (room.params.ceilingSoundproofing) optValues.ceilingSoundproofing += room.params.area;
                    if (room.params.radiatorReplacement) optValues.radiatorReplacement += 1;
                    if (room.params.airConditioner) optValues.airConditioner += 1;
                    if (room.params.towelDryer) optValues.towelDryer += 1;
                    if (room.params.toiletReplacement) optValues.toiletReplacement += 1;
                    if (room.params.shower) optValues.shower += 1;
                    if (room.params.protect) optValues.protect += 1;
                    if (room.params.waterHeater) optValues.waterHeater += 1;
                });
                if (optValues.floorWarm) items.push(this.getOpt(options.floorWarm, optValues.floorWarm));
                if (optValues.floorSoundproofing) items.push(this.getOpt(options.floorSoundproofing, optValues.floorSoundproofing));
                if (optValues.walling) items.push(this.getOpt(options.walling, optValues.walling));
                if (optValues.wallSoundproofing) items.push(this.getOpt(options.wallSoundproofing, optValues.wallSoundproofing));
                if (optValues.ceilingSoundproofing) items.push(this.getOpt(options.ceilingSoundproofing, optValues.ceilingSoundproofing));
                if (optValues.radiatorReplacement) items.push(this.getOpt(options.radiatorReplacement, optValues.radiatorReplacement));
                if (optValues.airConditioner) items.push(this.getOpt(options.airConditioner, optValues.airConditioner));
                if (optValues.towelDryer) items.push(this.getOpt(options.towelDryer, optValues.towelDryer));
                if (optValues.toiletReplacement) items.push(this.getOpt(options.toiletReplacement, optValues.toiletReplacement));
                if (optValues.shower) items.push(this.getOpt(options.shower, optValues.shower));
                if (optValues.protect) items.push(this.getOpt(options.protect, optValues.protect));
                if (optValues.waterHeater) items.push(this.getOpt(options.waterHeater, optValues.waterHeater));
            }
            result.push({
                key  : 8,
                color: colors[7],
                title: 'Дополнительные опции',
                price: items.reduce((acc, item) => acc + item.cost, 0),
                items,
            });

            return result;
        },

        /** Общая площадь всех помещений */
        totalArea() {
            return this.roomList.reduce((p, room) => {
                let hasArea = room.params && 'area' in room.params && room.params.area;
                return hasArea ? p + room.params.area : p;
            }, 0);
        },

        totalWallsArea() {
            return this.roomList.reduce((p, room) => {
                let hasArea = room.params
                    && 'area' in room.params
                    && room.params.area
                    && 'wallsArea' in room
                    && room.wallsArea
                ;
                return hasArea ? p + room.wallsArea : p;
            }, 0);
        },

        /**
         *  Стоимость дизайн-проекта считается по формуле S (площадь помещений) * k (коэффициент)
         *  k = 2000, если суммарная площадь всех помещений меньше 50 м2
         *  k = 1600, если суммарная площадь всех помещений меньше 50-150 м2
         *  k = 1450, если суммарная площадь всех помещений больше 150 м2
         */
        costDesignProject() {
            if (!this.$store.state.designProject) return 0;

            let s = this.totalArea;
            let k = 0;
            this.settings.designProject.forEach(point => {
                if (s > point.from) k = point.coefficient;
            });

            return s * k;
        },

        /**
         *  "Новостройка" - "Демонтажные работы"  отсутствуют
         *  "Вторичное жильё" - стоимость считается по формуле: S (площадь помещений) * k (коэффициент)
         *  k = 950
         */
        costDismantling() {
            if (this.$store.state.apartments !== 2) return 0;

            let s = this.totalArea;
            let k = this.settings.dismantling.coefficient;

            return s * k;
        },

        costCleaning() {
            if (this.shownAll) {
                return this.settings.cleaning.price * this.totalArea;
            }
            if ('area' in this.room.params) {
                return this.settings.cleaning.price * this.room.params.area;
            }
        },

        costElectric() {
            if (this.shownAll) {
                return this.settings.electric.price * this.totalArea;
            }
            if ('area' in this.room.params) {
                return this.settings.electric.price * this.room.params.area;
            }
        },
    },

    methods: {
        switchTab(index) { this.activeTab = index; },
        wallsArea(area) { return 4.75 * this.wallsHeight * Math.sqrt(area); },
        calcCostFinishWorksFloor(finishVariant) {
            let area     = 0;
            let settings = {
                [FLOOR_TILE]         : this.settings.finishWorks.floor.tile,
                [FLOOR_LAMINATE]     : this.settings.finishWorks.floor.laminate,
                [FLOOR_PARQUET]      : this.settings.finishWorks.floor.parquet,
                [FLOOR_MASSIVE_BOARD]: this.settings.finishWorks.floor.massiveBoard,
            };

            if (this.shownAll) {
                area = this.roomList.reduce((acc, room) => {
                    let hasArea = room.params && 'area' in room.params && room.params.area;
                    let filter  = room.params && 'floor' in room.params && room.params.floor === finishVariant;
                    return hasArea && filter ? acc + room.params.area : acc;
                }, 0);
            } else if (this.room && this.room.params.floor === finishVariant) {
                area = this.room.params.area;
            }

            return {
                title: settings[finishVariant].title,
                price: settings[finishVariant].price,
                qty  : { value: area, dimension: settings[finishVariant].dimension },
                cost : settings[finishVariant].price * area,
            };
        },
        calcCostFinishWorksWalls(finishVariant) {
            let area     = 0;
            let settings = {
                [WALLS_WALLPAPER]: this.settings.finishWorks.walls.wallpaper,
                [WALLS_PAINTING] : this.settings.finishWorks.walls.painting,
                [WALLS_PLASTER]  : this.settings.finishWorks.walls.plaster,
                [WALLS_TILE]     : this.settings.finishWorks.walls.tile,
            };

            if (this.shownAll) {
                area = this.roomList.reduce((acc, room) => {
                    let hasArea = room.params && 'area' in room.params && room.params.area
                        && 'wallsArea' in room && room.wallsArea;

                    let filter = room.params && 'wall' in room.params && room.params.wall === finishVariant;
                    return hasArea && filter ? acc + room.wallsArea : acc;
                }, 0);
            } else if (this.room && this.room.params.wall === finishVariant && 'wallsArea' in this.room && this.room.wallsArea) {
                area = this.room.wallsArea;
            }

            return {
                title: settings[finishVariant].title,
                price: settings[finishVariant].price,
                qty  : { value: area, dimension: settings[finishVariant].dimension },
                cost : settings[finishVariant].price * area,
            };
        },
        calcCostFinishWorksCeiling(finishVariant) {
            let area     = 0;
            let settings = {
                [CEILING_DRYWALL]   : this.settings.finishWorks.ceiling.drywall,
                [CEILING_STRETCH_1L]: this.settings.finishWorks.ceiling.stretch1,
                [CEILING_STRETCH_2L]: this.settings.finishWorks.ceiling.stretch2,
                [CEILING_PAINTING]  : this.settings.finishWorks.ceiling.painting,
            };

            if (this.shownAll) {
                area = this.roomList.reduce((acc, room) => {
                    let hasArea = room.params && 'area' in room.params && room.params.area;
                    let filter  = room.params && 'ceiling' in room.params && room.params.ceiling === finishVariant;
                    return hasArea && filter ? acc + room.params.area : acc;
                }, 0);
            } else if (this.room && this.room.params.ceiling === finishVariant) {
                area = this.room.params.area;
            }

            return {
                title: settings[finishVariant].title,
                price: settings[finishVariant].price,
                qty  : { value: area, dimension: settings[finishVariant].dimension },
                cost : settings[finishVariant].price * area,
            };
        },
        getOpt(option, area) {
            return {
                title: option.title,
                price: option.price,
                qty  : { value: area, dimension: option.dimension },
                cost : option.price * area,
            };
        },
    },
};
</script>

<template>
    <div class="result-cost">
        <Tabs class="result-cost__tabs"
            @change="switchTab"
        ></Tabs>

        <div class="result-cost__list">
            <ResultCostItem
                v-for="item in costItems"
                v-bind="item"
            ></ResultCostItem>
        </div>

        <!--        <pre>activeTab: {{activeTab}}</pre>-->
        <!--        <pre>room: {{room}}</pre>-->
    </div>
</template>

<style lang="scss" src="../assets/scss/components/ResultCost.scss"></style>
