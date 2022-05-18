$(function(){
    setTimeout(function(){
        $(".content1").animate({'opacity':1},500);
        setTimeout(function(){
            $(".content1 .icon").addClass('on');
        },500);
    },200);
    setTimeout(function(){
        $(".content2").animate({'opacity':1},500);
        setTimeout(function(){
            $(".content2 .icon").addClass('on');
        },500);
    },2500);
});

$(".btn_home").on('click',function(){
    com.veeva.clm.gotoSlide("dp3433-amgen-repatha-clm01.zip","");
});

$(".btn_pi").on('click',function(){
    com.veeva.clm.gotoSlide("dp3433-amgen-repatha-clm07.zip","");
});

$(".btn_prev").on('click',function(){
    com.veeva.clm.gotoSlide("dp3433-amgen-repatha-clm03.zip","");
});

$(".btn_next").on('click',function(){
    com.veeva.clm.gotoSlide("dp3433-amgen-repatha-clm05.zip","");
});
