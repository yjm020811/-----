<template>
  <div>
    <div class="title">排名轮播表</div>
    <div class="chart">
      <dv-scroll-ranking-board
        :config="config"
        style="width: 400px; height: 300px"
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
        data: [
          {
            name: "周口",
            value: 55
          },
          {
            name: "南阳",
            value: 120
          },
          {
            name: "西峡",
            value: 78
          },
          {
            name: "驻马店",
            value: 66
          },
          {
            name: "新乡",
            value: 80
          },
          {
            name: "信阳",
            value: 45
          },
          {
            name: "漯河",
            value: 29
          }
        ],
        //整页滚动
        carousel: "page",
        // 单位
        unit: "单位",
        waitTime: "3000"
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
}
</style>
