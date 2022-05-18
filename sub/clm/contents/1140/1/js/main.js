$( function() {

    $(".link .trackbox").on('click',function(){
        var index = $(this).index()+1;
        $(".track"+index+" .track img").css({
            "top":"6px"
        });
        $(".recordlist").removeClass('rotate').hide();
        $(".record"+index).show();
        $(".record"+index).animate({
            "left":"130px"
        },300,function(){
            $(".record"+index).addClass('rotate');
        });

        setTimeout(function(){
            if(index==1){
                window.parent.navigateToSequence('HITSONG-01');
            }else if(index==2){
                window.parent.navigateToSequence('HITSONG-02');
            }else if(index==3){
                window.parent.navigateToSequence('HITSONG-03');
            }else if(index==4){
                window.parent.navigateToSequence('HITSONG-04');
            }else if(index==5){
                window.parent.navigateToSequence('HITSONG-05');
            }
        },1600);

        
    });

  
  } );