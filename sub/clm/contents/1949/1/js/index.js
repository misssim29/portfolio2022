$(function(){

setTimeout(function(){
    $(".pen").animate({'opacity':1},500);
    $(".detail").animate({'opacity':1},500);
},200)

setTimeout(function(){
    $(".pen").addClass("ani2");
    $(".detail").addClass("ani");
},500)
});



$(".pen").on('click',function(){
    $(this).removeClass("ani2");
    $(".popup_pen").fadeIn();
    
    setTimeout(function(){
         $(".pop_yellow").addClass('on');
    setTimeout(function(){
        $(".pop_yellow_on").addClass('on');
    },500);
        $(".pop_blue").addClass('on');
    setTimeout(function(){
        $(".pop_blue_on").addClass('on');
    },500)
    },600)
});


$(".popup_pen").on('click',function(){
    $(".popup_pen").fadeOut();
    $(".popup_pen > div").removeClass('on');
    $(".popup_pen > img").removeClass('on');
});

$(".detail").on('click',function(){
    $(this).removeClass('ani');
    $(".detail_more").fadeIn();
})




function home(){
   com.veeva.clm.gotoSlide("lilly_Jardiance_the_power_to_accomplish_more_slide01.zip","");
}

$(".btn_footnote").on('click',function(){
    $(this).addClass("on");
    $(".popup").fadeIn();
    $(".footnote").fadeIn();
});

$(".popup").on('click',function(){
    $(this).fadeOut();
    $(".btn_footnote").removeClass("on");
    $(".popup > img").fadeOut();
    $(".popup > div").fadeOut();
});


$(".btns ul li").eq(0).on('click',function(){
    com.veeva.clm.gotoSlide("lilly_Jardiance_the_power_to_accomplish_more_slide02.zip","");
});

$(".btns ul li").eq(1).on('click',function(){
    com.veeva.clm.gotoSlide("lilly_Jardiance_the_power_to_accomplish_more_slide20.zip","");
});

$(".btns ul li").eq(2).on('click',function(){
    com.veeva.clm.gotoSlide("lilly_Jardiance_the_power_to_accomplish_more_slide34.zip","");
});

$(".btns ul li").eq(3).on('click',function(){
    com.veeva.clm.gotoSlide("lilly_Jardiance_the_power_to_accomplish_more_slide47.zip","");
});

$(".btns ul li").eq(4).on('click',function(){
    com.veeva.clm.gotoSlide("lilly_Jardiance_the_power_to_accomplish_more_slide48.zip","");
});

$(".btns ul li").eq(5).on('click',function(){
    com.veeva.clm.gotoSlide("lilly_Jardiance_the_power_to_accomplish_more_slide51.zip","");
});