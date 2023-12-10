<template>
  <div class="map-view">
    <div class="left">
      <leftMap />
    </div>
    <div class="right">
      <el-card shadow="hover">
        <template #header>
          <div class="title">用户同比增长</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <liquildFill />
          </div>
        </template>
      </el-card>

      <el-card shadow="hover">
        <template #header>
          <div class="title">热门搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <wordCloud />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import leftMap from "./com/leftMap.vue";
import liquildFill from "./com/liquidFill.vue";
import wordCloud from "./com/wordCloud.vue";
export default {
  name: "mapView",
  props: {},
  data() {
    return {};
  },
  components: {
    leftMap,
    liquildFill,
    wordCloud,
  },
};
</script>
<style scoped>
.map-view {
  display: flex;
  width: 100%;
  height: 600px;
}
.left {
  flex: 1;
}
.right {
  display: flex;
  width: 20%;
  height: 600px;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
}
.title {
  display: flex;
  align-items: center;
  height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  font-weight: 700;
  padding: 0 0 0 20px;
}
.chart-wrapper {
  width: 100%;
  height: 160px;
}
</style>