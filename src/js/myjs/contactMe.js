// 第三个板块 视频播放按钮切换
export default function contactMe() {
  $(".contact-me-info-right-box").click(function () {
    // 切换类名实现按钮切换
    $(".contact-me-info-right-icon").toggleClass("ticked");
  });
}
