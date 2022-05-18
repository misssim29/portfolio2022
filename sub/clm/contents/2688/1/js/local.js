$(window).ready(function () {

    $('.foot').on('click', function () {
        $('.popup1').css({
            'display': 'block'
        });

    });
    $('.ref').on('click', function () {
        $('.popup2').css({
            'display': 'block'
        });

    });
    $('.popup').on('click', function () {
        $('.popup1,.popup2').css({
            'display': 'none'
        });

    });


    setTimeout(function () {
        $('.graph1').animate({
            'width': '310px'
        }, 750);
    }, 500);
    setTimeout(function () {
        $('.graph2').animate({
            'width': '140px'
        }, 450);
    }, 1500);
    setTimeout(function () {
        $('.graph3').animate({
            'width': '132px'
        }, 400);
    }, 2100);

    setTimeout(function () {
        $('.graph4').animate({
            'width': '425px'
        }, 1100);
    }, 2800);
    setTimeout(function () {
        $('.arrow').animate({
            'height': '50px'
        }, 700);
    }, 4600);



    // setTimeout(function () {

    //     for (a = 0; a < 3; a++) {
    //         setTimeout(function () {
    //             $('.txt2').css({
    //                 'opacity': '0'
    //             });
    //         }, a * 600);
    //         setTimeout(function () {
    //             $('.txt2').css({
    //                 'opacity': '1'
    //             });
    //         }, 400 + a * 600);

    //     }

    // }, 2500);





});