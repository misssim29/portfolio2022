$(function() {
    $(".btn_home").click(function() {
        fncGotoSlide('4209_clm_janssen_sustenna_study_01.zip', '');
    });

    $(".btn_pi").click(function() {
        fncGotoSlide('4209_clm_janssen_sustenna_study_22.zip', '');
    });

    $(".btn_prev").click(function() {
        fncGoPage(-1);
    });

    $(".content_1").click(function() {
        fncGotoSlide('4209_clm_janssen_sustenna_study_02.zip', '');
    });

    $(".content_2").click(function() {
        fncGotoSlide('4209_clm_janssen_sustenna_study_04.zip', '');
    });

    $(".content_3").click(function() {
        fncGotoSlide('4209_clm_janssen_sustenna_study_05.zip', '');
    });

    $(".content_4").click(function() {
        fncGotoSlide('4209_clm_janssen_sustenna_study_08.zip', '');
    });

    $(".content_5").click(function() {
        fncGotoSlide('4209_clm_janssen_sustenna_study_10.zip', '');
    });

});


//현재파일의 페이지번호
var page = 2;
//프리젠테이션의 마지막 페이지번호
var maxPage = 22;


//화면 로딩과 함께 구동 할 효과 서술
function initAction() {



    // setTimeout(function() {
    //     fncBlink('.box.img_1', 1, 500);
    // }, 1000);
    // setTimeout(function() {
    //     fncBlink('.box.img_2', 1, 500);
    // }, 2500);
    // setTimeout(function() {
    //     fncBlink('.box.img_3', 1, 500);
    // }, 4000);

}


/*********************************************************************
moveType(1: 다음페이지, -1: 이전페이지)
*********************************************************************/
function fncGoPage(moveType) {
    if (moveType == 1) {
        if (page == maxPage) {
            alert('This page is the last');
            return;
        } else {
            // CLMPlayer.goNextSequence(); //OCE 다음시퀀스(슬라이드이동이 아님. 시퀀스 이동)
            com.veeva.clm.nextSlide(); //비바
            // window.parent.goNextSequence(); //아이큐비아
        }

    } else if (moveType == -1) {
        if (page == 1) {
            alert('This page is the first');
            return;
        } else {
            // CLMPlayer.goPreviousSequence(); //OCE 이전시퀀스(슬라이드이동이 아님. 시퀀스 이동)
            com.veeva.clm.prevSlide(); //비바
            // window.parent.goPreviousSequence(); //아이큐비아
        }

    }
}

/*********************************************************************
pageId = 이동할 슬라이드의 파일명
*********************************************************************/
function fncGotoSlide(pageId) {
    // CLMPlayer.gotoSlide('시퀀스명', 슬라이드파일이름, null);  //OCE
    com.veeva.clm.gotoSlide(pageId, ''); //비바용 슬라이드이동
    // window.parent.navigateToSequence(pageId); //아이큐비아용 이동
    return (false);
}

/*********************************************************************
해당 객체의 스타일의 투명도는 반드시 0으로 지정할 것.
runCnt = 깜박임횟수(파라미터 없으면 1회 깜빡임)
gapTime = 깜박임 간격(파라미터 없으면 1초 간격)
*********************************************************************/
function fncBlink(obj, runCnt, gapTime) {

    var runCnt = runCnt == undefined ? 1 : runCnt;
    var gapTime = gapTime == undefined ? 1000 : gapTime;

    $(obj).animate({ "opacity": 1 }, 200);

    for (i = 1; i <= runCnt; i++) {
        (function(e) {
            var runtTime = e * gapTime;
            setTimeout(function() {
                $(obj).css({ "opacity": 0 })
            }, runtTime);
            setTimeout(function() {
                $(obj).css({ "opacity": 1 })
            }, runtTime + 200);
        })(i);
    }

}

/*********************************************************************
그래프 옆으로 그리기(꺾은선 그래프)
div {width:0;}
div img{width: 뷰포트기준_이미지사이즈(예: 35.5vw);}
*********************************************************************/
function fncWidthUp(obj, runTime) {
    var runTime = runTime == undefined ? 1000 : runTime;
    var imgWidth = $(obj + " > img").width();
    $(obj).animate({ 'width': imgWidth }, runTime);
}

/*********************************************************************
그래프 위로(막대그래프 위로 커지기)
div {width:이미지크기%; height:0;}
div img{width: 100%;}
*********************************************************************/
function fncHeightUp(obj) {
    var imgHeight = $(obj + " > img").height();
    $(obj).animate({ 'height': imgHeight }, 1000);
}

/*********************************************************************
위로 올라오면서 나타나기
해당 객체의 스타일의 투명도는 반드시 0으로 지정할 것.
*********************************************************************/
function fncSlideUp(obj) {
    var imgHeight = $(obj + " > img").height();
    //애니메이션 수행으로 입력 된 스타일 값 초기화.
    $(obj).prop('style', '');

    //실행 대상의 초기 css 값 설정(레이어 밖으로 투명도 0으로)
    $(obj).css({ "opacity": 0, "padding-top": imgHeight });
    //실행 대상을 나타내고 레이어 안으로 이동
    $(obj).stop().animate({ "opacity": 1, "padding-top": "0px" }, 1000);
}

