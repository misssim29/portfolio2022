$(function() {
   
    setTimeout(function(){
        $(".txt_on").animate({'width':'890px'},1000)
    },500);
    
    setTimeout(function(){
      $(".title").find('img').first().addClass('on');
      setTimeout(function(){
          $(".title").find('img').last().addClass('on');
      },300)
  },1400);
    
    setTimeout(function(){
    $(".arrow").animate({'width':'88px'},400)
    },2300);
    
    setTimeout(function(){
        $(".important").addClass('on');
    },3000);
    
    $(".btn_home").on('click',function(){
        window.parent.navigateToSequence('Dwave-LG-zelief-clm-pregabalin02');
    })
});

