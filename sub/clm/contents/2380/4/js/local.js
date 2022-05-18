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

        for (a = 0; a < 2; a++) {
            setTimeout(function () {
                $('.cont1').css({
                    'opacity': '0'
                });
            }, a * 600);
            setTimeout(function () {
                $('.cont1').css({
                    'opacity': '1'
                });
            }, 400 + a * 600);

        }

    }, 1400);


    setTimeout(function () {
        $('.graph1').stop().animate({
            'height': '47px'
        }, 400);

    }, 2500);

    setTimeout(function () {
        $('.graph2').stop().animate({
            'width': '318px'
        }, 1000);

    }, 2800);

    setTimeout(function () {
        $('.graph3').stop().animate({
            'height': '91px'
        }, 700);

    }, 3800);


    setTimeout(function () {

        for (a = 0; a < 2; a++) {
            setTimeout(function () {
                $('.cont2').css({
                    'opacity': '0'
                });
            }, a * 600);
            setTimeout(function () {
                $('.cont2').css({
                    'opacity': '1'
                });
            }, 400 + a * 600);

        }

    }, 4400);



    setTimeout(function () {
        $('.line1').stop().animate({
            'opacity': '1'
        }, 300);

    }, 2600);





});