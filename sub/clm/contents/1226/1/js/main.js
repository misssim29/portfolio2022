$( function() {

    setTimeout(function(){
      $(".left-graph1").addClass("scale");
      $(".left1").addClass("translate");
    },500);

    setTimeout(function(){
      $(".left-graph2").addClass("scale");
      $(".left2").addClass("translate");
    },1200);

    setTimeout(function(){
      $(".right-graph").animate({
        "height":"191px"
      },500,function(){
        $(".right-graph-num").fadeIn(500);
      });
    },2000);

    $(".studyButton").on('click',function(){
      $(".studyPopup").fadeIn(300);
    });

    $(".popup").on('click',function(){
      $(".popup").fadeOut(300);
    });

  });