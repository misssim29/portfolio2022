$(window).ready(function(){


  setTimeout(function(){
    $(".heart").addClass("scale");
    setTimeout(function(){
      $(".left").addClass("fade");
      setTimeout(function(){
        $(".right").addClass("fade");
      },500);
    },500);
  },500);

  $(".ref_popup_close, .ref_popup_bg, .ref_popup").on('click',function(){
    $(".ref_popup").fadeOut(400);
    $(".reference").removeClass('on');
  });

  $(".fot_popup_close, .fot_popup_bg, .fot_popup").on('click',function(){
    $(".fot_popup").fadeOut(400);
    $(".footnote").removeClass('on');
  });

});

function openReference(){
$(".reference").addClass("on");
$(".ref_popup").fadeIn(400);
}

function openFootnote(){
$(".footnote").addClass("on");
$(".fot_popup").fadeIn(400);
}
