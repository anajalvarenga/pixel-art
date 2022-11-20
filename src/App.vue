<template>
  <header>
    <h1>Pixel Art</h1>
    <TheColorPalette />
    <TheGridSelector v-model.number="selectedGrid" />
  </header>
  <section class="full-table">
    <TheTable :size="selectedGrid" />
  </section>
</template>

<script>
import TheTable from './components/table-art/TheTable.vue';
import TheColorPalette from './components/color-palette/TheColorPalette.vue';
import TheGridSelector from './components/grid-selector/TheGridSelector.vue';

export default {
  components: {
    TheTable,
    TheColorPalette,
    TheGridSelector
  },
  data() {
    return {
      paintColor: '#020104',
      selectedGrid: 12
    };
  },
  provide() {
    return {
      setPaintColor: this.setPaintColor,
      getPaintColor: this.getPaintColor
    };
  },
  methods: {
    setPaintColor(color) {
      this.paintColor = color;
    },
    getPaintColor() {
      return this.paintColor;
    }
  },
}
</script>

<style>
body {
  margin: 0;
  background-color: #c2bfc2;
}

header {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  background-color: #eef0f2;
  padding: 16px 32px;
  margin-bottom: 8px;
}

h1 {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  margin-right: auto;
}

.full-table {
  display: flex;
  justify-content: center;
}
</style>