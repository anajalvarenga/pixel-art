<template>
    <div @click="changeColor" :style="{backgroundColor: bgColor}"></div>
</template>

<script>
export default {
    data() {
        return {
            bgColor: 'white'
        };
    },
    methods: {
        changeColor() {
            this.bgColor = 'red';
        }
    }
}
</script>

<style scoped>
div {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
}
</style>