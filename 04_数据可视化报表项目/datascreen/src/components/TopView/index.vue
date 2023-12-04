<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-card shadow="always">
        <!-- 累计销售额 -->
        <TotalSales></TotalSales>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="always">
        <TotalOrders></TotalOrders>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="always">
        <TodayUsers></TodayUsers>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="always">
        <TotalUsers></TotalUsers>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import TotalSales from "./TotalSales.vue";
import TotalOrders from "./TotalOrders.vue";
import TodayUsers from "./TodayUsers.vue";
import TotalUsers from "./TotalUsers.vue";
export default {
  name: "",
  components: {
    TotalSales,
    TotalOrders,
    TodayUsers,
    TotalUsers
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

.emphasis {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
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

<style>
.emphasis {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
.el-row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
</style>
