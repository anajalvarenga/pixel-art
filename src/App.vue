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
  },
  data() {
    return {
      paintColor: '#020104'
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
