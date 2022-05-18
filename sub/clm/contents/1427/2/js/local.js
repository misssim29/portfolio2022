$(window).ready(function(){

  setTimeout(function(){
    $(".graph_btn").hide();
    $(".graph_btn").fadeIn(400);
    setTimeout(function(){
      $(".graph_btn").hide();
      $(".graph_btn").fadeIn(400);
    },600);
  },500);


  $(".ref_popup").on('click',function(){
    $(".ref_popup").fadeOut(400);
  });

  $(".fot_popup").on('click',function(){
    $(".fot_popup").fadeOut(400);
  });

  $(".pi_popup").on('click',function(){
    $(".pi_popup").fadeOut(400);
  });

  $(".graph_popup").on('click',function(){
      $(".graph_popup").fadeOut(400);
      $(".arrow").css({
        "height":0
      });
  });



});

function openReference(){
$(".ref_popup").fadeIn(400);
}

function openFootnote(){
$(".fot_popup").fadeIn(400);
}

function openpi(){
  $(".pi_popup").fadeIn(400);
  }
  
function graphopen(){

    $(".graph_popup").fadeIn(400);
    setTimeout(function(){
     graph=true;
      $(".arrow").animate({
        "height":"117px"
      },600);
    },200); 
} 