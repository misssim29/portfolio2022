$( function() {


     setTimeout(function(){
         
         $(".baby").animate({'left':'300px'},6000);
         
         var a = 0
         while(a <= 30){
         setTimeout(function(){
             $(".baby .step1").css({'opacity':0});
             $(".baby .step2").css({'opacity':1});
         },a*1200);
         setTimeout(function(){
            $(".baby .step1").css({'opacity':1});
             $(".baby .step2").css({'opacity':0});
         },600+a*1200);
             a++;
     }
    },200);
    
    
     setTimeout(function(){
         var a = 0
         while(a <= 30){
         setTimeout(function(){
             $(".child .step1").css({'opacity':0});
             $(".child .step2").css({'opacity':1});
         },a*1200);
         setTimeout(function(){
            $(".child .step1").css({'opacity':1});
             $(".child .step2").css({'opacity':0});
         },600+a*1200);
             a++;
     }
    },1700);
    
    setTimeout(function(){
        $(".child").css({'left':'640px'});
        $(".txt").css({'right':'560px'});
    },1500)
    
  } );