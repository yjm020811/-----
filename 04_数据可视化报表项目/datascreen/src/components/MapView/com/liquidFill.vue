<template>
  <div id="container1"></div>
</template>

<script>
import "echarts-liquidfill";
export default {
  name: "liquidFill",
  props: {},
  data() {
    return {};
  },
  mounted() {
    const data = [0.68];
    const chartDom = document.getElementById("container1");
    const chart = this.$echarts.init(chartDom);
    chart.setOption({
      series: [
        {
          type: "liquidFill",
          data,
          radius: "150px",
          label: {
            show: true,
            formatter: function (params) {
              console.log(params);
              return `${Math.floor(params.data * 100)}%`;
            },
            textStyle: {
              fontSize: 36,
              color: "#999",
            },
            position: ["50%", "50%"],
            insideColor: "#fff",
          },
          outline: {
            itemStyle: {
              borderColor: "#aaa4a4",
              borderWidth: 1,
              color: "none",
              showBlur: 0,
              showColor: "#fff",
            },
            borderDistance: 0,
          },
          backgroundStyle: {
            color: "#fff",
          },
          itemStyle: {
            showBlur: 0,
            showColor: "#fff",
          },
          amplitude: 8,
          color: [this.getColor(data)],
        },
      ],
    });
  },
  methods: {
    getColor(value) {
      if (value > 0 && value <= 0.5) {
        return "green";
      } else if (value > 0.5 && value <= 0.8) return "orange";
      else {
        return "red";
      }
    },
  },
};
</script>
<style  scoped>
#container1 {
  width: 100%;
  height: 100%;
}
</style>