/*********************************************************************
아래로 내려가면서 나타나기
해당 객체의 스타일의 투명도는 반드시 0으로 지정할 것.
*********************************************************************/
function fncSlideDown(obj) {
    var imgHeight = $(obj + " > img").height();

    //애니메이션 수행으로 입력 된 스타일 값 초기화.
    $(obj + " > img").prop('style', '');

    //실행 대상의 초기 css 값 설정(레이어 밖으로 투명도 0으로)
    $(obj + " > img").css({ "opacity": 0, "margin-top": -imgHeight });
    $(obj).css({ "opacity": 0 });
    //실행 대상을 나타내고 레이어 안으로 이동
    $(obj + " > img").stop().animate({ "opacity": 1, "margin-top": "0px" }, 1000);
    $(obj).stop().animate({ "opacity": 1 }, 2000);
}

/*********************************************************************
오른쪽으로 이동하면서 나타나기
해당 객체의 스타일의 투명도는 반드시 0으로 지정할 것.
*********************************************************************/
function fncSlideRight(obj) {
    var imgWidth = $(obj + " > img").width();

    //애니메이션 수행으로 입력 된 스타일 값 초기화.
    $(obj + " > img").prop('style', '');

    //실행 대상의 초기 css 값 설정(레이어 밖으로 투명도 0으로)
    $(obj + " > img").css({ "opacity": 0, "margin-left": -imgWidth });
    $(obj).css({ "opacity": 0 });
    //실행 대상을 나타내고 레이어 안으로 이동
    $(obj + " > img").stop().animate({ "opacity": 1, "margin-left": "0px" }, 1000);
    $(obj).stop().animate({ "opacity": 1 }, 2000);
}

/*********************************************************************
왼쪽으로 이동하면서 나타나기
해당 객체의 스타일의 투명도는 반드시 0으로 지정할 것.
*********************************************************************/
function fncSlideLeft(obj) {
    var imgWidth = $(obj + " > img").width();

    //애니메이션 수행으로 입력 된 스타일 값 초기화.
    $(obj + " > img").prop('style', '');

    //실행 대상의 초기 css 값 설정(레이어 밖으로 투명도 0으로)
    $(obj + " > img").css({ "opacity": 0, "margin-left": imgWidth });
    $(obj).css({ "opacity": 0 });
    //실행 대상을 나타내고 레이어 안으로 이동
    $(obj + " > img").stop().animate({ "opacity": 1, "margin-left": "0px" }, 1000);
    $(obj).stop().animate({ "opacity": 1 }, 2000);
}


/*********************************************************************
동일 노드의 그룹핑 된 클래스를 순서대로 나타내기
해당 객체의 스타일의 투명도는 반드시 0으로 지정할 것.
예: class="test_1", class="test_2", class="test_3" 세개의 객체를 순서대로
나타내고 싶을 때 fncShowGroup('test', 3);
*********************************************************************/
function fncShowGroup(obj, imgCnt, gapTime) {
    var imgCnt = imgCnt == undefined ? 1 : imgCnt;
    var gapTime = gapTime == undefined ? 1000 : gapTime;

    for (i = 1; i <= imgCnt; i++) {
        (function(e) {
            var runtTime = e * gapTime;
            setTimeout(function() {
                $(obj + '_' + e).animate({ "opacity": 1 }, 500);
            }, runtTime);
        })(i);
    }
}

/*********************************************************************
서서히 나타나기
runtime: 작동하는데 소요되는 시간 
*********************************************************************/
function fncShow(obj, runTime) {
    var runTime = runTime == undefined ? 1000 : runTime;
    $(obj).animate({ "opacity": 1 }, runTime);
}

/*********************************************************************
투명해지면서 안보이기
runtime: 작동하는데 소요되는 시간
*********************************************************************/
function fncHide(obj, runTime) {
    var runTime = runTime == undefined ? 1000 : runTime;
    $(obj).animate({ "opacity": 0 }, runTime);
}

/*********************************************************************
원형으로 변형되면서 서서히 나타나기
radius: 모서리 원형화 수치
*********************************************************************/
function fncMoveCircle(obj, radius) {
    $(obj).css({ "opacity": 0 });
    $(obj).stop().animate({ "border-radius": radius, "opacity": 1 }, 500);
}

/*********************************************************************
커졌다 작아졌다 하기
runCnt: 두근두근 효과 발생 횟수
*********************************************************************/
function fncBignSmall(obj, runCnt) {

    //  스타일시트 파일에 하기 클래스 추가
    // .beat_large{
    //     animation-name: action_enlarge;
    //     animation-duration: 0.5s;
    //     animation-iteration-count: 1;
    // }

    // @keyframes action_enlarge{
    //     0%{transform: scale(1)}
    //     50%{transform: scale(1.2)}
    //     100%{transform: scale(1)}
    // }

    var runCnt = runCnt == undefined ? 1 : runCnt;
    for (i = 0; i <= runCnt - 1; i++) {
        (function(e) {
            var runtTime = e * 700;
            setTimeout(function() {
                $(obj).addClass('beat_large');
            }, runtTime);
            setTimeout(function() {
                $(obj).removeClass('beat_large');
            }, runtTime + 600);
        })(i);
    }
}

