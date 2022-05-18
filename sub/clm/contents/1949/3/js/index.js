$(function(){


    
setTimeout(function(){
    $(".pen").animate({'opacity':1},500);
},200)

setTimeout(function(){
    $(".pen").addClass("ani");
},200)
 

  });

$(".cont > div").on('click',function(){
    var idx = $(this).index();
    $(this).find(".pen").removeClass("ani");
    $(".popup_cont").fadeIn();
    $(".popup_cont").find("img").eq(idx).fadeIn();
});

$(".popup_cont").on('click',function(){
    $(this).fadeOut();
    $(this).find("img").fadeOut();
});






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
    
  