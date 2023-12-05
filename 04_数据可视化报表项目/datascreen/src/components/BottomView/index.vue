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
        <div class="chart-wrapper">
          <!-- body的chart部分 -->
          <div class="chart-inner">
            <div class="chart">
              <div class="chart-title">搜索用户数</div>
              <div class="chart-data">93,643</div>
              <div id="chart-search" style="width: 320px; height: 130px"></div>
            </div>
            <div class="chart">
              <div class="chart-title">搜索量</div>
              <div class="chart-data">198,643</div>
              <div id="chart-searchNum" style="width: 320px; height: 130px"></div>
            </div>
          </div>
          <!-- body的table部分 -->
          <div class="table-wrapper">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column align="center" prop="rank" label="排名">
              </el-table-column>
              <el-table-column align="center" prop="address" label="地址">
              </el-table-column>
              <el-table-column align="center" prop="users" label="用户"> </el-table-column>
              <el-table-column align="center" prop="range" label="点击率"> </el-table-column>
            </el-table>
            <el-pagination layout="prev, pager, next" :total="100" :page-size="4" background>
            </el-pagination>
          </div>
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
        <div class="chart-wrapper">
          <div id="peiChart" style="width: 700px; height: 400px;"></div>
        </div>
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
      chartInstance3: "",
      radioSelect: "品类",
      tableData: [
        {
          id: "1",
          rank: "1",
          address: "北京",
          count: 100,
          users: 90,
          range: "90%"
        },
        {
          id: "2",
          rank: "2",
          address: "达州",
          count: 100,
          users: 90,
          range: "90%"
        },
        {
          id: "3",
          rank: "3",
          address: "洛杉矶",
          count: 100,
          users: 90,
          range: "90%"
        },
        {
          id: "4",
          rank: "4",
          address: "成都",
          count: 100,
          users: 90,
          range: "90%"
        },
      ]
    };
  },
  mounted() {
    const chartDom1 = document.getElementById("chart-search");
    const chart1 = this.$echarts.init(chartDom1);
    this.chartInstance1 = chart1;
    window.addEventListener("resize", this.handleResize);
    chart1.setOption({
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisTick: {
          show: false
        },
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130, 100, 210, 100, 200, 300],
          type: "line",
          areaStyle: {
            color: "rgba(95,187,255,0.5)"
          },
          itemStyle: {
            opacity: 0
          },
          lineStyle: {
            color: "rgba(95,187,255)"
          },
          smooth: true
        }
      ],
      grid: {
        top: "15%", // 调整为适当的百分比或像素值
        left: "3%",
        right: "4%",
        bottom: "3%",
      },
      tooltip: {
        show: true,
        trigger: "axis",
        axisPointer: {
          type: 'cross', // 设置为 'cross' 显示十字准星指示器
          label: {
            backgroundColor: '#6a7985' // 可自定义标签背景颜色
          }
        },
      }
    });
    const chartDom2 = document.getElementById("chart-searchNum");
    const chart2 = this.$echarts.init(chartDom2);
    this.chartInstance2 = chart2;
    window.addEventListener("resize", this.handleResize);
    chart2.setOption({
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisTick: {
          show: false
        },
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130, 100, 210, 100, 200, 300],
          type: "line",
          areaStyle: {
            color: "rgba(95,187,255,0.5)"
          },
          itemStyle: {
            opacity: 0
          },
          lineStyle: {
            color: "rgba(95,187,255)"
          },
          smooth: true
        }
      ],
      grid: {
        top: "15%", // 调整为适当的百分比或像素值
        left: "3%",
        right: "4%",
        bottom: "3%",
      },
      tooltip: {
        show: true,
        trigger: "axis",
        axisPointer: {
          type: 'cross', // 设置为 'cross' 显示十字准星指示器
          label: {
            backgroundColor: '#6a7985' // 可自定义标签背景颜色
          }
        },
      }
    });
    const chartDom3 = document.getElementById("peiChart");
    const chart3 = this.$echarts.init(chartDom3);
    this.chartInstance3 = chart3;
    window.addEventListener("resize", this.handleResize);
    chart3.setOption({
      title: [{
        text: "品类分布",
        textStyle: {
          fontSize: 14,
          color: "#666"
        },
        left: 20,
        top: 20,
      },
      {
        text: "累计订单量",
        subtext: "320",
        x: '34.5%',
        y: '42.5%',
        textAlign: "center",
        textStyle: {
          fontSize: 14,
          color: "#999"
        },
        subtextStyle: {
          fontSize: 28,
          color: "#333"
        }
      }
      ],
      series: [{
        type: "pie",
        name: "品类分布",
        data: [
          {
            legendName: "粉面粥店",
            value: 67,
            percentage: '15.4%',
            itemStyle: {
              color: 'red'
            },
            name: "粉面粥店|15.4%"
          },
          {
            legendName: "简餐便当",
            value: 97,
            percentage: '22.30%',
            name: '简餐便当|22.30%'
          }, {
            legendName: "汉堡披萨",
            value: 92,
            percentage: '21.15%',
            name: '汉堡披萨|21.15%'
          },
          {
            legendName: "螺蛳粉",
            value: 67,
            percentage: '15.4%',
            name: '螺蛳粉|15.4%'
          }, {
            legendName: "海底捞",
            value: 67,
            percentage: '15.4%',
            name: '海底捞|15.4%'
          }
        ],
        label: {
          normal: {
            show: true,
            position: "outter",
            formatter: function (params) {
              return params.data.legendName
            }
          }
        },
        center: ['35%', '50%'],
        /* 内半径与外半径 */
        radius: ['45%', '60%'],
        labelLine: {
          normal: {
            length: 5,
            length2: 3,
            smooth: true
          }
        },
        clockwise: false,
        itemStyle: {
          borderWidth: 6,
          borderColor: '#fff'
        }
      }],
      legend: {
        type: "scroll",
        orient: 'vertical',
        left: '70%',
        top: "middle",
        textStyle: {
          color: '#8c8c8c'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return params.seriesName + '<br />' +
            params.marker + params.data.legendName + '<br />' +
            '数量:' + params.data.value + '<br />' +
            '占比:' + params.data.percentage
        }
      }
    });
  },
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
  display: flex;
  flex-direction: column;
  height: 452px;

  .chart-inner {
    display: flex;
    padding: 0 10px;

    .chart {
      flex: 1;
      padding: 0 10px;

      .chart-title {
        color: #999;
        font-size: 14px
      }

      .chart-data {
        font-size: 22px;
        color: #333;
        font-weight: 600;
        letter-spacing: 2px;
      }
    }
  }
}

.table-wrapper {
  .el-pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
}

:deep(.el-card__header) {
  height: 60px;
}
</style>
