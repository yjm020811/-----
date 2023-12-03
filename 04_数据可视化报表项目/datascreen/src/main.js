import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
//  引入echarts
import * as echarts from "echarts";
console.log(echarts);

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
