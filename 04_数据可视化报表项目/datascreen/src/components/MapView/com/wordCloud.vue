<template>
  <div id="container2"></div>
</template>

<script>
import "echarts-wordcloud";
export default {
  name: "wordCloud",
  props: {},
  data() {
    return {};
  },
  mounted() {
    const data = [
      {
        name: "kobe bryant",
        value: 100 * Math.random(),
      },
      {
        name: "计算机科学与技术",
        value: 100 * Math.random(),
      },
      {
        name: "计算机20205杨俊明",
        value: 100 * Math.random(),
      },
    ];
    const chart = document.getElementById("container2");
    const chart1 = this.$echarts.init(chart);
    chart1.setOption({
      series: [
        {
          type: "wordCloud",
          data,
          shape: "circle",
          textStyle: {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: function () {
              // Random color
              return (
                "rgb(" +
                [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                ].join(",") +
                ")"
              );
            },
          },
        },
      ],
    });
  },
};
</script>
<style  scoped>
#container2 {
  width: 100%;
  height: 100%;
}
</style>