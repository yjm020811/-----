<template>
  <CommonCard title="累计销售额" value="￥32,19,632">
    <div class="compare">
      <div class="top">
        <span>同日比</span>
        <span class="emphasis">3.33%</span>
        <div class="increase"></div>
      </div>
      <div class="bottom">
        <span>同月比</span>
        <span class="emphasis">7.77%</span>
        <div class="decrease"></div>
      </div>
    </div>
    <template #footer>
      <span style="margin-right: 10px">昨日销售额</span>
      <span class="emphasis">￥ 30,000,000</span>
    </template>
  </CommonCard>
</template>

<script>
import CommonCard from "./CommonCard.vue";
export default {
  name: "",
  props: {},
  components: {
    CommonCard
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
span {
  font-size: 12px;
}

.compare {
  font-size: 12px;
  padding-top: 3px;
  color: #666;
}

.top {
  display: flex;
  margin-bottom: 4px;
}

.bottom {
  display: flex;
  margin-top: 4px;
}

.increase {
  width: 0;
  height: 0;
  border-width: 6px;
  border-color: transparent transparent #333 transparent;
  border-style: solid;
  position: relative;
  bottom: 1px;
  left: 4px;
}

.decrease {
  width: 0;
  height: 0;
  border-width: 6px;
  border-color: #333 transparent transparent transparent;
  border-style: solid;
  position: relative;
  top: 6px;
  left: 4px;
}
</style>
