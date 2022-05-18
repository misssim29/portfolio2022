$(function(){
         setTimeout(function(){
     $(".title1").animate({'opacity':1,'margin-top':0},500);
             setTimeout(function(){
     $(".title2").animate({'opacity':1,'margin-top':0},500);
                 setTimeout(function(){
     $(".title3").animate({'opacity':1,'margin-top':0},500);
 },300);
 },300);
 },200);
    
    setTimeout(function(){
        $(".arrow").animate({'height':'134px'},500)
    },1400);
    
    setTimeout(function(){
         var a = 0
         while(a <= 1){
         setTimeout(function(){
             $(".imp1").css({opacity:0});
         },a*450);
         setTimeout(function(){
             $(".imp1").css({opacity:1});
         },200+a*450);
             a++;
     }
    },1900);
    
    setTimeout(function(){
         var a = 0
         while(a <= 1){
         setTimeout(function(){
             $(".imp2").css({opacity:0});
         },a*450);
         setTimeout(function(){
             $(".imp2").css({opacity:1});
         },200+a*450);
             a++;
     }
    },2800);
    
    setTimeout(function(){
         var a = 0
         while(a <= 1){
         setTimeout(function(){
             $(".imp3").css({opacity:0});
         },a*450);
         setTimeout(function(){
             $(".imp3").css({opacity:1});
         },200+a*450);
             a++;
     }
    },3600);
    
    setTimeout(function(){
        $(".click1").animate({'opacity':1},500);
        $(".click2").animate({'opacity':1},500);
        setTimeout(function(){
          $(".click1").addClass('on');
        $(".click2").addClass('on'); 
        },500)
    },4400);

});

$(".btn_footnote").on('click',function(){
    $(".footnote").fadeIn();
});

$(".footnote").on('click',function(){
    $(this).fadeOut();
});

$(".goto1").on('click',function(){
    com.veeva.clm.gotoSlide("Amgen-prolia-clm-osteoporosis18.zip","");
});

$(".imp3").on('click',function(){
   com.veeva.clm.gotoSlide("Amgen-prolia-clm-osteoporosis24.zip","");
});

$(".btn_summary").on('click',function(){
    com.veeva.clm.gotoSlide("Amgen-prolia-clm-osteoporosis34.zip","");
});

$(".btn_home").on('click',function(){
    com.veeva.clm.gotoSlide("Amgen-prolia-clm-osteoporosis02.zip","");
});

$(".btn_ace").on('click',function(){
    com.veeva.clm.gotoSlide("Amgen-prolia-clm-osteoporosis17.zip","");
});