<template>
  <div class="container">
    <TopView class="TopView" />
    <SalesView class="SalesView" />
    <BottomView class="BottomView" />
    <MapView class="MapView" />
  </div>
</template>

<script>
import TopView from "../components/TopView/index.vue";
import BottomView from "../components/BottomView/index.vue";
import MapView from "../components/MapView/index.vue";
import SalesView from "../components/SalesView/index.vue";
export default {
  name: "MyHome",
  components: {
    TopView,
    BottomView,
    MapView,
    SalesView
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
html,
body,
.container {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
.TopView,.SalesView,.MapView,.BottomView {
  margin: 30px 0;
}
</style>
