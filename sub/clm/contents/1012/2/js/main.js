$(function(){
    var maxNumber = $(".typing img").length;
    var imgIndex =0;
    setTimeout(function(){
        $(".titleLine").fadeIn(500);
    },500);
    setTimeout(function(){
        var imgInterval = setInterval(function(){
            $(".typing img").hide();
            $(".typing img").eq(imgIndex).show();
            imgIndex++;
            if(imgIndex>8){
                clearInterval(imgInterval);
                $(".typing img").eq(7).show();
                $(".searchResult01").fadeIn(1000);
            }
        },100);
    },500);

    setTimeout(function(){
        $(".searchResult02").animate({
            "width":"1024px"
        },800);
    },2000);
    setTimeout(function(){
        $(".searchResult03").animate({
            "width":"1024px"
        },800);
    },2800);
       
    
});