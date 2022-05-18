$(function(){
    setTimeout(function(){
        $(".content .bar").addClass('on');
        $(".content .placebo").addClass('on');
        $(".content .repatha").addClass('on');
    },500);
    setTimeout(function(){
        $(".imp").animate({'width':'353px'},1000);
    },2600);
    setTimeout(function(){
        $(".result").animate({'bottom':'143px','opacity':1},1000);
    },3800);

    // setTimeout(function(){
    //     $(".content1").animate({'opacity':1},500);
    //     setTimeout(function(){
    //         $(".content1 .icon").addClass('on');
    //     },500);
    // },200);
});




$(".btn_home").on('click',function(){
    com.veeva.clm.gotoSlide("dp3433-amgen-repatha-clm01.zip","");
});

$(".btn_pi").on('click',function(){
    com.veeva.clm.gotoSlide("dp3433-amgen-repatha-clm07.zip","");
});

$(".btn_prev").on('click',function(){
    com.veeva.clm.gotoSlide("dp3433-amgen-repatha-clm04.zip","");
});

$(".btn_next").on('click',function(){
    com.veeva.clm.gotoSlide("dp3433-amgen-repatha-clm06.zip","");
});
