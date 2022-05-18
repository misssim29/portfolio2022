$(window).ready(function(){
  setTimeout(function(){

    $(".title").addClass("on");

    setTimeout(function(){
      $(".subtitle").addClass("on")

      setTimeout(function(){
        $(".iga img.off").animate({opacity:1},400,function(){
         setTimeout(function(){
          $(".iga img.on").animate({opacity:1},300);
          $(".iga img.off").animate({opacity:0},300,function(){
            $(".con1").animate({opacity:1},500,function(){
              $(".con2").animate({opacity:1},500,function(){
                $(".con2-btn").animate({opacity:1},200,function(){
                  $(".con2-btn").animate({opacity:0.3},400,function(){
                    $(".con2-btn").animate({opacity:1},300,function(){
                      $(".con4").animate({opacity:1},500,function(){
                        $(".message").addClass("on");
                      });
                    });
                  });
                });
              });
            });
          });
         },250);
        });

      },700);

    },700);

  },500);


  $(".con2-btn").on('click',function(){
    var click = $(".con2-btn").attr("class");
    if(click.indexOf("click") > -1){
      $(".con2-btn").removeClass("click");
      $(".con3").animate({
        "width":"0"
      },500);
      $(".con2-btn").animate({
        left:"180px"
      },500);
      $(".con4").animate({
        "left":"260px"
      },500);


    }else{
      $(".con2-btn").addClass("click");
      $(".con3").animate({
        "width":"191px"
      },500);
      $(".con2-btn").animate({
        left:"370px"
      },500);
      $(".con4").animate({
        "left":"450px"
      },500);


    }
    
  });



  

  $(".ref").on('click',function(){
    $(".refpopup").fadeIn(400);
  });
  $(".study").on('click',function(){
    $(".studypopup").fadeIn(400);
  });

  $(".prescribing").on('click',function(){
    $(".pi").fadeIn(400);
  });

  $(".note").on('click',function(){
    $(".notepopup").fadeIn(400);
  });

  $(".popup").on('click',function(){
    $(".popup").fadeOut(400);
  })
});

