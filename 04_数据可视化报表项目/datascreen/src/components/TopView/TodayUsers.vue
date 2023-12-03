<template>
  <CommonCard title="今日交易用户数" value="81,014">
    <div id="user-chart" style="width: 100%; height: 100%"></div>
    <template #footer>
      <span style="margin-right: 10px">退货率</span>
      <span class="emphasis">5.14%</span>
    </template>
  </CommonCard>
</template>

<script>
import CommonCard from "./CommonCard.vue";
export default {
  name: "",
  components: {
    CommonCard
  },
  data() {
    return {};
  },
  mounted() {
    const chartDom = document.getElementById("user-chart");
    const chart = this.$echarts.init(chartDom);
    chart.setOption({
      xAxis: {
        type: "category",
        data: [
          "一",
          "二",
          "三",
          "四",
          "五",
          "六",
          "七",
          "八",
          "九",
          "十",
          "十一",
          "十二"
        ],
        barWidth: "60%",
        show: false
      },
      yAxis: {
        type: "value",
        show: false
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130, 100, 120, 210, 210, 100],
          type: "bar"
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
<style scoped></style>
