$( function() {
    $(".title .on").animate({'width':'735px'},1000);
    
    setTimeout(function(){
    $(".map1").addClass('on');     
    },1000);
    
    setTimeout(function(){
        $(".shot1").animate({'height':'22px'},100);
    },1500);
    
     setTimeout(function(){
        $(".shot2").animate({'width':'257px'},300);
        $(".shot3").animate({'width':'257px'},300);
    },1600);
    
      setTimeout(function(){
        $(".shot4").animate({'height':'19px'},100);
        $(".shot5").animate({'height':'19px'},100);
        $(".shot6").animate({'height':'19px'},100);
    },1900);
    
    setTimeout(function(){
        $(".map2-A").addClass('on');
        $(".map2-B").addClass('on');
        $(".map2-C").addClass('on');
    },2000);
    
    setTimeout(function(){
        $(".shot7").animate({'height':'19px'},100);
        $(".shot8").animate({'height':'19px'},100);
        $(".shot9").animate({'height':'19px'},100);
    },2600);
    
     setTimeout(function(){
        $(".shot10").animate({'width':'60px'},200);
        $(".shot11").animate({'width':'60px'},200);
        $(".shot12").animate({'width':'60px'},200);
        $(".shot13").animate({'width':'60px'},200);
        $(".shot14").animate({'width':'60px'},200);
        $(".shot15").animate({'width':'60px'},200);
    },2700);
    
    setTimeout(function(){
        $(".shot16").animate({'height':'19px'},100);
        $(".shot17").animate({'height':'19px'},100);
        $(".shot18").animate({'height':'19px'},100);
        $(".shot19").animate({'height':'19px'},100);
        $(".shot20").animate({'height':'19px'},100);
        $(".shot21").animate({'height':'19px'},100);
    },2900);
   
    setTimeout(function(){
       $(".map3-A").addClass('on');
        $(".map3-B").addClass('on');
        $(".map3-C").addClass('on');
        $(".map3-D").addClass('on');
        $(".map3-E").addClass('on');
        $(".map3-F").addClass('on');
    },3000);
    
     setTimeout(function(){
        $(".shot22").animate({'height':'19px'},100);
        $(".shot23").animate({'height':'19px'},100);
        $(".shot24").animate({'height':'38px'},400);
        $(".shot25").animate({'height':'19px'},100);
        $(".shot26").animate({'height':'19px'},100);
        $(".shot27").animate({'height':'38px'},400);
    },3400);
    setTimeout(function(){
        $(".shot28").animate({'width':'16px'},100);
        $(".shot29").animate({'width':'55px'},200);
        $(".shot30").animate({'width':'16px'},100);
        $(".shot31").animate({'width':'55px'},200);
        $(".shot32").animate({'width':'68px'},200);
        $(".shot33").animate({'width':'68px'},200);
    },3500);
    
    setTimeout(function(){
        $(".shot34").animate({'height':'19px'},100);
        $(".shot35").animate({'height':'19px'},100);
        $(".shot36").animate({'height':'19px'},100);
    },3700);

    setTimeout(function(){
        $(".map4-A").addClass('on');
        $(".map4-B").addClass('on');
        $(".map4-C").addClass('on');
        $(".map4-D").addClass('on');
        $(".map4-E").addClass('on');
    },3800);
    
    
    setTimeout(function(){
        $(".shot37").animate({'height':'94px'},300);
        $(".shot38").animate({'height':'94px'},300);
    },4100);
    
    setTimeout(function(){
        $(".map5").addClass('on');
    },4400);
    
    setTimeout(function(){
        $(".map_important1").animate({'opacity':1},300);
        $(".map_important2").animate({'opacity':1},300);
        $(".map_important3").animate({'opacity':1},300);
    },5100)
    
   setTimeout(function(){
         var a = 0
         while(a <= 2){
         setTimeout(function(){
             $(".important").css({opacity:0});
         },a*450);
         setTimeout(function(){
             $(".important").css({opacity:1});
         },200+a*450);
             a++;
     }
    },5500);
    
 
   
    $(".home").on('click',function(){
       window.parent.navigateToSequence('Dwave-LG-Vimovo-Why-Naproxen01'); 
    });
    
     $(".prev").on('click',function(){
         window.parent.navigateToSequence('Dwave-LG-Vimovo-Why-Naproxen10');
    });
    
     $(".next").on('click',function(){
       window.parent.navigateToSequence('Dwave-LG-Vimovo-Why-Naproxen12'); 
    });

})