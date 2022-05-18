$(window).ready(function(){


  setTimeout(function(){
    $(".scale1").addClass("clip");
    setTimeout(function(){
      $(".scale2").addClass("clip");
    },500);
  },500);

  setTimeout(function(){
    $(".magnifying_btn").hide();
    $(".magnifying_btn").fadeIn(400);
    setTimeout(function(){
      $(".magnifying_btn").hide();
      $(".magnifying_btn").fadeIn(400);
    },600);
  },1500);

  $(".ref_popup").on('click',function(){
    $(".ref_popup").fadeOut(400);
  });

  $(".fot_popup").on('click',function(){
    $(".fot_popup").fadeOut(400);
  });

  $(".sub_popup1").on('click',function(){
    $(".sub_popup1").fadeOut(400);
  });
  $(".sub_popup2").on('click',function(){
    $(".sub_popup2").fadeOut(400);
  });

});

function openReference(){
$(".ref_popup").fadeIn(400);
}

function openFootnote(){
$(".fot_popup").fadeIn(400);
}
  function subpop1(){
    $(".sub_popup1").fadeIn();
  }

  function subpop2(){
    $(".sub_popup2").fadeIn();
  }