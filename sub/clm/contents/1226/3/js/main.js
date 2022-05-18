$( function() {

  setTimeout(function(){
    $(".graph_be").animate({
      "height":"79px"
    },700,function(){
      $(".graph_be").fadeOut(300);
      $(".graph").fadeIn(300);
    });
  },500);

  setTimeout(function(){
    $(".right-graph").animate({
      "height":"334px"
    },800);
  },2000);
    

$(".studyButton").on('click',function(){
  $(".studyPopup").fadeIn(300);
});

$(".popup").on('click',function(){
  $(".popup").fadeOut(300);
});

});