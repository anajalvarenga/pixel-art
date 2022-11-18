<template>
    <div class="grid" :style="{'grid-template-columns': 'repeat(' + size + ', 1fr)'}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['size']
}
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-rows: auto;
}
</style>