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
//����������
$("#navbar-btn").click(function(){
    $(this).toggleClass("navbar-btn");
    if ($(".navbar-collapse").hasClass('nav-show')) {
        $(".navbar-collapse").removeClass('nav-show').addClass("nav-hide");
    }
    else {
        $(".navbar-collapse").removeClass('nav-hide').addClass("nav-show");
    }
});

//��������ط�ʹ����������
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

//�ӱ�ǩ���
$(".navbar-nav>li").click(function(e){
    e.stopPropagation();
    $(this).children("a").children("span").toggleClass("triangletoggle");
    $(this).children("ul").toggleClass("invisible");
});

//��ת
$(".dropdown>li").click(function(e){
    e.preventDefault(e);
    var value=$(this).data("href");
    location.href=value;
});


//�޷����
$(function () {
    var i = 0;
    var timer = null;
    // ���Ƶ�һ��ͼƬ
    var firstimg = $('.banner>li').eq(0).clone();
    // ���Ƶڶ���ͼƬ
    var secondimg = $('.banner>li').eq(1).clone();
    // ���Ƶ�����ͼƬ
    var thirdimg = $('.banner>li').eq(2).clone();
    // ����һ��ͼƬ�ŵ����һ��ͼƬ������ul�Ŀ��ΪͼƬ����*ͼƬ���
    $('.banner').append(firstimg);
    $('.banner').append(secondimg);
    $('.banner').append(thirdimg).width(($('.banner>li').length + 1) * ($('.banner img').width()));
    var imgWidth=$(".banner img").width();
    // ��һ����ť
    $('.next').click(function () {
        i++;
        if (i == $('.banner>li').length) {
            i = 1; // ���ﲻ��i=0
            // ��֤�޷��ֲ�������leftֵ
            $('.banner').css({left: 0});
        }
        $('.banner').stop().animate({left: -i * imgWidth}, 300);
    });
    // ��һ����ť
    $('.prev').click(function () {
        i--;
        if (i == -1) {
            i = $('.banner>li').length - 2;
            $('.banner').css({left: -($('.banner>li').length - 1) * imgWidth});
        }
        $('.banner').stop().animate({left: -i * imgWidth}, 300);
    });
    // ��ʱ���Զ�����
    timer = setInterval(function () {
        i++;
        if (i == $('.banner>li').length - 2) {
            i = 1;
            $('.banner').css({left: 0});
        }
        $('.banner').stop().animate({left: -i * imgWidth},300);
    }, 5000);
    // ������룬��ͣ�Զ����ţ��Ƴ�����ʼ�Զ�����
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
