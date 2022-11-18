<template>
    <BaseGrid :size="size">
        <TheSquare v-for="square in size*size" :key="square"/>
    </BaseGrid>
</template>

<script>
import TheSquare from './TheSquare.vue';

export default {
    components: {
        TheSquare
    },
    data() {
        return {
            size: 12
        };
    }
}
</script>