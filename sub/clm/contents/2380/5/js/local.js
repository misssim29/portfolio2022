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
        $('.cont2').stop().animate({
            'opacity': '1'
        }, 500);

    }, 2000);


    setTimeout(function () {
        $('.graph1').stop().animate({
            'width': '360px'
        }, 900);

    }, 1600);

    setTimeout(function () {
        $('.graph2').stop().animate({
            'width': '360px'
        }, 900);

    }, 1600);



    setTimeout(function () {
        $('.graph3').stop().animate({
            'height': '196px'
        }, 900);

    }, 2400);
    setTimeout(function () {
        $('.graph4').stop().animate({
            'height': '196px'
        }, 900);

    }, 2400);

    setTimeout(function () {
        $('.graph5').stop().animate({
            'width': '360px'
        }, 900);

    }, 3100);
    setTimeout(function () {
        $('.graph6').stop().animate({
            'width': '360px'
        }, 900);

    }, 3100);










});