/*********************************************************************
팝업창 나타내기

스타일시트에 아래 팝업창, 블라인드창, 팝업창 내 이미지사이즈 지정
.blind{position: absolute; top: 0; left: 0; background:#719f2d; width: 100%; height: 100%; opacity: 0.5; display: none; z-index: 90}
.popup{position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: none; z-index: 91}
.popup img{width: 100%;}
*********************************************************************/
function fncOpenPop(obj) {

    $(".popup").hide();
    $(".blind").show();
    $(obj).show();

}

/*********************************************************************
팝업창 닫기
객체지정 했을 경우 해당 팝업과 블라인드만 닫기.
지정 객체가 없는 경우 모든 팝업클래스 닫기
*********************************************************************/
function fncClosePop(obj) {
    if (obj) {
        alert(obj);
        $(obj).hide();
    } else {
        $(".popup").hide();
    }

    $(".blind").hide();
}

/*********************************************************************
비바 CLM에서 VAE 연동하기
docId = 문서번호(글로벌아이디 혹은 얀센 익스터널아이디)
mailType = 얀센일 경우 JJ로 인자 값 수신
*********************************************************************/
function fncSendMail(docId, mailType) {
    // alert ('docId:'+docId+' mailType: '+mailType);
    var objectName = "Approved_Document_vod__c";
    var fields = ["Vault_Document_ID_vod__c", "Vault_Instance_ID_vod__c"];
    if (mailType == 'JJ') {
        var whereClause = "where JJ_External_ID_for_CLM__c= '" + docId + "' AND Status_vod__c= 'Approved_vod'  ";
    } else {
        var whereClause = "where Vault_Document_ID_vod__c= '" + docId + "' AND Status_vod__c= 'Approved_vod'  ";
    }

    var sortClause = ["Document_Last_Mod_DateTime_vod__c, DESC"];
    var limit = "10";
    com.veeva.clm.queryRecord(objectName, fields, whereClause, sortClause, limit, GetTemplateDocumentId);
}

function GetTemplateDocumentId(result) {
    // alert('GetTemplateDocumentId:\n\n'+result);
    if (result.success == true) {
        result1 = result.Approved_Document_vod__c[0].Vault_Instance_ID_vod__c;
        result2 = result.Approved_Document_vod__c[0].Vault_Document_ID_vod__c;
        com.veeva.clm.getApprovedDocument(result1, result2, GetFragmentID);
    } else {
        alert(JSON.stringify(result));
    }
}


function GetFragmentID(result) {
    // alert('GetFragmentID:\n\n '+result);
    if (result.success == true) {
        template = result.Approved_Document_vod__c.ID;
        com.veeva.clm.launchApprovedEmail(template, '', getResult);
    } else {
        alert(JSON.stringify(result));
    }
}


function getResult(result) {
    // alert('getResult:\n\n'+result);
    // alert(JSON.stringify(result));
}

var email_id;
var frag_id;
var svrUri;
var email_doc;
var frag_doc;

function fncSendMailFrag(email, frag) {
    email_id = email;
    frag_id = frag;
    fncQuery(email_id);
}


function fncQuery(doc_id) {

    var objectName = "Approved_Document_vod__c";
    var fields = ["Vault_Document_ID_vod__c", "Vault_Instance_ID_vod__c"];
    var whereClause = "where Vault_Document_ID_vod__c= '" + doc_id + "' AND Status_vod__c= 'Approved_vod'  ";
    var sortClause = ["Document_Last_Mod_DateTime_vod__c, DESC"];
    var limit = "10";

    com.veeva.clm.queryRecord(objectName, fields, whereClause, sortClause, limit, getEmailDoc);
}

function getEmailDoc(result) {
    svrUri = result.Approved_Document_vod__c[0].Vault_Instance_ID_vod__c;
    // alert ('getEmailDoc svrUri='+svrUri);
    com.veeva.clm.getApprovedDocument(svrUri, email_id, getFragdoc);
}

function getFragdoc(result) {
    email_doc = result.Approved_Document_vod__c.ID;
    // alert ('getFragdoc => '+svrUri+'//'+frag_id);
    com.veeva.clm.getApprovedDocument(svrUri, frag_id, fncSendPkgEmail);
}

function fncSendPkgEmail(result) {
    frag_doc = result.Approved_Document_vod__c.ID;
    // alert (email_id+'///'+frag_id+'\n\n'+svrUri+'///'+email_doc+'///'+frag_doc);
    com.veeva.clm.launchApprovedEmail(email_doc, frag_doc, function() {
        console.log('mail send O.K');
    });
}