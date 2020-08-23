<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from "echarts";
import debounce from "lodash";
import { addListener, removeListener } from "resize-detector";
export default {
  props: {
    option: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    /* option(val) {
      this.myChart.setOption(val)
    } */
    option: {
      handler(val){
        this.myChart.setOption(val);
      },
      deep: true
    }
  },
  mounted() {
    this.renderChart();
    addListener(this.$refs.chartDom, this.resize);
  },
  created() {
    this.resize = debounce(this.resize, 300);
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize);
    this.myChart.dispose();
    this.myChart = null;
  },
  methods: {
    resize() {
      this.myChart.resize();
    },
    renderChart() {
      this.myChart = echarts.init(this.$refs.chartDom);
      this.myChart.setOption(this.option);
    }
  }
};
</script>

<style>
</style>