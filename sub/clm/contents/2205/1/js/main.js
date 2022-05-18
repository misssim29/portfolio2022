$( function() {
    
    setTimeout(function(){
        $(".title img").addClass('on');
    },800);
    
    setTimeout(function(){
         $(".folders .on").fadeIn();
         $(".folders .off").fadeOut();
    },2000);
    
    
    $(".folders li").on('click',function(){
   
    var idx = $(this).index();
        if(idx == 0){
             window.parent.navigateToSequence('Dwave-LG-Vimovo-Why-Naproxen02');
        }
        else if(idx == 1){
            window.parent.navigateToSequence('Dwave-LG-Vimovo-Why-Naproxen05');
        } 
        else if(idx == 2){
            window.parent.navigateToSequence('Dwave-LG-Vimovo-Why-Naproxen11');
        }

    });
    
    $(".btn_pi").on('click',function(){
       $(".popup").fadeIn();
    });
    $(".popup").on('click',function(){
        $(this).fadeOut();
    })

})