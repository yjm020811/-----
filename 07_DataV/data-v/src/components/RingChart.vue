<template>
  <div>
    <div class="title">
      <dv-decoration-7 style="width: 100%; height: 30px"
        >动态环表</dv-decoration-7
      >
    </div>
    <dv-active-ring-chart
      :config="config"
      style="width: 500px; height: 300px"
    />
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
          }
        ],
        // 线条粗细
        lineWidth: 10,
        // 半径大小
        digitalFlopStyle: {
          fontSize: 20,
          fill: "red"
        },
        // 环半径
        radius: "50%",
        // 切换间隔
        activeTimeGap: 1000
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
</style>
