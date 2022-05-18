$(window).ready(function(){
  setTimeout(function(){
    $(".manLBe").animate({
      "opacity":0
    },350);;
    $(".manLAf").animate({
      "opacity":1
    },350);
    $(".effect1").animate({
      "opacity":1
    },300);


    
    setTimeout(function(){
      $(".manRBe").animate({
        "opacity":0
      },350);;
      $(".manRAf").animate({
        "opacity":1
      },350);
      setTimeout(function(){
        $(".effect2").animate({
          "opacity":1
        },300,function(){
          $(".effect2").animate({
            "opacity":0
          },300,function(){
            $(".effect2").animate({
              "opacity":1
            },300,function(){
              $(".title").animate({
                "width":"1024px"
              },800);
            });
          });
        });
      },350);
     
   
    },700);
  },500);
  
});

