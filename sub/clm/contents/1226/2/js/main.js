$( function() {
  setTimeout(function(){
    $(".zemi01, .zemi02").fadeIn(500).addClass("zemi");
  },500);

  setTimeout(function(){
    $(".table01").fadeIn(300);
    $(".table02").animate({
      "top":"405px",
      "opacity":"1"
    },500);
    $(".table03").animate({
      "top":"510px",
      "opacity":"1"
    },700);
    $(".table04").animate({
      "top":"610px",
      "opacity":"1"
    },900);
  },2000)

  $(".studyButton").on('click',function(){
    $(".studyPopup").fadeIn(300);
  });

  $(".popup").on('click',function(){
    $(".popup").fadeOut(300);
  });

});