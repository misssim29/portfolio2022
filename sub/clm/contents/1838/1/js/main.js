$(function() {
   
    setTimeout(function(){
        $(".txt_on").animate({'width':'890px'},1000)
    },500);
    
    setTimeout(function(){
      $(".title").find('img').first().addClass('on');
      setTimeout(function(){
          $(".title").find('img').last().addClass('on');
      },300)
  },1500);
    
    setTimeout(function(){
         $(".blue > div").addClass("ani");
    $(".red > div").addClass("ani");
    
    },2400);
    
    $(".btn_home").on('click',function(){
        window.parent.navigateToSequence('Dwave-LG-zelief-clm-pregabalin02');
    })
});

