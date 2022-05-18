$(function () {
    var currentObj;
    $( ".draggable" ).draggable({
        // "axis": "x" ,//가로로만 이동
        start:function(event, ui ) {
        currentObj = $(".ui-draggable-dragging");
    },
    containment:".dragContainer"//이 영역 안에서만 이동 
    });
    $( "#droppable" ).droppable({
        
      drop: function( event, ui ) {
          //영역안으로 드롭 했을때
        console.log($(this));
        var uiClass = currentObj.attr("class");
        if(uiClass.indexOf('drag1') != -1){
            $(".drag1").animate({
                "top":"-150px",
                "left":"223px"
            },300);
                setTimeout(function(){
                    $(".dragContainer").fadeOut(500);
                    $(".result").fadeIn(800);
    
                    setTimeout(function(){
                    window.parent.goNextSequence(); 
                    },1600);
                },800);
 
        }else{
            if(uiClass.indexOf('drag2') != -1){
                currentObj.animate({
                    "top":"-145px",
                    "left":"80px"
                },300);
            }else if(uiClass.indexOf('drag3') != -1){
                currentObj.animate({
                    "top":"-140px",
                    "left":"-55px"
                },300);
            }
            setTimeout(function(){
                $(".again").fadeIn(300);
            },300);
        }
         
      },
    });

    $(".again").on('click',function(){
        $(".again").hide();
        $(".draggable").animate({
            "top":"0",
            "left":"0"
        },300);
    });


});