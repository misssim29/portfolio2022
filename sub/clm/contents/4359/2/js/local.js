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
    setTimeout(function () {
        fncOpacity(".line1");
    }, 0);
    setTimeout(function () {
        fncOpacity(".line2");
    }, 2000);
    setTimeout(function () {
        fncScale(".cont89");
    }, 2600);
    setTimeout(function () {
        fncTranslateY(".cont1, .cont2");
    }, 300);
    setTimeout(function () {
        fncBlink(".cont2", "2");
    }, 1000);
    // 하단txt
    setTimeout(function () {
        fncScaleOut(".cont3");
    }, 3500);
});

function fncGotoSlide(pageId) {
    com.veeva.clm.gotoSlide(pageId, "");
}
function fncWideGraph(obj) {
    var imgWidth = $(obj + " > img").width();
    $(obj).animate({ width: imgWidth }, 600);
}
function fncUpGraph(obj) {
    var imgHeight = $(obj + " > img").height();
    $(obj).animate({ height: imgHeight }, 800);
}
function fncBlink(obj, runCnt) {
    setTimeout(function () {
        $(obj).fadeIn(300);
    }, 0);

    for (i = 1; i <= runCnt; i++) {
        setTimeout(function () {
            $(obj).hide();
        }, 300 * (2 * i - 1));
        setTimeout(function () {
            $(obj).show();
        }, 300 * 2 * i);
    }
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
function fncScaleOut(obj) {
    $(obj).animate(
        {
            transform: "scale(1, 1)",
        },
        700
    );
}
function fncOpacity(obj) {
    $(obj).animate({ opacity: 1 }, 300);
}
function fncScale(obj) {
    setTimeout(function () {
        $(obj).animate(
            {
                transform: "scale(1.1)",
                opacity: 1,
            },
            400
        );
    }, 0);
    setTimeout(function () {
        $(obj).animate(
            {
                transform: "scale(1)",
            },
            300
        );
    }, 300);
}
