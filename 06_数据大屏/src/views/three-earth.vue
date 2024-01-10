<template>
  <div ref="divRef" :style="{ width: width, height: height }"></div>
</template>

<script setup>
import { onMounted, watch, ref } from "vue";
import useEchart from "@/hooks/useEchart";
import mapJson from "../assets/map-json/sichuan.json";
import "echarts-gl";

const props = defineProps({
  width: {
    type: String,
    default: "100vw"
  },
  height: {
    type: String,
    default: "100vh"
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
  const option = {
    geo3D: {
      map: "sichuan", // 地图名称
      itemStyle: {
        color: "#4189f2", // 地图背景颜色
        opacity: 1, // 地图背景透明度，取值范围 0 到 1
        borderWidth: 0.5, // 地图边框宽度
        borderColor: "yellow", // 地图边框颜色
        fontSize: 10 // 地图上文字的字体大小
      },
      label: {
        show: true,
        color: "red",
        fontSize: 16
      },
      viewControl: {
        distance: 120, // 增加视角距离
        alpha: 40, // 调整上下旋转的角度
        beta: 0, // 调整左右旋转的角度
        zoomSensitivity: 0, // 缩放操作的灵敏度，值越大越灵敏。默认为1。设置为0后无法缩放。
        panSensitivity: 0, //平移操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的平移灵敏度默认为1。设置为0后无法平移。
        autoRotate: false, //自动旋转
        rotateSensitivity: 0 // 旋转操作的灵敏度，值越大越灵敏默认为1。设置为0后无法旋转。
      },
      emphasis: {
        label: {
          show: true,
          distance: 10,
          color: "red"
        },
        itemStyle: {
          color: "orange"
        }
      },
      light: {
        //光照阴影
        main: {
          alpha: 55,
          beta: 10
        },
        ambient: {
          intensity: 0.7
        }
      },
      // 地图的厚度
      regionHeight: 5
    }
  };

  return option;
}
</script>

<style lang="less" scoped></style>
