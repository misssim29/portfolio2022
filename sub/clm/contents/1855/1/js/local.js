$(window).ready(function(){
  setTimeout(function(){

    $(".title").addClass("on");

    setTimeout(function(){
      $(".subtitle").addClass("on")

      setTimeout(function(){

        $(".con1").animate({
          "opacity":1
        },400,function(){
          $(".con1 .inner").animate({
            "width":"100%"
          },500,function(){
            $(".con1-btn").animate({
              opacity:1
            },200,function(){
              $(".con1-btn").animate({
                opacity:0.3
              },400,function(){
                $(".con1-btn").animate({
                  opacity:1
                },300,function(){
                  $(".con2:not(.con3)").animate({
                    opacity:1
                  },400,function(){
                    $(".con2-btn").animate({
                      opacity:1
                    },400,function(){
                      $(".con2-btn").animate({
                        opacity:0.3
                      },300,function(){
                        $(".con2-btn").animate({
                          opacity:1
                        },200,function(){
                          $(".message").addClass("on")
                        })
                      });
                    });
                  });
                })
              });
            });
          });
        });

      },700);

    },700);

  },500);

  $(".con1-btn").on('click',function(){
    var click = $(".con1-btn").attr("class");
    var click2 = $(".con2-btn").attr("class");
    if(click.indexOf("click") > -1){
      $(".con1-btn").removeClass("click");
      $(".con1 .inner").animate({"opacity":1},400);
      $(".con1 .inner2").animate({"opacity":0},400);
      if(click2.indexOf("click") <= -1){
        $(".con2:not(.con3)").animate({"opacity":1},400);
        $(".con3").animate({"opacity":0},400);
      }

    }else{

      if(click2.indexOf("click") <= -1){
        $(".con2:not(.con3)").animate({"opacity":0},400);
        $(".con3").animate({"opacity":1},400);
      }
      $(".con1-btn").addClass("click");
      $(".con1").css({"background":"none"});
      $(".con1 .inner").animate({"opacity":0},400);
      $(".con1 .inner2").animate({"opacity":1},400);
    }
  });


  $(".con2-btn").on('click',function(){
    var click = $(".con2-btn").attr("class");
    if(click.indexOf("click") > -1){
      $(".con2-btn").removeClass("click").animate({
        "left":"450px"
      },400);
      $(".con3").animate({"opacity":1},400);
      $(".con4").animate({"opacity":0},400);

    }else{
      $(".con2-btn").addClass("click").animate({
        "left":"750px"
      },400);
      $(".con2").animate({"opacity":0},400);
      $(".con3").animate({"opacity":0},400);
      $(".con4").animate({"opacity":1},400);

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

