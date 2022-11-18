<template>
    <div style="{backgroundColor: bgColor}"></div>
</template>

<script>
export default {
    props: ['bgColor']
}
</script>

<style scoped>
div {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
}
</style>