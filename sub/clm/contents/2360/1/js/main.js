$( function() {
 $(".btn_home").on('click',function(){
      window.parent.navigateToSequence('Dwave-sanofi-pasteur-pinwheel01');
 });
    
     $(".btn_pi").on('click',function(){
      window.parent.navigateToSequence('Dwave-sanofi-pasteur-pinwheel11');
 });
    
var timer1 = setTimeout(function(){
     $('.wheel').stop().animate({deg: 720},{duration:10000, step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)'});
    }}
  );
    setTimeout(function(){
        $(".title > div").css({'width':0});
        $(".title .txt").css({'opacity':0,'top':'10px'});
        $(".w1_txt").stop().animate({'width':'670px'},1000);
        setTimeout(function(){
            $(".w1_txt .txt").stop().animate({'opacity':1,'top':0},800)
        },1200)
    },10200);
},200);
    
var timer2 = setTimeout(function(){
$('.wheel').stop().animate({deg: 810},{duration:2000, step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
    }}
  );
    setTimeout(function(){
        $(".title > div").css({'width':0});
        $(".title .txt").css({'opacity':0,'top':'10px'});
        $(".w2_txt").stop().animate({'width':'670px'},1000);
        setTimeout(function(){
            $(".w2_txt .txt").stop().animate({'opacity':1,'top':0},800)
        },1200)
    },2200);
},13300);
    
var timer3 = setTimeout(function(){
        $('.wheel').stop().animate({deg: 900},{duration:2000, step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
    }}
  );

    setTimeout(function(){
        $(".title > div").css({'width':0});
        $(".title .txt").css({'opacity':0,'top':'10px'});
        $(".w3_txt").stop().animate({'width':'670px'},1000);
        setTimeout(function(){
            $(".w3_txt .txt").stop().animate({'opacity':1,'top':0},800)
        },1200)
    },2200);
},17300);
    
var timer4 = setTimeout(function(){
        $('.wheel').stop().animate({deg: 990},{duration:2000, step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
    }}
  );

    setTimeout(function(){
        $(".title > div").css({'width':0});
        $(".title .txt").css({'opacity':0,'top':'10px'});
        $(".w4_txt").stop().animate({'width':'670px'},1000);
        setTimeout(function(){
            $(".w4_txt .txt").stop().animate({'opacity':1,'top':0},800)
        },1200)
    },2200);
},21300);
    
    
    $(".w1").on('click',function(){
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        
        
        $('.wheel').stop().animate({deg: 720},{duration:2000, step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
    }});
         setTimeout(function(){
        $(".title > div").css({'width':0});
        $(".title .txt").css({'opacity':0,'top':'10px'});
        $(".w1_txt").animate({'width':'670px'},1000);
        setTimeout(function(){
            $(".w1_txt .txt").animate({'opacity':1,'top':0},800)
        },1200)
    },2200);
        
        setTimeout(function(){
            window.parent.navigateToSequence('Dwave-sanofi-pasteur-pinwheel02');
        },4600)
    });
    
    $(".w2").on('click',function(){
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        
        
        $('.wheel').stop().animate({deg: 810},{duration:2000, step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
    }});
         setTimeout(function(){
        $(".title > div").css({'width':0});
        $(".title .txt").css({'opacity':0,'top':'10px'});
        $(".w2_txt").stop().animate({'width':'670px'},1000);
        setTimeout(function(){
            $(".w2_txt .txt").stop().animate({'opacity':1,'top':0},800)
        },1200)
    },2200);
        
        setTimeout(function(){
            window.parent.navigateToSequence('Dwave-sanofi-pasteur-pinwheel04');
        },4600)
    });
    
    $(".w3").on('click',function(){
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        
        
        $('.wheel').stop().animate({deg: 900},{duration:2000, step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
    }});
         setTimeout(function(){
        $(".title > div").css({'width':0});
        $(".title .txt").css({'opacity':0,'top':'10px'});
        $(".w3_txt").stop().animate({'width':'670px'},1000);
        setTimeout(function(){
            $(".w3_txt .txt").stop().animate({'opacity':1,'top':0},800)
        },1200)
    },2200);
        
        setTimeout(function(){
            window.parent.navigateToSequence('Dwave-sanofi-pasteur-pinwheel06');
        },4600)
    });
    
    $(".w4").on('click',function(){
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        
        
        $('.wheel').stop().animate({deg: 990},{duration:2000, step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
    }});
         setTimeout(function(){
        $(".title > div").css({'width':0});
        $(".title .txt").css({'opacity':0,'top':'10px'});
        $(".w4_txt").stop().animate({'width':'670px'},1000);
        setTimeout(function(){
            $(".w4_txt .txt").stop().animate({'opacity':1,'top':0},800)
        },1200)
    },2200);
        
        setTimeout(function(){
            window.parent.navigateToSequence('Dwave-sanofi-pasteur-pinwheel08');
        },4600)
    })
    
    
  } );