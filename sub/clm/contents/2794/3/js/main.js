$( function() {
    setTimeout(function(){
        $(".graph .g1").animate({'opacity':1,'top':0,'right':0},500);
        setTimeout(function(){
        $(".graph .g2").animate({'opacity':1,'top':0,'left':0},500);
            setTimeout(function(){
        $(".graph .g3").animate({'opacity':1,'top':0,'left':0},500);
                setTimeout(function(){
        $(".graph .g4").animate({'opacity':1,'top':0,'left':0},500)
    },500);
    },500);
    },500);
    },200);
    setTimeout(function(){
        $(".arrow").animate({'width':'95px'},500)
    },2300);
    setTimeout(function(){
        $(".result").addClass('on');
    },3100);
  } );