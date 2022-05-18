$( function() {
    setTimeout(function(){
         var a = 0
         while(a <= 2){
         setTimeout(function(){
             $(".title").css({opacity:0});
         },a*450);
         setTimeout(function(){
             $(".title").css({opacity:1});
         },200+a*450);
             a++;
     }
    },200);
    setTimeout(function(){
        $(".graph_green").animate({'width':'580px'},1500);
    },1700);
    
    setTimeout(function(){
        $(".graph_on").animate({'opacity':1},500);
    },3300);
    
    setTimeout(function(){
        $(".box .top1").animate({'width':'111px'},400);
        $(".box .top2").animate({'width':'111px'},400);
        setTimeout(function(){
            $(".box .left").animate({'height':'272px'},800);
            $(".box .right").animate({'height':'272px'},800);
            $(".imp").animate({'height':'272px'},800);
            setTimeout(function(){
        $(".box .bottom1").animate({'width':'113px'},400);
        $(".box .bottom2").animate({'width':'113px'},400);
            },800)
        },400);
    },4200);
  } );