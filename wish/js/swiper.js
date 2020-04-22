window.onload = function () {
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 6,  // 显示的数目
        spaceBetween: 30,  // 元素之间的距离
        direction: 'horizontal', // 垂直切换选项
        autoplay: true,
        loop: true, // 循环模式选项
        autoplay: {
            disableOnInteraction: false
        },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
};