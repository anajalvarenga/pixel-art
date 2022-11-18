<template>
    <BaseGrid :size="size" class="grid">
        <SquaresTable v-for="square in size*size" :key="size + '-' + square"/>
    </BaseGrid>
</template>

<script>
import SquaresTable from './SquaresTable.vue';

export default {
    props: ['size'],
    components: {
        SquaresTable
    },
}
</script>

<style scoped>
.grid {
    width: 40vw;
    height: 40vw
}

@media (max-width: 600px) {
    .grid {
    width: 80vw;
    height: 80vw
}
}
</style>