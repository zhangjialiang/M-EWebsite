var scroll_done = false;
$(function () {

    $(".me-navbar-li a").click(function () {
        var num = $(this).parents(".item").index();
        var scroll;
        if (scroll_done && $(this).attr("href") == "#me-case-production")
            scroll = $($(this).attr("href")).offset().top;
        else if (scroll_done)
            scroll = $($(this).attr("href")).offset().top - 44;
        else if ($(this).attr("href") == "#me-case-production")
            scroll = $($(this).attr("href")).offset().top - 47;
        else
            scroll = $($(this).attr("href")).offset().top - 92;
        $("html,body").animate({
            scrollTop: scroll
        }, 500 ).animate({
            scrollTop: scroll
        },0,function (){decideScroll();});
        
        return false;
    });
    window.onscroll = function () {
        decideScroll();
    }


    $(".me-service-list .me-service-icon").click(function () {
        var num = $(this).index();
        $(this).addClass("active").siblings(".active").removeClass("active");
        /* 切换不明显
         $(".fuwu-tixi .info-2 .item").eq(num).siblings().slideUp(1000);
         $(".fuwu-tixi .info-2 .item").eq(num).slideDown(400);
         */
        $(".me-service-items .me-service-item-list").stop().fadeOut(200).eq(num).fadeIn(500);
    }).eq(0).click();
});

function decideScroll() {
    var scroll_top_now = $(window).scrollTop(); //当前滚动条距离
    var scroll_top_start = 138; //滚动条触发事件的距离
    var scroll_top_next = $("#me-case-domain").offset().top;
    //二级菜单浮动
    if (scroll_top_now > scroll_top_start) {
        scroll_done = true;
        $(".me-navbar-wrapper").addClass("scroll");
    } else {
        scroll_done = false;
        $(".me-navbar-wrapper").removeClass("scroll");
    }
    if (scroll_top_now+47 >= scroll_top_next) {
        if ($(".me-navbar-li a").eq(0).hasClass("active")) {
            $(".me-navbar-li a").eq(0).removeClass("active");
            $(".me-navbar-li a").eq(1).addClass("active");
        }
    } else {
        if (!$(".me-navbar-li a").eq(0).hasClass("active")) {
            $(".me-navbar-li a").eq(1).removeClass("active");
            $(".me-navbar-li a").eq(0).addClass("active");
        }
    }
}