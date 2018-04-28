function get_hfs() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
}
get_hfs();

function throttle(method, context) {
    clearTimeout(method.timer);
    method.timer = setTimeout(function() {
        method.call(context);
    }, 100)
}
window.onresize = function() {
    throttle(get_hfs);
};

$(".logo").click(function(){
    location.href="index.html";
});
//导航条下拉
$("#navbar-btn").click(function(){
    $(this).toggleClass("navbar-btn");
    if ($(".navbar-collapse").hasClass('nav-show')) {
        $(".navbar-collapse").removeClass('nav-show').addClass("nav-hide");
    }
    else {
        $(".navbar-collapse").removeClass('nav-hide').addClass("nav-show");
    }
});

//点击其他地方使导航条隐藏
window.onload=function(){
    var myDiv = document.getElementById("header");
    document.addEventListener("click",function(){
        if ($(".navbar-collapse").hasClass('nav-show')) {
            $(".navbar-collapse").removeClass('nav-show').addClass("nav-hide");
            $("#navbar-btn").toggleClass("navbar-btn");
        }
    });
    myDiv.addEventListener("click",function(event){
        event=event||window.event;
        event.stopPropagation();
    });
};

//子标签点击
$(".navbar-nav>li").click(function(e){
    e.stopPropagation();
    $(this).children("a").children("span").toggleClass("triangletoggle");
    $(this).children("ul").toggleClass("invisible");
});

//跳转
$(".dropdown>li").click(function(e){
    e.preventDefault(e);
    var value=$(this).data("href");
    location.href=value;
});


//无缝滚动
$(function () {
    var i = 0;
    var timer = null;
    // 复制第一张图片
    var firstimg = $('.banner>li').eq(0).clone();
    // 复制第二张图片
    var secondimg = $('.banner>li').eq(1).clone();
    // 复制第三张图片
    var thirdimg = $('.banner>li').eq(2).clone();
    // 将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
    $('.banner').append(firstimg);
    $('.banner').append(secondimg);
    $('.banner').append(thirdimg).width(($('.banner>li').length + 1) * ($('.banner img').width()));
    var imgWidth=$(".banner img").width();
    // 下一个按钮
    $('.next').click(function () {
        i++;
        if (i == $('.banner>li').length) {
            i = 1; // 这里不是i=0
            // 保证无缝轮播，设置left值
            $('.banner').css({left: 0});
        }
        $('.banner').stop().animate({left: -i * imgWidth}, 300);
    });
    // 上一个按钮
    $('.prev').click(function () {
        i--;
        if (i == -1) {
            i = $('.banner>li').length - 2;
            $('.banner').css({left: -($('.banner>li').length - 1) * imgWidth});
        }
        $('.banner').stop().animate({left: -i * imgWidth}, 300);
    });
    // 定时器自动播放
    timer = setInterval(function () {
        i++;
        if (i == $('.banner>li').length - 2) {
            i = 1;
            $('.banner').css({left: 0});
        }
        $('.banner').stop().animate({left: -i * imgWidth},300);
    }, 5000);
    // 鼠标移入，暂停自动播放，移出，开始自动播放
    $('.container').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            i++;
            if (i == $('.banner>li').length - 2) {
                i = 1;
                $('.banner').css({left: 0});
            }
            $('.banner').stop().animate({left: -i * imgWidth}, 300);
        }, 5000);
    });
});
