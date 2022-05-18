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
            'height': '136px'
        }, 800);

    }, 1600);
    setTimeout(function () {
        $('.line1').stop().animate({
            'opacity': '1'
        }, 300);

    }, 2100);
    setTimeout(function () {
        $('.graph2').stop().animate({
            'height': '141px'
        }, 900);

    }, 2100);


    setTimeout(function () {
        $('.graph3').stop().animate({
            'height': '215px'
        }, 1000);

    }, 3200);
    setTimeout(function () {
        $('.line2').stop().animate({
            'opacity': '1'
        }, 300);

    }, 3800);
    setTimeout(function () {
        $('.graph4').stop().animate({
            'height': '152px'
        }, 900);

    }, 3800);







});