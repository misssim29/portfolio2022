$(window).ready(function(){
  setTimeout(function(){

  },500);

  $( ".slider" ).draggable({
    "axis": "x" ,  //가로
    containment:".imgbox",//영역 안에서
    drag: function( event, ui ) {
      $(".con1").css({
        "width": 426-ui.position.left+"px"
      });
      $(".con2").css({
        "width": ui.position.left+"px"
      });
    }
});


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

