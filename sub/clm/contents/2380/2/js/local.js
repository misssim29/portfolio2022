$(window).ready(function () {

    $('.foot').on('click', function () {
        $('.popup1').css({
            'display': 'block'
        });

    });
    $('.popup').on('click', function () {
        $('.popup1').css({
            'display': 'none'
        });

    });

    setTimeout(function () {

        for (a = 0; a < 3; a++) {
            setTimeout(function () {
                $('.txt2').css({
                    'opacity': '0'
                });
            }, a * 600);
            setTimeout(function () {
                $('.txt2').css({
                    'opacity': '1'
                });
            }, 400 + a * 600);

        }

    }, 2500);

    setTimeout(function () {
        $('.graph1').stop().animate({
            'width': '68px'
        }, 900);

    }, 1600);
    setTimeout(function () {
        $('.dot').stop().animate({
            'opacity': '1'
        }, 300);

    }, 2300);
    setTimeout(function () {
        $('.graph2').stop().animate({
            'height': '288px'
        }, 900);

    }, 3000);
    setTimeout(function () {
        $('.graph3').stop().animate({
            'width': '411px'
        }, 1300);

    }, 2300);
    setTimeout(function () {
        $('.shadow').stop().animate({
            'height': '256px'
        }, 1000);

    }, 3700);
    setTimeout(function () {
        $('.graph4').stop().animate({
            'height': '152px'
        }, 1000);

    }, 3900);







});