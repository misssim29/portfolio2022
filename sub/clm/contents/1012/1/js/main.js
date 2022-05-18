$( function() {
    $( "#draggable" ).draggable({
        "axis": "x" ,//가로로만 이동
    containment:".dragContainer"//이 영역 안에서만 이동 
    });
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
          //영역안으로 드롭 했을때
        $( "#draggable" ).animate({
            "left":"500px"
        },500,function(){
            $( "#draggable" ).animate({
                "left":"510px"
            },200,function(){
                $( "#draggable" ).animate({
                    "left":"500px"
                },100);
            });
            // 더이상 드래그 못하도록 
            $( "#draggable" ).draggable("destroy");
        });
      },
      


    });
  } );