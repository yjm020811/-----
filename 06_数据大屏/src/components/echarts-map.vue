<template>
  <!-- echarts 的容器 -->
  <div ref="divRef" :style="{ width: width, height: height }"></div>
</template>

<script setup>
import { onMounted, watch, ref } from "vue";
import useEchart from "@/hooks/useEchart";
import mapJson from "../assets/map-json/sichuan.json";

const props = defineProps({
  width: {
    type: String,
    default: "100%"
  },
  height: {
    type: String,
    default: "100%"
  },
  echartDatas: {
    type: Array,
    default: function () {
      return [];
    }
  }
});

// 拿到dom对象
let divRef = ref(null);
let hyChart = null;

// 监听 echartDatas 的变化
watch(
  () => props.echartDatas,
  (newV, oldV) => {
    setupEchart(newV);
  }
);

onMounted(() => {
  setupEchart(props.echartDatas); // 第一次走这里
});

function setupEchart(echartDatas = []) {
  if (!hyChart) {
    hyChart = useEchart(divRef.value);
  }
  let option = getOption(echartDatas); // 准备数据
  hyChart.setOption(option);
}

function getOption(echartDatas = []) {
  hyChart.registerMap("sichuan", mapJson);
  // 对于json数据进行处理
  const center = [];
  mapJson.features.forEach((item) => {
    center.push({
      [item.properties.name]: [item.properties.center]
    });
  });
  console.log(center);
  const option = {
    geo: [
      {
        map: "sichuan",
        // 地图初始大小
        zoom: 1,
        // 地图缩放的大小比例
        scaleLimit: {
          min: 0,
          max: 3
        },
        // 启动鼠标滚轮缩放地图
        roam: false,
        // 地图的样式处理
        itemStyle: {
          areaColor: "#013c62",
          shadowColor: "#013c62",
          shadBlur: 20,
          shadowOffsetX: -5,
          shadowOffsetY: 15
        },
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            console.log(params);
          }
        }
      }
    ],
    // 是视觉映射组件
    visualMap: {
      show: true,
      max: 100,
      seriesIndex: 0,
      inRange: {
        // 明亮的颜色
        color: ["#2b83ba", "#abd9e9", "#ffffbf", "#fdae61", "#d7191c"]
      }
    },
    series: [
      {
        type: "map",
        map: "sichuan",
        // 视角缩放比例
        zoom: 1,
        // 是否开启鼠标缩放和平移地图
        roam: false,
        // 图形上的文本
        label: {
          show: true,
          // 旋转文本
          rotate: -20,
          // 对文本进行偏移
          // offset: [10, 40],
          // 文本字体风格
          fontStyle: "italic",
          // 文本字体粗细
          fontWeight: "bold",

          color: "#000"
        },
        emphasis: {
          color: "#fff",
          show: true
        },
        // 地图区域的多边形 图形样式
        itemStyle: {
          // 图形的描边颜色
          borderColor: "#013c62",
          borderWidth: 1
        },
        // 高亮状态的图形和标签样式
        emphasis: {
          label: {
            // 标签文本的格式
            formatter: "{b}",
            color: "#fff",
            fontSize: 18
          },
          itemStyle: {
            areaColor: "#2B9184",
            borderWidth: 0,
            color: "#2B9184"
          }
        },
        data: center.map((item) => {
          const key = Object.keys(item)[0];
          const value = Math.random() * 100;
          return {
            name: key,
            value: value
          };
        })
      },
      // 添加散点图
      {
        type: "effectScatter",
        data: mapJson.features.slice(0, 6).map((item) => {
          return {
            name: item.properties.name,
            value: item.properties.centroid
          };
        }),
        coordinateSystem: "geo",
        symbolSize: 20,
        itemStyle: {
          color: "#fea200"
        },
        // 散点涟漪的相关配置
        rippleEffect: {
          color: "#fff",
          period: 2 // 动画时间，值越小速度越快
        },
        // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
        label: {
          show: true,
          position: "top",
          formatter: function (params) {
            return `{name|${params.name}}\n{content|${params.value[0]}}`;
          },
          backgroundColor: "#fea200",
          padding: [0, 0],
          borderRadius: 3,
          lineHieght: 34,
          color: "#fff",
          rich: {
            title: {
              padding: [0, 10, 10, 10],
              color: "#fff"
            },
            content: {
              padding: [10, 10, 0, 10],
              color: "red"
            }
          }
        },
        emphasis: {
          show: true
        }
      }
    ]
  };

  return option;
}
</script>

<style lang="less" scoped></style>
