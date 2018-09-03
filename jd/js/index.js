// 面向对象写法
window.addEventListener('load', function () {
    var jd = new JD();
    jd.searchGradient();
    jd.downTime();
    jd.slide();
})




//创建一个JD构造函数
var JD = function () {

}
// 给JD构造函数的原型对象添加方法
JD.prototype = {
    // 顶部搜索框渐变事件
    searchGradient: function (argument) {
        scroll();
        function scroll() {
            // 1. 滚动条添加滚动事件
            window.addEventListener('scroll', function () {
                // 2. 获取滚动条距离
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                // console.log(scrollTop);
                // 3. 获取轮播图高度
                var slideHeight = document.querySelector('#slide').offsetHeight;
                // console.log(slideHeight);
                var opcity = 0;
                // 4. 判断当前滚动的距离是否小鱼轮播图的高度
                if (scrollTop < slideHeight) {
                    // 5. 计算透明度: 滚动距离/轮播图高度 * 1
                    opcity = scrollTop / slideHeight * 1
                } else {
                    // 6. 滚动的距离大于轮播图高度  默认为1
                    opcity = 1;
                }
                // 7. 设置顶部搜索框的样式
                document.querySelector('#header').style.backgroundColor = 'rgba(222,24,27,' + opcity + ')'
            })
        }
    },
    // 倒计时
    downTime: function (argument) {
        // 1. 获取今天中午12点的毫秒数
        var futureTime = new Date(2018,7,30,12,0,0).getTime();
        // 2. 当前时间的毫秒数
        var nowTime = new Date().getTime();
        // 3. 使用(未来时间 - 当前时间) / 1000  求秒数
        var time = (futureTime - nowTime) / 1000;
        var spans = document.querySelectorAll('.seckill-time span')
        // 4. 定时器
        var timeId = setInterval(function () {
            // 5. 总时间--
            time--;
            // 8. 如果倒计时超过时间,则清楚定时器
            if(time <=0 ){
                time = 0;
                clearInterval(timeId)
            }
            // 6. 计算总时间的时分秒
            var hour = Math.floor(time / 3600) % 24;
            var minute = Math.floor(time / 60) % 60;
            var second = time % 60;
            // 7. 设置页面时间
            spans[0].innerHTML = Math.floor(hour / 10);
            spans[1].innerHTML = Math.floor(hour % 10);
            spans[3].innerHTML = Math.floor(minute / 10);
            spans[4].innerHTML = Math.floor(minute % 10);
            spans[6].innerHTML = Math.floor(second / 10);
            spans[7].innerHTML = Math.floor(second % 10);

        },1000)
    },
    slide: function (argument) {
        var mySwiper = new Swiper('.swiper-container', {
            // 自动轮播
            autoplay: {
                delay: 1000,
                disableOnInteraction: false
            },
            // 无缝轮播
            loop: true,
            // 初始化小圆点,注意页面需要有这个容器
            pagination: {
                el: ".swiper-pagination",
            },
            // 添加左右箭头
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }

        })
    }

}