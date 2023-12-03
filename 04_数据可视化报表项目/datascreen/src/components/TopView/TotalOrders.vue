<template>
  <CommonCard title="累计订单数量" value="2,157,420">
    <div id="order-chart" style="width: 100%; height: 100%"></div>
    <template #footer>
      <span style="margin-right: 10px">昨日订单量</span>
      <span class="emphasis">2,000,000</span>
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
    const chartDom = document.getElementById("order-chart");
    const chart = this.$echarts.init(chartDom);
    chart.setOption({
      xAxis: {
        type: "category",
        show: false,
        // 默认图标对于x轴的两侧都一定的距离
        boundaryGap: false
      },
      yAxis: {
        show: false
      },
      series: [
        {
          type: "line",
          data: [
            820, 932, 901, 934, 1290, 1130, 1320, 734, 953, 1055, 821, 867, 777,
            945
          ],
          areaStyle: {
            color: "purple"
          },
          smooth: true,
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
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
<style scoped></style>
