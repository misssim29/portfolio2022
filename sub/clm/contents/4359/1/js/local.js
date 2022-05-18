$(function () {
    // slide
    $(".home").click(function () {
        fncGotoSlide("4359_clm_aklief_01.zip");
        return;
    });
    $(".pi").click(function () {
        fncGotoSlide("4359_clm_aklief_08.zip");
        return;
    });
    // cont1 -> num1.on (toggle)

    setTimeout(function () {
        fncTranslateY(".title");
    }, 300);
    setTimeout(function () {
        fncWideGraph(".graph1");
    }, 900);
    setTimeout(function () {
        fncOpacity(".data1");
    }, 1100);
    setTimeout(function () {
        fncOpacity(".data2");
    }, 1100);
    setTimeout(function () {
        fncCont(".data1");
    }, 1800);
    setTimeout(function () {
        fncCont(".data2");
    }, 2400);
});

function fncGotoSlide(pageId) {
    com.veeva.clm.gotoSlide(pageId, "");
}
function fncWideGraph(obj) {
    var imgWidth = $(obj + " > img").width();
    $(obj).animate({ width: imgWidth }, 600);
}

function fncTranslateY(obj) {
    $(obj).animate(
        {
            transform: "translateY(0px)",
            opacity: "1",
        },
        600
    );
}
function fncCont(obj) {
    $(obj).animate(
        {
            transform: "translateY(-20px)",
        },
        300,
        function () {
            $(obj).animate(
                {
                    transform: "translateY(0px)",
                },
                300
            );
        }
    );
}
function fncOpacity(obj) {
    $(obj).animate({ opacity: 1 }, 600);
}

var myClickStream = {};
var dataAll = document.querySelectorAll(".data");
var saveBtn = document.querySelector(".next");
var data = document.getElementById("data_wrap");
//currentTarget : data_wrap
var v1 = "";
var v2 = "";

data.addEventListener("click", function (e) {
    myClickStream.Question_vod__c = "선생님, 얼굴 여드름 치료에 있어 몸 여드름의 동반 여부도 확인하십니까?";
    myClickStream.Track_Element_Description_vod__c = "선생님, 얼굴 여드름 치료에 있어 몸 여드름의 동반 여부도 확인하십니까?";
    //saveBtn.style.opacity = "1";
    const dataIndex = e.currentTarget.children;
    console.log(dataIndex);
    for (var i = 0; i < dataIndex.length; i++) {
        dataIndex[i].classList.remove("on");
    }
    e.target.classList.toggle("on");
    console.log(e.target);

    if (dataIndex[0].classList.contains("on")) {
        v1 = "예 ";
    }
    if (!dataIndex[0].classList.contains("on")) {
        v1 = "";
    }
    if (dataIndex[1].classList.contains("on")) {
        v2 = "아니오 ";
    }
    if (!dataIndex[1].classList.contains("on")) {
        v2 = "";
    }
    //save
    save();
});

function save() {
    var sum = v1 + v2;
    var save = sum.slice(0, -1);
    //alert(save);
    myClickStream.Answer_vod__c = save;
    com.veeva.clm.createRecord("Call_Clickstream_vod__c", myClickStream, result);
}

function result(result) {
    setTimeout(function () {
        com.veeva.clm.gotoSlide("4359_clm_aklief_03.zip", "");
    }, 400);
}
