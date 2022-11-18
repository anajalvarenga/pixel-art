<template>
  <TheColorPalette />
  <TheTable />
</template>

<script>
import TheTable from './components/table-art/TheTable.vue';
import TheColorPalette from './components/color-palette/TheColorPalette.vue';

export default {
  components: {
    TheTable,
    TheColorPalette
  }
}
</script>
