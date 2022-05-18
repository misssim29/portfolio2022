$(function(){
    setTimeout(function(){
        $(".graph img").animate({'top':'0px'},800);
    },200)
})




$(".btn24").on('click',function(){
    $(this).addClass("on");
    setTimeout(function(){
        $(".btn24_on").addClass("on");
    },500)
})


function home(){
   com.veeva.clm.gotoSlide("lilly_Jardiance_the_power_to_accomplish_more_slide01.zip","");
}

$(".btn_footnote").on('click',function(){
    $(this).addClass("on");
    $(".popup").fadeIn();
});

$(".popup").on('click',function(){
    $(this).fadeOut();
    $(".btn_footnote").removeClass("on");
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