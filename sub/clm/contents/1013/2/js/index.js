$(document).ready(function(){
    
    setTimeout(function(){
    $(".check1").fadeIn(500);
    },300)
    setTimeout(function(){
    $(".check2").animate({width:"451px"},300)
    },800)
    
    
     $(".content > li").on('click',function(){
         
         var classname = $(this).find("div").attr("class");
         
         if(classname.indexOf("fix") != -1){
            $(".content > li > div").removeClass("fail");
             $(".content > li > div").removeClass("gift");
             $(".failed").hide();
             $(this).find("div").addClass("gift");
             setTimeout(function(){
                 $(".congratulations").fadeIn();
                 $(".check1").hide();
                 $(".check2").css({width:0});
                 $(".txt").css({width:"450px", top:"130px", left:"150px"});
                 $(".txt").animate({width:"622px", top:"75px" , left:"116px"})
                 
                 setTimeout(function(){
                     $(".check1").fadeIn(500);
                 },500);
                 setTimeout(function(){
                     $(".check2").animate({width:"451px"});
                 },900);
             },300)
         } 

         else{
              var randIdx = Math.floor(Math.random()*2);
        
         if(randIdx == 0){
             $(".content > li > div").removeClass("fail");
             $(".content > li > div").removeClass("gift");
             $(this).find(".result").addClass("fail");
             $(".failed").fadeIn();
         }

         else{
             $(".content > li > div").removeClass("fail");
             $(".content > li > div").removeClass("gift");
             $(".failed").hide();
             $(this).find(".result").addClass("gift");
             setTimeout(function(){
                 $(".congratulations").fadeIn();
                 $(".check1").hide();
                 $(".check2").css({width:0});
                 $(".txt").css({width:"450px", top:"130px", left:"150px"});
                 $(".txt").animate({width:"622px", top:"75px" , left:"116px"})
                 
                 setTimeout(function(){
                     $(".check1").fadeIn(500);
                 },500);
                 setTimeout(function(){
                     $(".check2").animate({width:"451px"});
                 },900);
             },300)
         }
           
        
         }
          
        
     })
    
})

    
//         $(this).find(".result").addClass("fail")
//         $(this).find(".result").addClass("gift")
//     