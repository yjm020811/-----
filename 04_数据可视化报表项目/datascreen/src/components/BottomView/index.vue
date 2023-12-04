<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <!-- 头部 -->
        <template #header>
          <div class="title-wrapper">
            <div class="title">关键词搜索</div>
          </div>
        </template>
        <!-- body的chart部分 -->
        <div class="chart-wrapper">
          <div class="chart">
            <div class="chart-title">搜索用户数</div>
            <div class="chart-data">93,643</div>
            <div id="chart-search" style="width: 20%; height: 100%"></div>
          </div>
          <div class="chart">
            <div class="chart-title">搜索量</div>
            <div class="chart-data">198,643</div>
            <div id="chart-searchNum" style="width: 20%; height: 100%"></div>
          </div>
        </div>
        <!-- body的table部分 -->
        <div class="table-wrapper">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
          <el-pagination layout="prev, pager, next" :total="50">
          </el-pagination>
        </div>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template #header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <div></div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      chartInstance1: "",
      chartInstance2: "",
      radioSelect: "品类",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  mounted() {
    const chartDom1 = document.getElementById("chart-search");
    const chart1 = this.$echarts.init(chartDom1);
    this.chartInstance1 = chart1;
    window.addEventListener("resize", this.handleResize);
    chart1.setOption({
      title: {
        text: "年度销售额",
        top: 0,
        left: "2.5%",
        textStyle: {
          fontSize: 14
        }
      },
      xAxis: {
        type: "category",
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        axisLine: {
          // x 轴线设置
          show: true // 显示 x 轴线
        }
      },
      yAxis: {
        type: "value",
        axisLine: {
          // y 轴线设置
          show: true // 显示 y 轴线
        }
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130, 100, 210, 100, 200, 300],
          type: "bar",
          barWidth: "25%",
          itemStyle: {
            color: "#3291cf"
          }
        }
      ],
      grid: {
        top: "15%", // 调整为适当的百分比或像素值
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true // 是否包含坐标轴的刻度标签
      },
      tooltip: {
        show: true,
        trigger: "axis"
      }
    });
    const chartDom2 = document.getElementById("chart-searchNum");
    const chart2 = this.$echarts.init(chartDom2);
    this.chartInstance2 = chart2;
    window.addEventListener("resize", this.handleResize);
    chart2.setOption({
      title: {
        text: "年度销售额",
        top: 0,
        left: "2.5%",
        textStyle: {
          fontSize: 14
        }
      },
      xAxis: {
        type: "category",
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        axisLine: {
          // x 轴线设置
          show: true // 显示 x 轴线
        }
      },
      yAxis: {
        type: "value",
        axisLine: {
          // y 轴线设置
          show: true // 显示 y 轴线
        }
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130, 100, 210, 100, 200, 300],
          type: "bar",
          barWidth: "25%",
          itemStyle: {
            color: "#3291cf"
          }
        }
      ],
      grid: {
        top: "15%", // 调整为适当的百分比或像素值
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true // 是否包含坐标轴的刻度标签
      },
      tooltip: {
        show: true,
        trigger: "axis"
      }
    });
  }
};
</script>
<style scoped>
.bottom-view {
  display: flex;

  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;

    &:first-child {
      padding: 0 10px 0 0;
    }

    &:last-child {
      padding: 0 0 0 10px;
    }

    .title-wrapper {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      justify-content: space-between;

      .title {
        font-weight: 600;
      }
    }
  }
}

.chart-wrapper {
  .chart {
    .chart-title {
      color: gray;
    }
    .chart-data {
      font-weight: 600;
      font-size: 22px;
    }
  }
}

:deep(.el-card__header) {
  height: 60px;
}
</style>
