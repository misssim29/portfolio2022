$( function() {
    setTimeout(function(){
         var a = 0
         while(a <= 2){
         setTimeout(function(){
             $(".title").css({opacity:0});
         },a*600);
         setTimeout(function(){
             $(".title").css({opacity:1});
         },300+a*600);
             a++;
     }
    },200);
    
    setTimeout(function(){
        $(".mosquito").addClass('on');
        $(".mosquito .wing1").addClass('on');
        $(".mosquito .wing2").addClass('on');
    },200);
  } );