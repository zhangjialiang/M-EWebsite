$(".me-tab-select-wrapper").on({
    mouseenter: function () {
        if (!$(this).hasClass("active")) {
            $(this).find(".me-tab-arrow").css("opacity", "1");
            $(this).find("img").attr("src", "../images/index/u45.png");
        }
    },
    mouseleave: function () {
        if (!$(this).hasClass("active")) {
            $(this).find(".me-tab-arrow").css("opacity", "0");
            $(this).find("img").attr("src", "../images/index/u48.png");
        }
    }
});
$(".me-detail-choose .me-choose-item").click(function () {
    var num = $(this).index();
    $(this).addClass("active").siblings(".active").removeClass("active");
    $(".me-detail-des").eq(num).addClass("show").siblings(".show").removeClass("show");
});
$(".me-tab-select-wrapper").click(function () {
    if (!$(this).hasClass("active")) {
        $(".me-tab-select-wrapper.active").find(".me-tab-arrow").removeClass("active");
        $(".me-tab-select-wrapper.active").find(".me-tab-arrow").css("opacity", "");
        $(".me-tab-select-wrapper.active").find("img").attr("src", "../images/index/u48.png");
        $(".me-tab-select-wrapper.active").removeClass("active");
        $(this).addClass("active");
        $(this).find(".me-tab-arrow").addClass("active");
        $(this).find("img").attr("src", "../images/index/u45.png");
        changeTabBackGround($(this).index());
    }
});

function changeTabBackGround(index) {
    var item = $(".me-item").eq(index);
    if (!item.hasClass("active")) {
        $(".me-item.active").css("opacity", 0);
        $(".me-item.active").removeClass("active");
        item.addClass("active");
        item.css("opacity", 1);
    }
}