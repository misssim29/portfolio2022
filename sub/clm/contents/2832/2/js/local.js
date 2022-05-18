$(window).ready(function(){
  setTimeout(function(){
    $('.graph1').animate({
        'height':'132px'
    },700)

  },1400);
  setTimeout(function(){
    $('.cont1').animate({
      'opacity':'1'
    },300)

  },1400);
  setTimeout(function(){
    $('.cont1').animate({
      'opacity':'0'
    },100)

    $('.cont1_on').animate({
        'opacity':'1'
    },300)

  },2000);
  setTimeout(function(){
      
    for(a = 0; a < 2; a++){
    setTimeout(function(){
        $('.btn1').css({'opacity':'0'});
    },a*500); 
    setTimeout(function(){
        $('.btn1').css({'opacity':'1'});
    },300+ a*500);  
    
    }
   
  },2500);

  $(".btn1").on('click',function(){ 

    var click = $(".btn1").attr("class");
    if(click.indexOf("click") > -1){
      $(".btn1").removeClass("click");
      $(".graph").animate({  
        "width":"0px"
      },500);
      $('.btn1').animate({  
        "left":"200px"
      },500);
      $('.cont2').animate({  
        "left":"280px"
      },500);

    }else{
      $(".btn1").addClass("click"); /* change */
      $(".graph").animate({  
        "width":"191px"
      },500);
      $('.btn1').animate({  
        "left":"400px"
      },500);
      $('.cont2').animate({  
        "left":"480px"
      },500);
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

