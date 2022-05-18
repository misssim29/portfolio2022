$(function(){
    for(i=1; i<=5; i++){            
        (function(e){
            var runTime = 1000*e;
            setTimeout(function(){
                e = e+1;
                $(".slide"+e).animate({'opacity':1}, 500);
                if(e==4){
                    $(".map").fadeOut();
                    $(".map2").fadeIn();
                } 
            }, runTime);                  
        })(i);
    }

    $(".club_on").on('click',function(){
        $(this).css({'opacity':1});
        $(".mouseclick").show();
        setTimeout(function(){
            com.veeva.clm.gotoSlide("4274_clm_tremfya05.zip","");
        },500);
    });
});


function btn_home(){
    com.veeva.clm.gotoSlide("4274_clm_tremfya01.zip","");
}
function btn_pi(){
    com.veeva.clm.gotoSlide("4274_clm_tremfya12.zip","");
}





