<template>
    <BaseSquare @click="changeColor" @dragenter="changeColor" :bgColor="bgColor" />
</template>

<script>
export default {
    inject: ['getPaintColor'],
    data() {
        return {
            bgColor: 'white'
        };
    },
    methods: {
        changeColor() {
            this.bgColor = this.getPaintColor();
        }
    }
}
</script>