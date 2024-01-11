<template>
  <div>
    <div class="title">轮播表</div>
    <div class="chart">
      <dv-scroll-board
        :config="config"
        @click="getInfo"
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
        // 表头
        header: ["列1", "列2", "列3"],
        data: [
          ["2016-05-01", "王小虎", "上海市普陀区金沙江路 1516 路"],
          ["2016-05-02", "王小虎", "上海市普陀区金沙江路 1516 路"],
          ["2016-05-03", "王小虎", "上海市普陀区金沙江路 1516 路"],
          ["2016-05-04", "王小虎", "上海市普陀区金沙江路 1516 路"],
          ["2016-05-05", "王小虎", "上海市普陀区金沙江路 1516 路"],
          ["2016-05-06", "王小虎", "上海市普陀区金沙江路 1516 路"],
          ["2016-05-07", "王小虎", "上海市普陀区金沙江路 1516 路"],
          ["2016-05-08", "王小虎", "上海市普陀区金沙江路 1516 路"],
          ["2016-05-09", "王小虎", "上海市普陀区金沙江路 1516 路"],
          ["2016-05-10", "王小虎", "上海市普陀区金沙江路 1516 路"]
        ],
        // 附带行号
        index: true,
        columnWidth: [50],
        align: ["center"],
        // 整页滚动
        carousel: "page",
        // 表头背景颜色
        headerBGC: "red",
        // 偶数背景颜色
        oddRowBGC: "skyblue",
        // 奇数背景颜色
        evenRowBGC: "green",
        // 轮播间隔时间
        waitTime: "3000",
        // 表头高度
        headerHeight: 25
      }
    };
  },
  methods: {
    // table每一行的点击事件
    getInfo(config) {
      console.log("config", config);
    }
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
