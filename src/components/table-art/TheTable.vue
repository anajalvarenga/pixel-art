<template>
    <BaseGrid :size="size">
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