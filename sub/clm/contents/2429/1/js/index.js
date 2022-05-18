$(function(){
    
    setTimeout(function(){
         var a = 0
         while(a <= 2){
         setTimeout(function(){
             $(".txt_on").css({opacity:0});
         },a*600);
         setTimeout(function(){
             $(".txt_on").css({opacity:1});
         },300+a*600);
             a++;
     }
    },200);
    
    setTimeout(function(){
        [0,1,2,3,4].forEach(function(i){
        setTimeout(function(){
            $(".goto").find("li").eq(i).animate({"opacity":1,"margin-top":0});
        },400*i)
    })  
    },2200);
});


$(".btn_pi").on('click',function(){
$(".popup img").css({opacity:0});
$(".popup").fadeIn();
$(".pi").animate({opacity:1});
});

$(".btn_fn").on('click',function(){
$(".popup img").css({opacity:0});
$(".popup").fadeIn();
$(".footnote").animate({opacity:1});
});

$(".btn_ref").on('click',function(){
$(".popup img").css({opacity:0});
$(".popup").fadeIn();
$(".ref").animate({opacity:1});
});

$(".btn_sd").on('click',function(){
$(".popup img").css({opacity:0});
$(".popup").fadeIn();
$(".sd").animate({opacity:1});
});


$(".popup").on('click',function(){
    $(".popup").fadeOut();
    $(".popup img").animate({opacity:0});
});

$(".home").on('click',function(){
    com.veeva.clm.gotoSlide("msd_clm_s3_invanz01.zip","");
});


$(".btns li").on('click',function(){
    $(".btns li").find('img').hide();
    $(this).find('img').show();
    
    var idx = $(this).index();
    if(idx == 0){
        $(".table > div").hide();
        $(".table > div > img").css({'opacity':0});
        $(".tab1").fadeIn('fast');
        setTimeout(function(){
            $(".tab1 img").animate({'opacity':1},500);
        },500)
    }
    
    if(idx == 1){
        $(".table > div").hide();
         $(".table > div > img").css({'opacity':0});
        $(".tab2").fadeIn('fast');
        setTimeout(function(){
            $(".tab2 img").animate({'opacity':1},500);
        },500)
    }
    
    if(idx == 2){
        $(".table > div").hide();
         $(".table > div > img").css({'opacity':0});
        $(".tab3").fadeIn('fast');
        setTimeout(function(){
            $(".tab3 img").animate({'opacity':1},500);
        },500)
    }
    
    if(idx == 3){
        $(".table > div").hide();
         $(".table > div > img").css({'opacity':0});
        $(".tab4").fadeIn('fast');
        setTimeout(function(){
            $(".tab4 img").animate({'opacity':1},500);
        },500)
    }
});

