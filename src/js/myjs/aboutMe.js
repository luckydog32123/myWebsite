// 第二个板块 鼠标动效
export default function selectedWorks() {
    // 初始样式
    gsap.set('.circle-img', {
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
        scale: 0
    })

    // 获取文字标题元素
    const workElement = $('.one-work')

    // 元素悬停效果
    workElement.hover(
        function (e) {
            // 获取选中元素
            const circle = this.querySelector('.circle-img')

            // 元素动效 鼠标移入
            gsap.to(circle, {
                opacity: 1,
                scale: 1,
                x: e.offsetX,
                y: e.offsetY,
                duration: 0.2
            })
        },
        function () {
            // 获取选中元素
            const circle = this.querySelector('.circle-img')

            // 元素动效 鼠标移出
            gsap.to(circle, {
                opacity: 0,
                scale: 0,
                duration: 0.2
            })
        }
    )

    // 鼠标移动效果
    workElement.mousemove(
        function (e) {
            // 获取选中元素
            const circle = this.querySelector('.circle-img')

            // 元素动效 鼠标移动
            gsap.to(circle, {
                x: e.offsetX,
                y: e.offsetY
            })
        }
    )
}