$(function(){
    
    setTimeout(function(){
         var a = 0
         while(a <= 2){
         setTimeout(function(){
             $(".txt_on").css({opacity:0});
         },a*450);
         setTimeout(function(){
             $(".txt_on").css({opacity:1});
         },200+a*450);
             a++;
     }
    },200);
    
    setTimeout(function(){
        $(".graph_on").animate({"width":"643px"},1200);
    },1600);
    
    setTimeout(function(){
         var a = 0
         while(a <= 1){
         setTimeout(function(){
             $(".graph_on").css({opacity:0});
         },a*450);
         setTimeout(function(){
             $(".graph_on").css({opacity:1});
         },200+a*450);
             a++;
     }
    },3000);
    
   
    
})



$(".btn_pi").on('click',function(){
$(".popup img").css({opacity:0});
$(".popup").fadeIn();
$(".pi").animate({opacity:1});
});


$(".popup").on('click',function(){
    $(".popup").fadeOut();
    $(".popup img").animate({opacity:0});
});

$(".home").on('click',function(){
    com.veeva.clm.gotoSlide("msd_clm_s3_invanz01.zip.zip","");
});


$(".cont form textarea").focusout(function(){
    if($(this).val() == ""){
         $(".cont_img").show();
    }
   
});

 $(".cont form textarea").keydown(function(){
     if($(this).val() != ""){
         $(".feedback").fadeIn();
     }  
    })

$(".feedback").on('click',function(){
    var myClickStream = {};
    var txtVal = $(".cont > form > textarea").val();
    
    myClickStream.Question_vod__c = "Q2. 선생님, 안녕하십니까? 저희 한국MSD에서는 선생님들께서 항생제 처방에 있어 근거 중심의 의학적 논의를 만들어 가실 수 있는 자리를 만들고자 노력하고 있습니다. 향후 더욱 의미있는 주제로 찾아뵙기 위해 선생님의 고견을 여쭙니다.";
        myClickStream.Track_Element_Description_vod__c = "Q2. 선생님, 안녕하십니까? 저희 한국MSD에서는 선생님들께서 항생제 처방에 있어 근거 중심의 의학적 논의를 만들어 가실 수 있는 자리를 만들고자 노력하고 있습니다. 향후 더욱 의미있는 주제로 찾아뵙기 위해 선생님의 고견을 여쭙니다.";
     myClickStream.Answer_vod__c = txtVal;
     com.veeva.clm.createRecord("Call_Clickstream_vod__c",myClickStream,result);
    
})

function result(result){
    com.veeva.clm.gotoSlide("msd_clm_s3_invanz06.zip","");
}



