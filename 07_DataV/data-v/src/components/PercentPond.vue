<template>
  <div>
    <div class="title">进度池</div>
    <div class="chart">
      <dv-percent-pond :config="config" style="width: 300px; height: 100px" />
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
        value: 66,
        // 调节边框
        borderWidth: 5,
        borderRadius: 10,
        borderGap: 5,
        colors: ["skyblue", "red"],
        textColor: "orange",
        // 信息格式化
        formatter: "{value}%",
        // 线条间隙
        lineDash: [10, 2],
        // 局部渐变
        localGradient: true
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
  padding-top: 80px;
}
</style>
