$( function() {
    
    setTimeout(function(){
        $(".title").animate({'opacity':1},800);
         $(".title").addClass("on");
    },200);
    
    setTimeout(function(){
        $(".graph1").animate({'width':'377px'},1200);
    },2800);
    
     setTimeout(function(){
        $(".graph2").animate({'width':'377px'},1200);
    },4000);
    
    setTimeout(function(){
        $(".cont1").addClass('on');
        setTimeout(function(){
         var a = 0
         while(a <= 1){
         setTimeout(function(){
             $(".cont1").css({opacity:0});
         },a*450);
         setTimeout(function(){
             $(".cont1").css({opacity:1});
         },200+a*450);
             a++;
     }
    },600);
    },5200)
    
     setTimeout(function(){
        $(".cont2").addClass('on');
        setTimeout(function(){
         var a = 0
         while(a <= 1){
         setTimeout(function(){
             $(".cont2").css({opacity:0});
         },a*450);
         setTimeout(function(){
             $(".cont2").css({opacity:1});
         },200+a*450);
             a++;
     }
    },600);
    },6800)

    
    $(".prev").on('click',function(){
       window.parent.navigateToSequence('Dwave-LG-Vimovo-clm-are-you-at-risk01'); 
    });
     $(".home").on('click',function(){
       window.parent.navigateToSequence('Dwave-LG-Vimovo-clm-are-you-at-risk01'); 
    });
     $(".next").on('click',function(){
       window.parent.navigateToSequence('Dwave-LG-Vimovo-clm-are-you-at-risk03'); 
    });
    
})