import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
//  引入echarts
import * as echarts from "echarts";
console.log(echarts);
// 引入vue-echarts
import VueEcharts from "vue-echarts";

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.component("v-chart", VueEcharts);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
