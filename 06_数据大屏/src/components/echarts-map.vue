<template>
  <!-- echarts 的容器 -->
  <div ref="divRef" :style="{ width: width, height: height }"></div>
</template>

<script setup>
import { onMounted, watch, ref } from "vue";
import useEchart from "@/hooks/useEchart";
import mapJson from "../assets/map-json/sichuan.json";
console.log(mapJson);

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
        }
      }
    ],
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
        zoom: 1,
        roam: false,
        label: {
          show: true,
          color: "#000",
          emphasis: {
            color: "#fff",
            show: true
          }
        },
        itemStyle: {
          normal: {
            borderColor: "#013c62",
            borderWidth: 1,
            areaColor: "#031525"
          },
          emphasis: {
            areaColor: "#2B9184",
            borderWidth: 0,
            color: "#2B9184"
          }
        },
        data: center.map((item) => {
          const key = Object.keys(item)[0];
          const value = Math.random() * 100;
          console.log(key, value);
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
        label: {
          normal: {
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
