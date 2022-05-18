function home(){
    com.veeva.clm.gotoSlide("3940_clm_jardiance_endo01.zip","");
}
function goto1(){
    com.veeva.clm.gotoSlide("3940_clm_jardiance_endo02.zip","");
}
function goto2(){
    com.veeva.clm.gotoSlide("3940_clm_jardiance_endo06.zip","");
}
function goto3(){
    com.veeva.clm.gotoSlide("3940_clm_jardiance_endo08.zip","");
}
function goto4(){
    com.veeva.clm.gotoSlide("3940_clm_jardiance_endo10.zip","");
}
function goto5(){
    com.veeva.clm.gotoSlide("3940_clm_jardiance_endo16.zip","");
}
function goto6(){
    com.veeva.clm.gotoSlide("3940_clm_jardiance_endo17.zip","");
}
function goto7(){
    com.veeva.clm.gotoSlide("3940_clm_jardiance_endo18.zip","");
}
function pi(){
    com.veeva.clm.gotoSlide("3940_clm_jardiance_endo22.zip","");
}
function ref(){
    $(".ref").fadeIn();
}
function fn(){
    $(".fn").fadeIn();
}

$(function(){

    $(".date1 .zoom").on('click',function(){
        $(".plus1").fadeIn();
    });
    
    $(".plus1").on('click',function(){
        $(this).fadeOut();
    });

    $(".date2 .zoom").on('click',function(){
        $(".plus2").fadeIn();
    });
    
    $(".plus2").on('click',function(){
        $(this).fadeOut();
    });

    $(".date3 .zoom").on('click',function(){
        $(".plus3").fadeIn();
    });
    
    $(".plus3").on('click',function(){
        $(this).fadeOut();
    });
    $(".ref").on('click',function(){
        $(this).fadeOut();
    });          
    $(".fn").on('click',function(){
        $(this).fadeOut();
    });
                
    $(".zone").draggable({
containment : ".canvas",
start : function( event, ui){
dragging = $(".ui-draggable-dragging");
}    
});

$("#droppable").droppable({
drop: function( event, ui ) {
var dragclass = dragging.attr("class");

}    
});

$(".btn").mousedown(function(){
$(this).addClass('on');
});

$(".btn").mouseup(function(){
$(this).removeClass('on');
});
$(".canvas").mousemove(function(event){
var ActiveOn = $(".btn").attr('class');
if(ActiveOn.indexOf('on') != -1){
var x = $(".zone").position().left;
var y = event.pageY;
console.log(x);
$(".bar_on").css({'width':x+"px"});
if(140 < x && 290 > x){
    $(".date div").removeClass('on').addClass('off');
    $(".date1").removeClass('off').addClass('on');
    $(".txt1").removeClass('off').addClass('on');
    $(".date .zoom").hide();
    $(".date1 .zoom").show();
}
else if(360 < x && 530 > x){
    $(".date div").removeClass('on').addClass('off');
    $(".date2").removeClass('off').addClass('on');
    $(".txt2").removeClass('off').addClass('on');
    $(".date .zoom").hide();
    $(".date2 .zoom").show();
}
else if(590 < x && 760 > x){
    $(".date div").removeClass('on').addClass('off');
    $(".date3").removeClass('off').addClass('on');
    $(".txt3").removeClass('off').addClass('on');
    $(".date .zoom").hide();
    $(".date3 .zoom").show();
}
else{
    $(".date div").removeClass('on').addClass('off');
    $(".date .zoom").hide();
}
}    
});
});







