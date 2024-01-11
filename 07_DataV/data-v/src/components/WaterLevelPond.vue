<template>
  <div>
    <div class="title">水位图</div>
    <div class="chart">
      <dv-water-level-pond
        :config="config"
        style="width: 300px; height: 300px"
      />
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
        data: [66, 45],
        // 水位图形状
        shape: "round",
        // 波浪数量
        waveNum: 6,
        // 颜色配置
        colors: ["#ccc", "#fff"],
        // 波浪高度
        waveHeight: 20,
        // 波浪透明度
        waveOpacity: 0.3
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
