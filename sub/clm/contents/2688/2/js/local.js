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


    // text
    setTimeout(function () {
        $('.graph2').animate({
            'width': '315px'
        }, 570);
    }, 1000);
    setTimeout(function () {
        $('.graph3').animate({
            'width': '210px'
        }, 550);
    }, 1750);


    setTimeout(function () {
        $('.dot1').animate({
            'height': '74px'
        }, 570);
    }, 2400);
    // acs환자


// blue box - 3200
setTimeout(function () {
    $('.graph_box1').animate({
        'width': '484px'
    }, 1600);
}, 3300);

setTimeout(function () {
    $('.box1').css({
        'opacity': '1'
    });
}, 5000);

//orange box - 
setTimeout(function () {
    $('.graph_box2').animate({
        'width': '475px'
    }, 1600);
}, 5400);
setTimeout(function () {
    $('.box2').css({
        'opacity': '1'
    });
}, 7100);



    //퇴원시처방 
    setTimeout(function () {
        $('.dot2').animate({
            'height': '77px'
        }, 570);
    }, 3200);
    // box, arrow1
    setTimeout(function () {
        $('.arrow1').animate({
            'width': '23px'
        }, 510);
    }, 4500);





  

   
  




    setTimeout(function () {
        $('.graph4').animate({
            'width': '425px'
        }, 1000);
    }, 2800);



    /* box2-2 */
    setTimeout(function () {
        $('.box2-2').animate({
            'opacity': '1'
        }, 500)

    }, 5600);
    setTimeout(function () {

        for (a = 0; a < 2; a++) {
            setTimeout(function () {
                $('.box2-2').css({
                    'opacity': '0'
                });
            }, a * 600);
            setTimeout(function () {
                $('.box2-2').css({
                    'opacity': '1'
                });
            }, 400 + a * 600);

        }

    }, 6200);
    /* box3-2 */
    setTimeout(function () {
        $('.box3-1').animate({
            'opacity': '1'
        }, 500)

    }, 8600);
    setTimeout(function () {

        for (a = 0; a < 2; a++) {
            setTimeout(function () {
                $('.box3-1').css({
                    'opacity': '0'
                });
            }, a * 600);
            setTimeout(function () {
                $('.box3-1').css({
                    'opacity': '1'
                });
            }, 400 + a * 600);

        }

    }, 9200);





});