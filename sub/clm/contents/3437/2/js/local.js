$(window).ready(function () {
    setTimeout(function () {
        $(".cont1").animate(
            {
                height: "0px",
            },
            1300
        );
    }, 500);
    setTimeout(function () {
        $(".cont2").animate(
            {
                opacity: "0",
            },
            200
        );
    }, 1700);
    setTimeout(function () {
        $(".cont2_on").animate(
            {
                opacity: "1",
            },
            200
        );
    }, 1800);
    // setTimeout(function () {
    //     $(".big_par").animate(
    //         {
    //             top: "353px",
    //         },
    //         900
    //     );
    // }, 1700);
});
