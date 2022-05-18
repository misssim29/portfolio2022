$(function(){

    initAction();
    // CLMPlayer.registerEventListener('viewappearing', initAction);

    $(".wrap").swipe( {
        //Generic swipe handler for all directions        
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            // $(this).text("You swiped " + direction );
            if(direction=="left"){
                goPage(1);
                return;
            }
            else if(direction=="right"){
                goPage(-1);
                return;
            }
        }
    });

    $(".popup").click(function(){
        fncClosePop();
    });

    
});

var pageNo = 3;
var maxNo = 8;


function initAction(){
    // wrap 하위 모든 div의 style에 element를 초기화 시킨 후 액션 시행
    // $(".wrap").find('div').prop('style','');
    // $(".wrap").contents().prop('style','');
    $("*").prop('style','');
    $(".donut > svg").css("display", "none");

    setTimeout(function() {
        fncSlideUp('.title');
    }, 1000);
    setTimeout(function() {
        $(".donut > svg").css("display", "block");
    }, 2000);
    setTimeout(function() {        
        fncBlink('.donutText', 1, 500);        
    }, 4000);
}

function linkPage(pageNo){
    var urlPath;    
    var urlNo = parseInt(pageNo,0);
    urlPath = urlNo < 10 ? '0'+urlNo+'_index.html' : urlNo+'_index.html';

    fncGoSlide(null, urlPath);
}

function goPage(pageGb){
    var urlPath;    
    if(pageNo > 1 && pageNo < maxNo){
        urlNo = pageNo+parseInt(pageGb,0);
        urlPath = urlNo < 10 ? '0'+urlNo+'_index.html' : urlNo+'_index.html';        
    } else {
        if(pageNo == 1 && pageGb == -1){
            CLMPlayer.alert('This slide is the first');
            return;
        } else if(pageNo == maxNo && pageGb == 1){
            CLMPlayer.alert ('This slide is the last. no more slide.')
            return;
        } else {
            urlNo = pageNo+parseInt(pageGb,0);
            urlPath = urlNo < 10 ? '0'+urlNo+'_index.html' : urlNo+'_index.html';
        }
    }
    fncGoSlide(null, urlPath);
}

function fncGoSlide(seqNm,slideNm) {
    //	CLMPlayer.gotoSlide(sequenceId/sequenceName, slideName, animation);
        CLMPlayer.gotoSlide(seqNm, slideNm, null);
}
    
function fncGoSeq(moveType){
    if(moveType == -1) {
        CLMPlayer.goPreviousSequence();
    } else {
        CLMPlayer.goNextSequence();
    }	
}

function fncShowTitle(titleCnt) {
    for(i=1; i<=titleCnt; i++){            
        (function(e){
            var runTime = 500*e;
            setTimeout(function(){
                $("#title_"+e).animate({'width':'1024px'}, 2000);
            }, runTime);                  
        })(i);
    }            
}

/*********************************************************************
투명도 1로 나타났다가 
runCnt = 깜박임횟수(파라미터 없으면 1회 깜빡임)
gapTime = 깜박임 간격(파라미터 없으면 1초 간격)
*********************************************************************/
function fncBlink(obj, runCnt, gapTime){

    var runCnt = runCnt == undefined ? 1 : runCnt;
    var gapTime = gapTime == undefined ? 1000 : gapTime;

    $(obj).animate({"opacity":1}, 0);
    
    for(i=1; i<=runCnt; i++) {        
        (function(e){            
            var runtTime = e*gapTime;
            setTimeout(function(){
                $(obj).css({"opacity":0})
            }, runtTime);
            setTimeout(function(){
                $(obj).css({"opacity":1})
            }, runtTime+200);
        })(i);
    } 
    
}

function fncUpGraph(obj) {
    var imgHeight = $(obj+" > img").height();
    $(obj).animate({'height':imgHeight}, 1000);    
}

function fncWideGraph(obj){
    var imgWidth = $(obj+" > img").width();
    $(obj).animate({'width':imgWidth}, 1000);
}

function fncSlideUp(obj){    
    var imgHeight = $(obj+" > img").height();

    //애니메이션 수행으로 입력 된 스타일 값 초기화.
    $(obj).prop('style', '');

    //실행 대상의 초기 css 값 설정(레이어 밖으로 투명도 0으로)
    $(obj).css({"opacity":0,"padding-top":imgHeight});
    //실행 대상을 나타내고 레이어 안으로 이동
    $(obj).stop().animate({"opacity":1,"padding-top":"0px"}, 1000);
}

function fncSlideDown(obj){
    var imgHeight = $(obj+" > img").height();
    
    //애니메이션 수행으로 입력 된 스타일 값 초기화.
    $(obj+" > img").prop('style', '');

    //실행 대상의 초기 css 값 설정(레이어 밖으로 투명도 0으로)
    $(obj+" > img").css({"opacity":0,"margin-top":-imgHeight});    
    $(obj).css({"opacity":0});
    //실행 대상을 나타내고 레이어 안으로 이동
    $(obj+" > img").stop().animate({"opacity":1,"margin-top":"0px"}, 1000);
    $(obj).stop().animate({"opacity": 1}, 2000);
}

function fncHide(obj, runTime){
    var runTime = runTime == undefined ? 1000 : runTime;
    $(obj).animate({"opacity":0}, runTime);
}

function fncOpenPop(obj){

    $(".popup").hide();
    $(".blind").show();
    $(obj).show();

}

function fncClosePop(obj){    
    if(obj){
        alert (obj);
        $(obj).hide();        
    } else {
        $(".popup").hide();
    }

    $(".blind").hide();
}


