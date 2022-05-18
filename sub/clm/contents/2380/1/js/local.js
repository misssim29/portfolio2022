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





});