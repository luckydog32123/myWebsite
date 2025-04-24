// 页面加载效果
export default function loading() {
  // jQuery的 原ready方法 在页面dom元素全部加载完成之后再执行其中的内容
  // 当页面加载完成之后 再将加载页移走 实现页面的假加载
  $(function () {
    $(".loading").addClass("loading-moveup");

    // 加载页面移走后 逐渐依次显示页面内容
    setTimeout(() => {
      // 用交叉观察器 实现随页面滚动显示内容
      const io = new IntersectionObserver((e) => {
        e.forEach((item) => {
          if (item.isIntersecting) {
            // 元素进入浏览器视窗 显示
            $(item.target).addClass("showing");
          } else {
            // 元素移出浏览器视窗 隐藏
            $(item.target).removeClass("showing");
          }
        });
      });

      $(".shows").each((index, dom) => {
        io.observe(dom);
      });
    }, 1500);
  });
}
