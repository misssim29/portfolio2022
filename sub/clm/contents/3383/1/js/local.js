$(window).ready(function () {
    $("li.btn_trd").on("click", function () {
        $(this).toggleClass("on");
        $("ol.trd_drop").toggleClass("on");
    });

    $("li.btn_mdsi").on("click", function () {
        $(this).toggleClass("on");
        $("ol.mdsi_drop").toggleClass("on");
    });

    // content
    $("ul.content > li").on("click , mouseover", function () {
        $(this).find("img").css({ display: "block" });
    });
    $("ul.content > li").on("mouseout", function () {
        $(this).find("img").css({ display: "none" });
    });

    $("ul.content a.cont1").on("click", function () {
        setTimeout(function () {
            com.veeva.clm.gotoSlide("spravato_TRD_MDSI_CLM_02.zip", "");
        }, 800);
    });
});
