$( function() {

  setTimeout(function(){
    $(".left-graph").addClass("up");
  },500);

  setTimeout(function(){
    $(".left").fadeIn(500);
  },1000);

  setTimeout(function(){
    $(".graph").animate({
      "height":"232px"
    },800,function(){
      // $(".graph").fadeOut(300);
      $(".graph2").fadeIn(300);
    });
  },1800);

  $(".studyButton").on('click',function(){
    $(".studyPopup").fadeIn(300);
  });
  
  $(".popup").on('click',function(){
    $(".popup").fadeOut(300);
  });
  
  });