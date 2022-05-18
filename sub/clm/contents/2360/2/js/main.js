$( function() {
 $(".btn_home").on('click',function(){
      window.parent.navigateToSequence('Dwave-sanofi-pasteur-pinwheel01');
 });
    
     $(".btn_pi").on('click',function(){
      window.parent.navigateToSequence('Dwave-sanofi-pasteur-pinwheel11');
 });

$(".zoom").addClass('on');
    $(".zoom").on('click',function(){
        $(this).removeClass('on');
        $(".response").animate({'opacity':1},800);
        
        setTimeout(function(){
            $(".popup").fadeIn()
        },1000);
    });
    
    $(".popup").on('click',function(){
        $(this).fadeOut();
    })
  } );