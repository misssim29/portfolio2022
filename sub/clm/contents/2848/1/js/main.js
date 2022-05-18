$( function() {
    setTimeout(function(){
        $(".title1").addClass('on');
    },200);
    setTimeout(function(){
        $(".title2").animate({'opacity':1},800)
    },1700);
    setTimeout(function(){
         var a = 0
         while(a <= 2){
         setTimeout(function(){
             $(".title3").css({opacity:0});
         },a*600);
         setTimeout(function(){
             $(".title3").css({opacity:1});
         },300+a*600);
             a++;
     }
        
        $(".mosquito").fadeIn();
    },2800);

  } );