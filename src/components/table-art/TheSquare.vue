<template>
    <BaseSquare @click="changeColor" :bgColor="bgColor"/>
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