$(window).ready(function(){
  setTimeout(function(){
    $('.graph1').animate({
        'height':'132px'
    },700)

  },1400);

  $(".btn1").on('click',function(){ 
    var click = $(".btn1").attr("class");  

    if(click.indexOf("click") > -1){

      $(".btn1").removeClass("click");
      $(".cont1").removeClass("click"); 
      
      

    }else{
      $(".btn1").addClass("click");   /* change */

      $(".cont1").addClass("click"); 
    

    }
    
  });
// btn2
  // $(".btn2").on('click',function(){ 
  //   var click = $(".btn2").attr("class");  
  //   if(click.indexOf("click") > -1){

  //     $(".btn2").removeClass("click");
  //     $(".cont_popup").animate({  
  //       "opacity":"0"
  //     },500);
      

  //   }else{
  //     $(".btn2").addClass("click");

  //     $(".cont_popup").animate({  
  //       "opacity":"1"
  //     },500);
     


  //   }
    
  // });
  $(".btn2").on('click',function(){ 
    $(".cont_popup").fadeIn(400);
  });





// popup
  $(".ref").on('click',function(){
    $(".popup_ref").fadeIn(400);
  });
  $(".foot").on('click',function(){
    $(".popup_foot").fadeIn(400);
  });
  $(".safety").on('click',function(){
    $(".popup_safety").fadeIn(400);
  });

  $(".pi").on('click',function(){
    $(".popup_pi").fadeIn(400);
  });
  $(".studyD").on('click',function(){
    $(".popup_studyD").fadeIn(400);
  });

  $(".popup").on('click',function(){
    $(".popup").fadeOut(400);
  })
});

