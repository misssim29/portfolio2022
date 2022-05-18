$(function(){
    setTimeout(function(){
        $(".zoom").fadeIn();
        $(".play").fadeIn();
        $(".talk").fadeIn();
    },200);
    setTimeout(function(){
        $(".zoom").addClass('on');
        $(".play").addClass('on');
    },700);
});

$(".poster").on('click',function(){
/*    
    $(".popup").fadeIn();
    $(".popup > div").hide();
    $(".popup .ad").show();
    $(".return").show();
*/    
});

$(".stand").on('click',function(){
    location.href = './vae_tool/index.html';
    /*
    $(".popup").fadeIn();
    $(".popup > div").hide();
    $(".popup .info").show();
    $(".return").show();
    $(".scroll").show();
    $(".html,body,.popup").animate({scrollTop:0});
    */
});

$(".scroll").on('click',function(){
    $("html,body,.popup").stop().animate({scrollTop:1500});
});

$(".video_content").on('click',function(){
    $(".popup").fadeIn();
    $(".popup > div").hide();
    $(".popup_video").show();
    $(".return").show();
    $(".popup_play").show();
});


$(".video_study").on('click',function(){    
    $(".popup").fadeIn();
    $(".popup > div").hide();
    $(".popup_study").show();    
    $(".return").show();        
});


var video = document.getElementById("video_mp4");

$(".popup_play").on('click',function(){
    $(this).hide();
video.play();
});

var a = 0;
var ratio = window.innerHeight/window.innerWidth;
if(ratio > 0.462){
$(window).resize(function(){
    var ratio = window.innerHeight/window.innerWidth;
            if(ratio <= 0.462){
        window.location.reload();
        }
});}
else{
    $(window).resize(function(){
        var ratio = window.innerHeight/window.innerWidth;
                if(ratio > 0.462){
        window.location.reload();
                    
        }
}); 
}
$(function(){
            if(ratio > 0.462){
            $(".popup_clm").animate({'left':0},300);
            a = 0;
                
            $(".next").on('click',function(){
        a++;
    if(a < 10){
        $(".prev").show();    
    $(".popup_clm").animate({'left':'-60'*a+'vw'},300);
    }
    
    else{
        alert("마지막 페이지입니다.");
        a--;
    }
     
});
    
    $(".prev").on('click',function(){
   if(a >= 0){
       a--;
       $(".popup_clm").animate({'left':'-60'*a+'vw'},300);
   }
    
    if(a == 0){
        $('.prev').hide();
    } 
                        
        });
                    }
                    
    
    else{
        $(".popup_clm_wrap").css({width:'50vw',height:'36.1vw'});
        $(".popup_clm img").css({width:'50vw'});
            $(".popup_clm").animate({'left':0},300);
        a = 0;

            $(".next").on('click',function(){
        a++;
    if(a < 10){
        $(".prev").show();    
    $(".popup_clm").animate({'left':'-50'*a+'vw'},300);
    }
    
    else{
      //        alert("마지막 페이지입니다.");
        console.log(a);
        a--;
    }
     
});
    
    $(".prev").on('click',function(){
   if(a >= 0){
       a--;
       $(".popup_clm").animate({'left':'-50'*a+'vw'},300);
   }
    
    if(a == 0){
        $('.prev').hide();
    }
});   
           
       } 

});



$(".link").on('click',function(){
    window.open("portfolio/index.html");
});

$(".return").on('click',function(){
    $(".popup").fadeOut();
    video.pause();
    $(".clm").removeClass('resize');
});

$(".go_home").on('click',function(){
    a = 0;
   $(".popup_clm").animate({'left':0},300);
    $(".prev").hide();
});

$(".nav1").on('click',function(){
    a = 2;
    if(ratio > 0.462){
        $(".popup_clm").animate({'left':'-120vw'},300);
    }
    else{
        $(".popup_clm").animate({'left':'-100vw'},300);
    }
    $(".prev").show();
});

$(".nav2").on('click',function(){
    a = 3;
    if(ratio > 0.462){
        $(".popup_clm").animate({'left':'-240vw'},300);
    }
    else{
        $(".popup_clm").animate({'left':'-200vw'},300);
    }
    $(".prev").show();
});

$(".nav3").on('click',function(){
    a = 5;
    if(ratio > 0.462){
        $(".popup_clm").animate({'left':'-360vw'},300);
    }
    else{
        $(".popup_clm").animate({'left':'-300vw'},300);
    }
    $(".prev").show();
});

$(".nav4").on('click',function(){
    a = 7;
    if(ratio > 0.462){
        $(".popup_clm").animate({'left':'-480vw'},300);
    }
    else{
        $(".popup_clm").animate({'left':'-400vw'},300);
    }
    $(".prev").show();
});

function fncPlayVideo(videoNum){
    var videoSrc = "https://www.youtube.com/embed/";
    switch (videoNum){
        case 2:
            videoCode = "HW0thhGB9QU"
            break;
        case 3:
            videoCode = "50UqIB6KREQ";
            break;
        case 4:
            videoCode = "CBFUjb731ec";
            break;
        case 5:
            videoCode = "N3p1m9ZqAsw";
            break;
        default:
            videoCode = "I8iZYOHagfY";
    }
    $("#ifPlayVideo").prop("src", videoSrc+videoCode);
}