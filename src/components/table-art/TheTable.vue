<template>
    <div class="grid" :style="{'grid-template-columns': 'repeat(' + size + ', 1fr)'}">
        <TheSquare v-for="square in size*size" :key="square"/>
    </div>
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

<style scoped>
.grid {
    width: 40vw;
    height: 40vw;
    display: grid;
    grid-template-rows: auto;
}
</style>