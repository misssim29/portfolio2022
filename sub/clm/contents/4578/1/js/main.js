$(function(){
    initAction(); //웹확인용 업로드시엔 아래 주석을 살려서 전환

    // CLMPlayer.registerEventListener('viewappearing', initAction);

    $(".wrap").swipe( {
        //Generic swipe handler for all directions        
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            // $(this).text("You swiped " + direction );
            if(direction=="left"){
                CLMPlayer.goNextSequence();
                return;
            }
            else if(direction=="right"){
                CLMPlayer.goPreviousSequence();
                return;
            }
            // $(".wrap").find('div').prop('style','');
        }
    });
});

function search(){
    $(".list tr").hide();
    var search_txt = $(".search_txt").val();
    var idx = $(".list tr:last").index();
    for(e=0;e<=idx;e++){
        var listH2 = $(".list tr:eq("+e+") td:eq(1)").text();
        var listP = $(".popup > div:eq("+e+") p").text();
        var listName = listH2 + listP;
        if(listName.indexOf(""+search_txt+"") != -1){
            $(".list tr:eq("+e+")").show();
        }
    }
}
function enterkey(){
    if (window.event.keyCode == 13) {
        $(".search_btn").click();
    }
}

function initAction(){
    // wrap 하위 모든 div의 style에 element를 초기화 시킨 후 액션 시행
$(".wrap").contents().prop('style','');
$(".wrap").find('button').prop('style','');
$(".popup").on('click',function(){
    $(this).fadeOut();
});
$(".list tr img").on('click',function(){
    $(".popup > div").hide();
    var idx = $(this).parent().parent().index();
    $(".popup").fadeIn();
    $(".popup > div:eq("+idx+")").fadeIn();
})
}



function fncGoSlide(seqNm,slideNm) {
    //	CLMPlayer.gotoSlide(sequenceId/sequenceName, slideName, animation);
        CLMPlayer.gotoSlide(seqNm, slideNm, null);
    }




