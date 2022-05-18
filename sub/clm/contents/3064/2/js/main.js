$( function() {
    setTimeout(function(){ var a = 0 
        while(a <= 2){ setTimeout(function(){ 
        $(".title").css({opacity:0}); },a*450); 
        setTimeout(function(){ $(".title").css({opacity:1}); 
        },200+a*450); a++; 
        } },200);
    
    setTimeout(function(){
        $(".cell1").animate({'opacity':1},300);
        setTimeout(function(){
        $(".cell2").animate({'opacity':1},300);
            setTimeout(function(){
        $(".cell3").animate({'opacity':1},300);
                setTimeout(function(){
        $(".cell4").animate({'opacity':1},300);
                    setTimeout(function(){
        $(".cell5").animate({'opacity':1},300);
    },400);
    },400);
    },400);
    },400);
    },1500);
    
    
  } );