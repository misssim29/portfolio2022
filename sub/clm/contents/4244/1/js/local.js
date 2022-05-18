$(function () {
    $(".btn_ref").click(function () {
        fncOpenPop(".pop_ref");
        return;
    });
    $(".btn_foot").click(function () {
        fncOpenPop(".pop_foot");
        return;
    });
    $(".btn_study").click(function () {
        fncOpenPop(".pop_study");
        return;
    });

    $(".popup").click(function () {
        fncClosePop();
        return;
    });
    // slide
    $(".home").click(function () {
        fncGotoSlide("4244_clm_stelaraUC_PRO_01.zip");
        return;
    });
    $(".pi").click(function () {
        fncGotoSlide("4244_clm_stelaraUC_PRO_09.zip");
        return;
    });
    setTimeout(function () {
        fncBlink(".title1, .title2", 1);
    }, 300);

    //svg
    setTimeout(function () {
        $(".count1_num, .count2_num").css({
            opacity: 0,
        });
    });
    setTimeout(function () {
        $(".count1_num, .count2_num").css({
            opacity: 1,
        });
        $(".count1_num, .count2_num").counterUp({
            delay: 50,
            time: 2000,
        });
    }, 1500);
});

function fncGotoSlide(pageId) {
    com.veeva.clm.gotoSlide(pageId, "");
}

function fncOpenPop(obj) {
    $(obj).css("display", "block");
}

function fncClosePop() {
    $(".popup").css("display", "none");
}
function fncBlink(obj, runCnt) {
    setTimeout(function () {
        $(obj).fadeIn(300);
    }, 0);

    for (i = 1; i <= runCnt; i++) {
        setTimeout(function () {
            $(obj).hide();
        }, 400 * (2 * i - 1));
        setTimeout(function () {
            $(obj).show();
        }, 400 * 2 * i);
    }
}
