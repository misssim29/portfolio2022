function btn_home(){
    com.veeva.clm.gotoSlide("dp3263_handok_adacel01.zip","");
}
function btn_pi(){
    com.veeva.clm.gotoSlide("dp3263_handok_adacel12.zip","");
}
function nav1(){
    com.veeva.clm.gotoSlide("dp3263_handok_adacel02.zip","");
}
function nav2(){
    com.veeva.clm.gotoSlide("dp3263_handok_adacel07.zip","");
}
function btn_ref(){
    $(".btn_ref").removeClass('off');
    $(".btn_ref").addClass('on');
    $(".popup").fadeIn();
}
$(".popup").on('click',function(){
    $(this).fadeOut();
    $(".btn_ref").removeClass('on');
    $(".btn_ref").addClass('off');
});

$(function(){
    setTimeout(function(){
        $(".title").animate({'width':'1024px'},1300);
    },200);
    setTimeout(function(){
        for(i=1; i<=5; i++){            
            (function(e){
                var runTime = 600*e;
                setTimeout(function(){
                    $(".cont"+e).addClass('on');
                }, runTime);                  
            })(i);
        }
    },1200)
    setTimeout(function(){
        $(".imp").addClass('on');
    },3800)
});