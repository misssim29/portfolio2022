
function nav1(){
    com.veeva.clm.gotoSlide("3590_clm_olumiant02.zip","");
}
function nav2(){
    com.veeva.clm.gotoSlide("3590_clm_olumiant03.zip","");
}
function nav3(){
    com.veeva.clm.gotoSlide("3590_clm_olumiant08.zip","");
}
function nav4(){
    com.veeva.clm.gotoSlide("3590_clm_olumiant12.zip","");
}
function nav5(){
    com.veeva.clm.gotoSlide("3590_clm_olumiant19.zip","");
}
setTimeout(function(){
    $(".title").animate({'opacity':1},500);
},200);
setTimeout(function(){
    $(".cont_bg").addClass('on');
},900);
setTimeout(function(){
    for(i=1; i<=4; i++){            
        (function(e){
            var runTime = 400*e;
            setTimeout(function(){
                $(".imp"+e).animate({'opacity':1}, 200);
            }, runTime);                  
        })(i);
    }
},1800);


$(".btns button").on('click',function(){
    $(".btns button .on").hide();
    $(this).find('.on').show();
    $(".popup").fadeIn();
    $(".popup > div").hide();
    var idx = $(this).index();
    if(idx == 0){
        $(".isi").fadeIn();
        $(".palagon").css({'right':'220px'});
    }
    if(idx == 1){
        $(".pi").fadeIn();
        $(".palagon").css({'right':'171px'});
    }
    if(idx == 2){
        $(".ts").fadeIn();
        $(".palagon").css({'right':'126px'});
    }
    if(idx == 3){
        $(".ref").fadeIn();
        $(".palagon").css({'right':'78px'});
    }
    if(idx == 4){
        $(".def").fadeIn();
        $(".palagon").css({'right':'29px'});
    }
});
$(".close").on('click',function(){
    $(".popup").fadeOut();
});

