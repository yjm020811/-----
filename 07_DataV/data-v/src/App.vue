<template>
  <dv-full-screen-container>
    <div class="row">
      <div class="cell">
        <dv-border-box-12>
          <RingChart></RingChart>
        </dv-border-box-12>
      </div>
      <div class="cell">
        <dv-border-box-1>
          <CapsuleChart></CapsuleChart>
        </dv-border-box-1>
      </div>
      <div class="cell">
        <dv-border-box-8>
          <WaterLevelPond></WaterLevelPond>
        </dv-border-box-8>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <dv-border-box-12> <PercentPond></PercentPond> </dv-border-box-12>
      </div>
      <div class="cell">
        <dv-border-box-12>
          <ScrollBoard></ScrollBoard>
        </dv-border-box-12>
      </div>
      <div class="cell">
        <dv-border-box-12>
          <ScrollRankingBoard></ScrollRankingBoard>
        </dv-border-box-12>
      </div>
    </div>
  </dv-full-screen-container>
</template>

<script>
import RingChart from "./components/RingChart.vue";
import CapsuleChart from "./components/CapsuleChart.vue";
import WaterLevelPond from "./components/WaterLevelPond.vue";
import PercentPond from "./components/PercentPond.vue";
import ScrollBoard from "./components/ScrollBoard.vue";
import ScrollRankingBoard from "./components/ScrollRankingBoard.vue";
export default {
  data() {
    return {};
  },
  components: {
    RingChart,
    CapsuleChart,
    WaterLevelPond,
    PercentPond,
    ScrollBoard,
    ScrollRankingBoard
  }
};
</script>

<style>
body {
  background-color: black;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.row {
  height: 50%;
  width: 100%;
  display: flex;
  color: white;
}
.cell {
  flex: 1;
}
</style>
