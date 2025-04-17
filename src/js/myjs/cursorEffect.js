// 个性化鼠标样式
export default function cursorEffect() {
    // —————— 鼠标黑色圆点 ——————
    // 获取圆点元素
    const centerDot = $('.mousePoint')

    // 小圆点变大圆点
    // 获取包含目标属性的元素
    const allElements = $('div[data-bigdot="true"]')
    // 悬停事件
    allElements.hover(
        () => {
            // 添加变化
            centerDot.addClass('bigDot')
        },
        () => {
            // 移除变化
            centerDot.removeClass('bigDot')
        }
    )



    // —————— 鼠标外圈 ——————
    // paperjs初始化
    paper.setup('myCanvas')

    // 绘制外圈
    const circle = new paper.Path.Circle(new paper.Point(), 15)
    circle.strokeColor = 'yellowgreen'
    circle.strokeWidth = 1

    // 创建paperjs tool实例
    const tool = new paper.Tool()

    // 鼠标位置
    let mouseX = 0
    let mouseY = 0

    // 外圈圆心位置
    let lastX = 0
    let lastY = 0

    // 鼠标移动时获取坐标
    tool.onMouseMove = function (e) {
        mouseX = e.point.x
        mouseY = e.point.y
    }

    // 定义lerp函数  线性插值函数  实现缓慢跟随效果
    const lerp = (a, b, n) => {
        return (1 - n) * a + n * b
    }

    paper.view.onFrame = function () {
        lastX = lerp(lastX, mouseX, 0.2)
        lastY = lerp(lastY, mouseY, 0.2)

        // 跟随鼠标逐帧重绘外圈
        circle.position = new paper.Point(lastX, lastY)
        // 获取圆点宽高
        const centerDotHeight = centerDot.height()
        const centerDotWidth = centerDot.width()

        // 黑色圆点跟随鼠标移动
        centerDot.css(
            'transform', `translateX(${mouseX - centerDotWidth / 2}px) translateY(${mouseY - centerDotHeight / 2}px)`
        )
    }
}