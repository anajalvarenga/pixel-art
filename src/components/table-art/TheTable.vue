<template>
    <BaseGrid :size="size" :style="{
        width: '40vw',
        height: '40vw'
    }">
        <SquaresTable v-for="square in size*size" :key="square"/>
    </BaseGrid>
</template>

<script>
import SquaresTable from './SquaresTable.vue';

export default {
    components: {
        SquaresTable
    },
    data() {
        return {
            size: 12
        };
    }
}
</script>