$( function() {
    
    setTimeout(function(){
        $(".title").animate({'opacity':1},600)
    },2700)

    $(".btn_pi").on('click',function(){
       $(".popup").fadeIn();
    });
    $(".popup").on('click',function(){
        $(this).fadeOut();
    });
    
    
    $(".btn1").on('click',function(){
        window.parent.navigateToSequence('Dwave-LG-Vimovo-clm-are-you-at-risk02');
    });
    
    $(".btn2").on('click',function(){
         window.parent.navigateToSequence('Dwave-LG-Vimovo-clm-are-you-at-risk04');
    });
    
    $(".btn3").on('click',function(){
        window.parent.navigateToSequence('Dwave-LG-Vimovo-clm-are-you-at-risk06');
    });
    
    $(".btn4").on('click',function(){
        window.parent.navigateToSequence('Dwave-LG-Vimovo-clm-are-you-at-risk08');
    });
    
})