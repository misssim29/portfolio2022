$( function() {
   setTimeout(function(){
       $(".title").addClass('on');
   },200)
    
   setTimeout(function(){
       $(".people_on").animate({'width':'343px'},1000)
   },1500);
    setTimeout(function(){
        $(".result").animate({'opacity':1},300)
    },2600);
    
    setTimeout(function(){
       $(".people_on").animate({'width':'685px'},1000)
   },3000);
    setTimeout(function(){
        $(".result2").animate({'opacity':1},300)
    },4100);
     setTimeout(function(){
       $(".people_on").animate({'width':'740px'},500)
   },4500);
    setTimeout(function(){
        $(".result3").animate({'opacity':1},300)
    },5100);
    
  } );