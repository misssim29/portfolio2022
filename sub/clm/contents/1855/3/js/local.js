$(window).ready(function(){
  
  setInterval(function(){
    if($(".video").prop("ended")){
      com.veeva.clm.gotoSlide('veeva-soolantra-clm-04.zip','');
    }
  },200);

});

