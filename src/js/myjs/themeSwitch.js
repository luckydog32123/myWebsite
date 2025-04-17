// 切换主题
export default function themeSwich() {
    $('.who-am-i-nav-badge-switch').click(function (e) {
        // 点击切换开关 根据元素是否包含指定类名 进行切换添加删除主题类名
        if (!e.target.classList.contains('fakeCheckBox')) {
            $('body').toggleClass('retro')
        }
    })
}