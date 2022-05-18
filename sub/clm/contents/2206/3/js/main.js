$( function() {
    
        setTimeout(function(){
        $(".title").animate({'opacity':1},800);
            $(".title").addClass("on");
    },200);
    
    setTimeout(function(){
        $(".imp1").animate({'width':'432px'},500);
        setTimeout(function(){
           $(".imp2").animate({'height':'109px'},300);
            setTimeout(function(){
           $(".imp3").animate({'width':'432px'},500);
                 setTimeout(function(){
           $(".imp4").animate({'height':'109px'},300);
                      setTimeout(function(){
           $(".inside").animate({'opacity':'1'},500);
                          setTimeout(function(){ var a = 0 
while(a <= 1){ setTimeout(function(){ 
$(".important").css({opacity:0}); },a*450); 
setTimeout(function(){ $(".important").css({opacity:1}); 
},200+a*450); a++; 
} },600); 
        },300);
        },500);
        },300);
        },500);
    },2500);
  
    
    $(".prev").on('click',function(){
       window.parent.navigateToSequence('Dwave-LG-Vimovo-clm-are-you-at-risk02'); 
    });
     $(".home").on('click',function(){
       window.parent.navigateToSequence('Dwave-LG-Vimovo-clm-are-you-at-risk01'); 
    });
     $(".next").on('click',function(){
       window.parent.navigateToSequence('Dwave-LG-Vimovo-clm-are-you-at-risk04'); 
    });
    
})