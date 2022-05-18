$(function(){
setTimeout(function(){
    $(".graph1 img").animate({'bottom':'0px'},1000);
    $(".graph2 img").animate({'top':'0px'},1000);
},200);

setTimeout(function(){
    $(".arrow").animate({'opacity':1},500)
},1300);

setTimeout(function(){
    $(".pot").addClass('on');
        setTimeout(function(){
            $(".result").animate({'width':'220px'},800)
        },500)
},1900);

});

$(".nav1").on('click',function(){
    com.veeva.clm.gotoSlide("amgen-xgeva-clm-efficacy-pc02.zip","");
});

$(".nav2").on('click',function(){
    com.veeva.clm.gotoSlide("amgen-xgeva-clm-efficacy-pc03.zip","");
});

$(".nav3").on('click',function(){
    com.veeva.clm.gotoSlide("amgen-xgeva-clm-efficacy-pc04.zip","");
});

$(".nav4").on('click',function(){
    com.veeva.clm.gotoSlide("amgen-xgeva-clm-efficacy-pc05.zip","");
});

$(".nav5").on('click',function(){
    com.veeva.clm.gotoSlide("amgen-xgeva-clm-efficacy-pc06.zip","");
});


$(".btn_home").on('click',function(){
    com.veeva.clm.gotoSlide("amgen-xgeva-clm-efficacy-pc01.zip","");
});

$(".btn_pi").on('click',function(){
    com.veeva.clm.gotoSlide("amgen-xgeva-clm-efficacy-pc07.zip","");
});

$(".btn_fn").on('click',function(){
    $(".footnote").fadeIn();
    $(this).removeClass('off').addClass('on');
});

$(".footnote").on('click',function(){
    $(".footnote").fadeOut();
    $(".btn_fn").removeClass('on').addClass('off');
});