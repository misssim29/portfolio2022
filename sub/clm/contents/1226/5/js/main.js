$( function() {
  setTimeout(function(){
    $(".arrow").addClass("arrowbig");
  },500);

  setTimeout(function(){
    $(".graph1").animate({
      "height":"124px"
    },800,function(){
      $(".graph2").animate({
        "height":"122px"
      });
    });
  },1300);

  $(".studyButton1").on('click',function(){
    $(".studyPopup1").fadeIn(300);
  });
  $(".studyButton2").on('click',function(){
    $(".studyPopup2").fadeIn(300);
  });
  
  $(".popup").on('click',function(){
    $(".popup").fadeOut(300);
  });
  
  });