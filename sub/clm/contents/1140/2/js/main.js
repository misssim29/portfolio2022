$( function() {
    setTimeout(function(){
        $(".mouth").fadeIn(300);
        $(".drug").fadeIn(300);
    },500);
    setTimeout(function(){
        $(".drug").addClass('drugAni');
        setTimeout(function(){
            $(".hightlight").addClass('hightAni');
            setTimeout(function(){
                $(".mouth").fadeOut(200);
                setTimeout(function(){
                    $(".zoom").fadeIn(200);
                },200);
            },1300); 
        },1600);
    },1000);
    
    $(".pipopup").on('click',function(){
        $(".pipopup").fadeOut(300);
    });
    $(".piButton").on('click',function(){
        $(".pipopup").fadeIn(300);
    });
    var startX = 0;
    var endX = 0;
    $(".event").on('mousedown',function(event){
        startX = event.pageX;
    });
    $(".event").on('mouseup',function(event){
        endX=event.pageX;
        if(endX-startX > 200 || startX-endX >200){
            window.parent.navigateToSequence('HITSONG-INTRO','animation')
        }
    });
    $(".event").on('touchstart',function(event){
        startX = event.originalEvent.changedTouches[0].screenX;
    });
    $(".event").on('touchend',function(event){
        endX=event.originalEvent.changedTouches[0].screenX;
        if(endX-startX  > 200 || startX-endX >200){
            window.parent.navigateToSequence('HITSONG-INTRO','animation')
        }
    });
  } );