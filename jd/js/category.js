window.addEventListener('load', function () {
    var jd = new JD();
    jd.categoryLeftSwiper();
    jd.categoryRightSwiper();
    jd.categoryLeftClick();
})

var JD = function () {

}

JD.prototype = {
    // 左侧滑动
    categoryLeftSwiper: function () {
        var swiper = new Swiper('.category-left .swiper-container', {
            // 垂直方向
            direction: 'vertical',
            // 支持多个元素一起滑动
            slidesPerView: 'auto',
            // 一次性滑动多个子元素
            freeMode: true,
            // 添加滚动条
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
            // 支持鼠标滚轮
            mousewheel: true,
        });
    },

    // 左侧点击事件
    categoryLeftClick: function () {
        // 1. 找到ul
        var slideUl = document.querySelector('.category-left .swiper-slide');
        // 2. 找到所有li
        var lis = document.querySelectorAll('.category-left .swiper-slide li');
        // 3. 找到滑动容器
        var swiperWrapper = document.querySelector('.category-left .swiper-wrapper');

        // 4. 监听所有li元素点击事件
        slideUl.addEventListener('click',function (e) {
            // 5. 给所有li移除active并给当前li添加索引
            for (var i = 0; i < lis.length; i++) {
                lis[i].classList.remove('active');
                lis[i].index = i;
            }
            // console.log(e.target.parentNode.index);  //li的索引
            // 6. 给当前li添加active
            e.target.parentNode.classList.add('active');
            
            //7. 左侧吸顶效果距离 公式: -当前li索引 * 当前li高度(负值)
            var translateY = -e.target.parentNode.index * e.target.parentNode.offsetHeight;
            var swiperWrapperHeight = swiperWrapper.offsetHeight;
            var ulHeight = slideUl.offsetHeight;
            // console.log(swiperWrapperHeight);
            // console.log(ulHeight);
            var maxTranslateY = swiperWrapperHeight - ulHeight;
            if(translateY < maxTranslateY){
                translateY = maxTranslateY;
            }
            // console.log(translateY); 
            swiperWrapper.style.transform = "translateY("+translateY+"px"+")";
            swiperWrapper.style.transition = "all .3s";

        })

        
    },
   
    // 右侧滑动
    categoryRightSwiper: function () {
        var swiper = new Swiper('.category-right .swiper-container', {
            //垂直方向滑动
            direction: 'vertical',
            //支持多个子元素一起滑动
            slidesPerView: 'auto',
            // 一次性滑动多个子元素
            freeMode: true,
            //添加滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            //支持鼠标滚轮
            mousewheel: true

        })
    }
}