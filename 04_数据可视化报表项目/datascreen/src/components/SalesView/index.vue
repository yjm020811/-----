<template>
  <el-card shadow="always">
    <template #header>
      <div class="menu-wrapper">
        <el-menu
          mode="horizontal"
          default-active="activeIndex1"
          @select="handleSelect"
        >
          <el-menu-item index="activeIndex1">销售额</el-menu-item>
          <el-menu-item index="activeIndex2">访问量</el-menu-item>
        </el-menu>
        <div class="menu-right">
          <el-radio-group
            v-model="radio"
            size="small"
            style="margin-right: 20px"
          >
            <el-radio-button label="今日"></el-radio-button>
            <el-radio-button label="本周"></el-radio-button>
            <el-radio-button label="本月"></el-radio-button>
            <el-radio-button label="今年"></el-radio-button>
          </el-radio-group>
          <el-date-picker
            v-model="date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            size="small"
            unlink-panels
          ></el-date-picker>
        </div>
      </div>
    </template>
    <div class="sales-chart-container">
      <div id="sales-chart-desc" style="width: 75%; height: 100%"></div>
      <div class="sales-chart-rank">
        <div class="rank-title">排行榜</div>
        <div class="rank-item" v-for="(item, index) in rankData" :key="index">
          <div class="no">
            <span class="left" :class="{ top3: index < 3 }">{{ item.no }}</span>
            <span class="right"> {{ item.name }}</span>
          </div>
          <div class="money">{{ item.money }}</div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
      activeIndex1: "1",
      activeIndex2: "2",
      radio: "今日",
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      rankData: [
        {
          no: 1,
          name: "麦当劳",
          money: "423,234"
        },
        {
          no: 2,
          name: "肯德基",
          money: "323,234"
        },
        {
          no: 3,
          name: "乡村基",
          money: "223,234"
        },
        {
          no: 4,
          name: "瑞幸咖啡",
          money: "203,234"
        },
        {
          no: 5,
          name: "小龙坎",
          money: "103,234"
        },
        {
          no: 6,
          name: "海底捞",
          money: "103,034"
        },
        {
          no: 7,
          name: "茶白道",
          money: "83,234"
        }
        // {
        //   no: 8,
        //   name: "蜜雪冰城",
        //   money: "6,234"
        // }
      ],
      chartInstance: ""
    };
  },
  mounted() {
    const chartDom = document.getElementById("sales-chart-desc");
    const chart = this.$echarts.init(chartDom);
    this.chartInstance = chart;
    window.addEventListener("resize", this.handleResize);
    chart.setOption({
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
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleResize() {
      this.$nextTick(() => {
        if (this.chartInstance) {
          this.chartInstance.resize();
        }
      });
    }
  }
};
</script>
<style scoped>
.menu-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dcdfe6;
}
:deep(.el-card__header) {
  border-bottom: none;
  padding: 0 10px;
}
:deep(.el-card__header) {
  margin-left: 20px;
}
.sales-chart-container {
  display: flex;
  height: 280px;
}
.rank-title {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 6px;
}
.sales-chart-rank {
  width: 25%;
}
.rank-item {
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 10px;
  border-radius: 2px;
  background: #f2f6fc;
  cursor: pointer;
  justify-content: space-between;
  .no {
    .left {
      display: inline-block;
      margin-right: 14px;
      width: 20px;
      height: 20px;
      text-align: center;
    }
    .top3 {
      background-color: black;
      color: #fff;
      border-radius: 50%;
    }
  }
}
</style>
