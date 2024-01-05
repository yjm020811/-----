(function (win) {
  var bodyStyle = document.createElement("style");
  bodyStyle.innerHTML = `#fiveG{width:1920px; height:1080px!important}`;
  // 创建一个style元素，并将其innerHTML设置为“body{width:1920px; height:1080px!important;}”，这将使body元素的宽度为1920像素，高度为1080像素，并且!important规则将覆盖任何其他可能存在的样式规则
  document.documentElement.firstElementChild.appendChild(bodyStyle); //将bodyStyle节点添加到HTML文档的根节点下的第一个子节点中。

  function refreshScale() {
    let docWidth = document.documentElement.clientWidth; //浏览器窗口中可见宽度
    let docHeight = document.documentElement.clientHeight; //浏览器窗口中可见高度
    // console.log(docHeight,docWidth);
    var designWidth = 1920,
      designHeight = 1080,
      widthRatio = docWidth / designWidth,
      heightRatio = docHeight / designHeight;
    document.body.style = `transform:scale(${widthRatio},${heightRatio});transform-origin:left top; overflow:hidden`; // 设置缩放原点transform-origin: left top;
    // 应对浏览器全屏切换前后窗口因短暂滚动条问题出现未占满情况
    setTimeout(function () {
      var lateWidth = document.documentElement.clientWidth,
        lateHeight = document.documentElement.clientHeight;
      if (lateWidth === docWidth) return;

      widthRatio = lateWidth / designWidth;
      heightRatio = lateHeight / designHeight;
      document.body.style =
        "transform:scale(" +
        widthRatio +
        "," +
        heightRatio +
        ");transform-origin:left top;overflow:hidden";
      // 设置缩放原点transform-origin: left top;
      // 地图适配缩放比例
    }, 0);
  }
  refreshScale();

  win.addEventListener(
    "pageshow",
    function (e) {
      if (e.persisted) {
        // 浏览器后退的时候重新计算
        refreshScale();
      }
    },
    false
  );
  win.addEventListener("resize", refreshScale, false);
})(window);
