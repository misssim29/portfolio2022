$(function () {
    $(".btn_foot").on("click", function () {
        $(".foot").fadeIn(300);
        $(this).addClass("on");
    });
    $(".foot > .close ").on("click", function () {
        $(".foot").fadeOut(300);
        $(".btn_foot").removeClass("on");
    });

    // graph
    setTimeout(function () {
        fncWideGraph(".graph1");
    }, 500);
    setTimeout(function () {
        fncWideGraph(".graph2");
    }, 1100);
    setTimeout(function () {
        fncOpacity(".cont");
    }, 2000);
});

function fncWideGraph(obj) {
    var imgWidth = $(obj + " > img").width();
    $(obj).animate({ width: imgWidth }, 600);
}
function fncOpacity(obj) {
    $(obj).animate({ opacity: 1 }, 1000);
}

// input range
// var slideValue = document.getElementById("sliderValue");
var Slider = document.getElementById("slider_h");
var scroll = document.getElementById("scroll");

Slider.oninput = function () {
    scroll.style.left = this.value + "%";

    $(".icon_wrap").css({
        width: Slider.value * 6.3 + "px",
    });
    $(".bar_red").css({
        width: Slider.value * 6.3 + "px",
    });

    if (Slider.value == 100) {
        $(".scrollBtn").css({
            left: "-50px",
        });
    }
    if (Slider.value == 0) {
        $(".scrollBtn").css({
            left: "-10px",
        });
    }
    console.log(Slider.value);
};

// send email
var template = "";
var result1 = "";
var result2 = "";

function launchAE() {
    var objectName = "Approved_Document_vod__c";
    var fields = ["Vault_Document_ID_vod__c", "Vault_Instance_ID_vod__c"];
    // vae1 _ Global ID : 2722_1052007
    var whereClause = "where Vault_Document_ID_vod__c= '4607' AND Status_vod__c= 'Approved_vod'  ";
    var sortClause = ["Vault_Document_ID_vod__c, ASC"];
    var limit = "1";
    com.veeva.clm.queryRecord(objectName, fields, whereClause, sortClause, limit, GetTemplateDocumentId);
}

function GetTemplateDocumentId(result) {
    if (result.success == true) {
        result1 = result.Approved_Document_vod__c[0].Vault_Instance_ID_vod__c;
        result2 = result.Approved_Document_vod__c[0].Vault_Document_ID_vod__c;
        com.veeva.clm.getApprovedDocument(result1, result2, GetFragmentID);
    } else {
        alert(JSON.stringify(result));
    }
}

function GetFragmentID(result) {
    if (result.success == true) {
        template = result.Approved_Document_vod__c.ID;
        com.veeva.clm.launchApprovedEmail(template, "", getResult);
    } else {
        alert(JSON.stringify(result));
    }
}

function getResult(result) {
    // alert(JSON.stringify(result));
}
