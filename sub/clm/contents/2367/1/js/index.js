$(function(){
setTimeout(function(){
    $(".graph").animate({'width':'501px'},1000);
},200);
    
setTimeout(function(){
    $(".arrow").animate({'height':'142px'},500);
},1300);
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