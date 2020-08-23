<template>
  <div>
    <Chart :option="option" style="height:400px"></Chart>
  </div>
</template>

<script>
import Chart from "../../components/Chart";
import axios from "axios";
export default {
  components: {
    Chart
  },
  data() {
    return {
      option: {}
    };
  },
  mounted() {
    this.getChartData();
  },
  methods: {
    getChartData() {
      axios
        .get("/api/dashboard/chart", {
          params: {
            id: 1
          }
        })
        .then(res => {
          console.log(res)
          this.option = {
            title: {
              text: "ECharts 入门示例"
            },
            tooltip: {},
            legend: {
              data: ["销量"]
            },
            xAxis: {
              data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [
              {
                name: "销量",
                type: "bar",
                data: res.data
              }
            ]
          };
        });
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
};
</script>

<style>
</style>