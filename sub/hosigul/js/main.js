$( function() {
    $( "#draggable" ).draggable({ containment: "#containment-wrapper", scroll: false});

    var audio1 = new Audio('media/sound_train.mp3');
    var audio2 = new Audio('media/sound_cloud.mp3');
    var audio3 = new Audio('media/sound_bg.mp3');
    setTimeout(function(){
        audio1.play();
    },200);
    setTimeout(function(){
        audio1.pause();
    },3600);
    setTimeout(function(){
        audio2.play();
    },3800);
    setTimeout(function(){
        $(".intro1").fadeOut("slow");
        $(".intro2").fadeIn("slow");
    },3500);
    setTimeout(function(){
        $(".cloud1").animate({'opacity':0,'left':"-10%"},2000);
        $(".cloud2").animate({'opacity':0,'right':0},2000);
        $(".cloud3").animate({'opacity':0,'left':0},2000);
        $(".cloud4").animate({'opacity':0,'left':"10%"},2000);
        $(".cloud5").animate({'opacity':0,'right':"10%"},2000);
        $(".cloud6").animate({'opacity':0,'left':"5%",'bottom':'10%'},2000);
        $(".cloud7").animate({'opacity':0,'left':"15%",'top':'5%'},2000);
        $(".cloud8").animate({'opacity':0,'right':"20%",'bottom':'15%'},2000);
        $(".cloud9").animate({'opacity':0,'left':"5%",'top':'10%'},2000);
        $(".cloud10").animate({'opacity':0,'right':"5%",'bottom':'10%'},2000);
        $(".cloud11").animate({'opacity':0,'right':"-5%",'bottom':'15%'},2000);
    },4000);

    setTimeout(function(){
        $(".intro").fadeOut("slow");
    },7000);
    $(".btns img").on('click',function(){
        var idx = $(this).index()+1;
        $(".popup").show().animate({'right':0},1000);
        $(".popup"+idx).show();
        setTimeout(function(){
            $(".close").fadeIn();
        },1000);
    });
    $(".close").on('click',function(){
        $(".close").fadeOut();
        $(".popup").animate({'right':'-100vw'},1000);
        setTimeout(function(){
            $(".popup").hide();
            $(".popup > div").hide();
            $("#return").hide();
        },1000);
    });

    
    $(".popup_dm .pi").on('click',function(){
        $(".pages").fadeIn();
        $(".page_pi").fadeIn();
        $(".popup_dm").fadeOut();
        $(".pages #return").fadeIn();
    });
    $(".popup_dm .goto2005").on('click',function(){
        $(".pages").fadeIn();
        $(".page1").fadeIn();
        $(".popup_dm").fadeOut();
        $(".pages #return").fadeIn();
    });
    $(".popup_dm .goto2015").on('click',function(){
        $(".pages").fadeIn();
        $(".page2").fadeIn();
        $(".popup_dm").fadeOut();
        $(".pages #return").fadeIn();
    });
    $(".popup_dm .goto2018").on('click',function(){
        $(".pages").fadeIn();
        $(".page3").fadeIn();
        $(".popup_dm").fadeOut();
        $(".pages #return").fadeIn();
    });
    $(".pages .return").on('click',function(){
        $(".pages").fadeOut();
        $(".pages > div").fadeOut();
        $(".popup_dm").fadeIn();
        $(this).hide();
    });
    $(".popup4 .return").on('click',function(){
        $(".quiz2").fadeOut();
        $(".quiz1").fadeIn();
        $(this).hide();
        $(".popup_quiz .next").fadeIn();
    });

    $(".page1 .more").on('click',function(){
        $(".result1").fadeIn();
    });
    $(".page2 .more").on('click',function(){
        $(".result2").fadeIn();
    });
    $(".page3 .more").on('click',function(){
        $(".result3").fadeIn();
    });

    $(".popup_quiz .quiz1 .btn_result").on('click',function(){
        $(this).find('img').fadeIn();
    });
    $(".popup_quiz .quiz2 .btn_result").on('click',function(){
        $(this).find('img').fadeIn();
    });
    $(".popup_quiz .next").on('click',function(){
        $(this).fadeOut();
        $(".popup_quiz .quiz1").fadeOut();
        $(".popup_quiz .quiz2").fadeIn();
        $(".popup4 #return").fadeIn();
    });
    $(".popup_quiz .quiz2 .btn_result").on('click',function(){
        $(".popup_quiz .quiz2 .result").fadeIn();
    });
    $(".btn_sound").on('click',function(){
        var onOff = $(this).attr('class');
        if(onOff.indexOf('on')!= -1){
            $(this).removeClass('on').addClass('off');
            audio3.pause();
        }else{
            $(this).removeClass('off').addClass('on');
            audio3.play();
        setInterval(function(){
            audio3.pause();
            audio3.currentTime = 0;
            audio3.play();
        },60000);
        }
        
    });
});


