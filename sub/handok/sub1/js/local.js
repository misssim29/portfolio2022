$(function(){
    
    var broWid = $(".wrap").innerWidth();
    var broHei = $(".wrap").innerHeight();
    
    
    
})

    $(".menu").find("li").eq(0).mouseover(function(){
    $(".sub2").hide();
    $(".sub1").show();
});

$(".sub1").mouseleave(function(){
    $(".sub1").hide();
});


$(".menu").find("li").eq(1).mouseover(function(){
    $(".sub1").hide();
    $(".sub2").show();
});

$(".sub2").mouseleave(function(){
    $(".sub2").hide();
});

$(".menu").find("li").eq(2).mouseover(function(){
   $(".sub1").hide();
   $(".sub2").hide();
    
    
});

 $(".menu").find("li").eq(0).on('click',function(){
     $(".sub2").hide();
    $(".sub1").show();
});


$(".menu").find("li").eq(1).on('click',function(){
    $(".sub1").hide();
    $(".sub2").show();
});


$(".menu").find("li").eq(2).on('click',function(){
   $(".content > div").hide();
});






