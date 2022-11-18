<template>
    <section>
        <BaseSquare class="square-selected-color" :bgColor="selectedColor"/>
        <BaseGrid :size="columns" :style="{
            width:  (columns * 24) + 'px',
            height: (rows * 24) + 'px'
        }">
            <BaseSquare
                v-for="color in colors"
                :key="color"
                :bgColor="color"
                @click="setSelectedColor(color)"
            />
        </BaseGrid>
    </section>
</template>

<script>
export default {
    inject: ['setPaintColor'],
    data() {
        return {
            columns: 14,
            rows: 2,
            colors: [
                '#020104', '#474749', '#787779', '#9c0032', '#ed1d24', '#ff7f00',
                '#ffc40f', '#fef301', '#a6e818', '#25af4c', '#00b7f1', '#4a6ef1',
                '#2e3796', '#6e3395', '#fdfcff', '#dddddf', '#b6b5b8', '#9a5a3e',
                '#fda4b2', '#e2ad7a', '#f4e29d', '#fefabe', '#d4f8bc', '#9eb95f',
                '#9fd8e8', '#719acc', '#566c8e', '#b3a7d4'
            ],
            selectedColor: '#020104'
        };
    },
    methods: {
        setSelectedColor(color) {
            this.selectedColor = color;
            this.setPaintColor(color);
        }
    }
}
</script>

<style scoped>
section {
    display: flex;
    align-items: center;
    gap: 12px;
}

.square-selected-color {
    width: 24px;
    height: 24px;
}
</style>