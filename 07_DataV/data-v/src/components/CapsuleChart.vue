<template>
  <div>
    <div class="title">胶囊柱图</div>
    <div class="chart">
      <dv-capsule-chart :config="config" style="width: 400px; height: 300px" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RingChart",
  props: {},
  data() {
    return {
      config: {
        data: [
          {
            name: "南阳",
            value: 167
          },
          {
            name: "周口",
            value: 67
          },
          {
            name: "漯河",
            value: 123
          },
          {
            name: "郑州",
            value: 55
          },
          {
            name: "西峡",
            value: 98
          }
        ],
        // 更换颜色
        colors: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
        // 单位
        unit: "单位",
        // 显示数值
        showValue: true
      }
    };
  }
};
</script>
<style scoped>
.title {
  text-align: center;
  padding-top: 20px;
}
.chart {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
</style>
