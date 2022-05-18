$(window).ready(function () {
    setTimeout(function () {
        for (a = 0; a < 2; a++) {
            setTimeout(function () {
                $(".big_par").css({ opacity: "0" });
            }, a * 550);
            setTimeout(function () {
                $(".big_par").css({ opacity: "1" });
            }, 400 + a * 500);
        }
    }, 600);
    setTimeout(function () {
        $(".big_par").animate(
            {
                top: "353px",
            },
            900
        );
    }, 1700);
    setTimeout(function () {
        for (a = 0; a < 2; a++) {
            setTimeout(function () {
                $(".small_par").css({ opacity: "0" });
            }, a * 550);
            setTimeout(function () {
                $(".small_par").css({ opacity: "1" });
            }, 400 + a * 500);
        }
    }, 3500);
    setTimeout(function () {
        $(".small_par").animate(
            {
                top: "375px",
            },
            1000
        );
    }, 4500);
});
