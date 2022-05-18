$(window).ready(function () {
    $(".btn_foot").on("click", function () {
        $(".foot").fadeIn(300);
        $(this).addClass("on");
    });
    $(".foot> .close ").on("click", function () {
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

    $(".pointer").draggable({
        cursor: "move",
        axis: "x",
        containment: ".niddle_wrap",

        drag: function (event, ui) {
            //niddle 시작위치
            var x = event.pageX - 454;

            $(".niddle").css({
                //x 165px, 90deg
                transform: "rotate(  " + x * 0.54 + "deg)",
            });

            if (x * 0.54 > 160) {
                $(".niddle").css({
                    transform: "rotate(180deg)",
                });
            }
            if (x * 0.54 <= 15) {
                $(".niddle").css({
                    transform: "rotate(0deg)",
                });
                $(".range").css({
                    opacity: "0",
                });
            }
            // range(10)
            if (x * 0.54 > 15) {
                $(".range").css({
                    opacity: "0",
                });
                $(".range1").css({
                    opacity: "1",
                });
            }
            if (x * 0.54 > 20) {
                $(".range").css({
                    opacity: "0",
                });
                $(".range2").css({
                    opacity: "1",
                });
            }
            if (x * 0.54 > 40) {
                $(".range").css({
                    opacity: "0",
                });
                $(".range3").css({
                    opacity: "1",
                });
            }
            if (x * 0.54 > 60) {
                $(".range").css({
                    opacity: "0",
                });
                $(".range4").css({
                    opacity: "1",
                });
            }
            if (x * 0.54 > 70) {
                $(".range").css({
                    opacity: "0",
                });
                $(".range5").css({
                    opacity: "1",
                });
            }
            if (x * 0.54 > 90) {
                $(".range").css({
                    opacity: "0",
                });
                $(".range6").css({
                    opacity: "1",
                });
            }
            if (x * 0.54 > 110) {
                $(".range").css({
                    opacity: "0",
                });
                $(".range7").css({
                    opacity: "1",
                });
            }
            if (x * 0.54 > 130) {
                $(".range").css({
                    opacity: "0",
                });
                $(".range8").css({
                    opacity: "1",
                });
            }
            if (x * 0.54 > 140) {
                $(".range").css({
                    opacity: "0",
                });
                $(".range9").css({
                    opacity: "1",
                });
            }
            if (x * 0.54 > 160) {
                $(".range").css({
                    opacity: "0",
                });
                $(".range10").css({
                    opacity: "1",
                });
            }

            let value = document.querySelector(".niddle").style.transform;
            console.log(value);
            console.log(x * 0.54);
        },
    });
});

function fncWideGraph(obj) {
    var imgWidth = $(obj + " > img").width();
    $(obj).animate({ width: imgWidth }, 500);
}
