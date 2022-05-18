$(window).ready(function () {
    $("li.btn_trd").on("click", function () {
        $(this).toggleClass("on");
        $("ol.trd_drop").toggleClass("on");
    });

    $("li.btn_mdsi").on("click", function () {
        $(this).toggleClass("on");
        $("ol.mdsi_drop").toggleClass("on");
    });

    $(" a.p9_survey").on("click", function () {
        $(this).addClass("on");
        setTimeout(function () {
            com.veeva.clm.gotoSlide("spravato_TRD_MDSI_CLM_09.zip", "");
        }, 300);
    });

    // content
    setTimeout(function () {
        $(".graph1").animate(
            {
                width: "21px",
            },
            200
        );
    }, 400);
    setTimeout(function () {
        $(".graph2").animate(
            {
                width: "30px",
            },
            200
        );
    }, 600);
    setTimeout(function () {
        $(".graph3").animate(
            {
                width: "152px",
            },
            400
        );
    }, 800);
    setTimeout(function () {
        $(".graph4").animate(
            {
                width: "87px",
            },
            300
        );
    }, 1200);
    setTimeout(function () {
        $(".graph5").animate(
            {
                width: "40px",
            },
            300
        );
    }, 1500);
    setTimeout(function () {
        $(".graph6").animate(
            {
                width: "376px",
            },
            500
        );
    }, 1800);
    setTimeout(function () {
        $(".graph7").animate(
            {
                width: "178px",
            },
            400
        );
    }, 2400);
    setTimeout(function () {
        $(".graph8").animate(
            {
                width: "30px",
            },
            200
        );
    }, 2900);
});
