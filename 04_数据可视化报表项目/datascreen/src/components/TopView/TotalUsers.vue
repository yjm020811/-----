<template>
  <CommonCard title="累计用户数量" value="1,087,014">
    <div id="totaluser-chart" style="width: 100%; height: 100%"></div>
    <template #footer>
      <div class="left">
        <span>日同比:</span>
        <span class="emphasis">8.73%</span>
        <div class="increase"></div>
      </div>
      <div class="right">
        <span style="margin-left: 20px">日月比:</span>
        <span class="emphasis">35.73%</span>
        <div class="decrease"></div>
      </div>
    </template>
  </CommonCard>
</template>

<script>
import CommonCard from "./CommonCard.vue";
export default {
  name: "",
  props: {},
  components: {
    CommonCard
  },
  data() {
    return {};
  },
  mounted() {
    const chartDom = document.getElementById("totaluser-chart");
    const chart = this.$echarts.init(chartDom);
    chart.setOption({
      xAxis: {
        type: "value",
        show: false
      },
      yAxis: {
        type: "category",
        show: false
      },
      series: [
        {
          type: "bar",
          stack: "总量",
          data: [300],
          barWidth: 10,
          itemStyle: {
            color: "#45c946"
          }
        },
        {
          type: "bar",
          stack: "总量",
          data: [200],
          barWidth: 10,
          itemStyle: {
            color: "#eee"
          }
        },
        {
          type: "custom",
          data: [300],
          stack: "总量",
          renderItem: (params, api) => {
            const value = api.value(0);
            console.log(value);
            const endPoint = api.coord([value, 0]);
            console.log(endPoint);
            return {
              type: "group",
              position: endPoint,
              children: [
                {
                  type: "path",
                  shape: {
                    d: "M535.466667 812.8l450.133333-563.2c14.933333-19.2 2.133333-49.066667-23.466667-49.066667H61.866667c-25.6 0-38.4 29.866667-23.466667 49.066667l450.133333 563.2c12.8 14.933333 34.133333 14.933333 46.933334 0z",
                    x: -5,
                    y: -20,
                    width: 10,
                    height: 10,
                    layout: "cover"
                  },
                  style: {
                    fill: "#45c946"
                  }
                },
                {
                  type: "path",
                  shape: {
                    d: "M512 6.4C505.6 0 492.8 0 480 0s-25.6 0-32 6.4c-12.8 6.4-19.2 19.2-25.6 25.6L6.4 761.6c-12.8 19.2-12.8 44.8 0 64 6.4 12.8 12.8 12.8 25.6 19.2s19.2 6.4 32 6.4h819.2c12.8 0 25.6 0 32-6.4 12.8-6.4 19.2-12.8 25.6-19.2 12.8-19.2 12.8-44.8 0-64L537.6 32C531.2 25.6 524.8 12.8 512 6.4z",
                    x: -5,
                    y: 10,
                    width: 10,
                    height: 10,
                    layout: "cover"
                  },
                  style: {
                    fill: "#45c946"
                  }
                }
              ]
            };
          }
        }
      ],
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    });
  }
};
</script>
<style scoped>
.increase {
  display: inline;
  width: 0;
  height: 0;
  border-width: 6px;
  border-color: transparent transparent #333 transparent;
  border-style: solid;
  position: relative;
  bottom: 10px;
  left: 4px;
}

.decrease {
  display: inline;
  width: 0;
  height: 0;
  border-width: 6px;
  border-color: #333 transparent transparent transparent;
  border-style: solid;
  position: relative;
  top: 12px;
  left: 4px;
}
</style>
