$(function(){
     // Hi!
    setTimeout(function(){
        $(".main_page h1").animate({'opacity':1},500);
    },200);

    //태그 등장
    setTimeout(function(){
        var tagNum = $(".tags ul li").last().index();
        for(n=0;n<=tagNum;n++){
            (function(n){
                var runTime = 200*n;
                setTimeout(function(){
                    $(".tags>ul>li:eq("+n+")").find('img').addClass('on');
                },runTime);
            })(n);
        }
    },800);

    //텍스트
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.isDeleting = false;
        var that = this;
        setTimeout(function() {
            that.tick();
        }, 1000);

    };
    
    TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        if(i != 3){
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }
    } else {
        if(i < 4){
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
    }
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
    var that = this;
    var delta = 200 - Math.random() * 100;
    
    if (this.isDeleting) { delta /= 2; }
    
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        if(this.loopNum < 4){
            this.loopNum++;
        }
        else{
            return false
        }
    }
    setTimeout(function() {
        that.tick();
    }, delta);
    };
    
    window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        
        if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }        
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
    };

    // 스크롤바 + 스와이프바
    $(".scroll").on('click',function(){
        $('html, body').animate({ scrollTop: $(".list_page").offset().top}, 500, 'linear');
    });
    $(window).scroll(function(){
        var ScrollIdx = parseInt($(window).scrollTop());
        var listPageIdx = parseInt($(".list_page").offset().top);
        if(ScrollIdx >= listPageIdx-300){
            for(m=0; m<=5; m++){            
                (function(m){
                    var runTime = 200*m;
                    setTimeout(function(){
                        $(".list_content ul li:eq(0) div table tr:eq("+m+") td:last-child").addClass('on');
                    }, runTime);                  
                })(m);
            }
            setTimeout(function(){
                $(".list_content ul li div button").animate({'opaicty':1});
            },1000)
        }
        if(ScrollIdx >= listPageIdx-100){
            $(".swipe_icon").addClass('on');
        }
    })
    

    
    // 네비게이션바
    var deg = 0;
    //첫 메뉴
    $(".nav_bar a.hosigul img").hide();
    $(".nav_bar a.hosigul span").text("호시절");

    //클릭시
    var nav_idx = 0;
    var last_idx = $(".nav_bar li:last-child").index();
    var list_name;
    //다음으로 변수
    $.fn.navMethodNext = function(navtarget){
        if(navtarget.parent().attr('class') == "next"){
            deg = deg -45;
            $(".nav_bar li").removeClass('next');
            $(".nav_bar li").removeClass('prev');
            if(nav_idx == last_idx){
                $(".nav_bar li:eq(0)").addClass('next');
            }
            if(nav_idx == 0){
                $(".nav_bar li:eq(7)").addClass('prev');
            }
            navtarget.parent().next().addClass("next");
            navtarget.parent().prev().addClass("prev");
            $(".nav_bar").animate({
                rotate: deg + "deg"
            },500);
        }
    }

    //이전으로 변수
    $.fn.navMethodPrev = function(navtarget){
        if(navtarget.parent().attr('class') == "prev"){
            deg = deg +45;
            $(".nav_bar li").removeClass('next');
            $(".nav_bar li").removeClass('prev');
            if(nav_idx == last_idx){
                $(".nav_bar li:eq(0)").addClass('next')
            }
            if(nav_idx == 0){
                $(".nav_bar li:eq(7)").addClass('prev')
            }
            navtarget.parent().next().addClass("next");
            navtarget.parent().prev().addClass("prev");
            $(".nav_bar").animate({
                rotate: deg + "deg"
            },500);
        }
    }

    $.fn.contentTable = function(ListIdx){
        setTimeout(function(){
            for(m=0; m<=5; m++){            
                (function(m){
                    var runTime = 200*m;
                    setTimeout(function(){
                        $(".list_content ul li:eq("+ListIdx+") div table tr:eq("+m+") td:last-child").addClass('on');
                    }, runTime);                  
                })(m);
            }
        },300);
    }

    $(".nav_bar a").on('click',function(){
        nav_idx = $(this).parent().index();
        list_name = $(this).find("img").attr("alt");
        $(".nav_bar a span").empty();
        $(".nav_bar a img").fadeIn();
        $(this).find("img").hide();
        $(this).find("span").text(list_name);
        $(this).navMethodNext(navtarget=$(this));
        $(this).navMethodPrev(navtarget=$(this));
        $(".list_content").animate({'left':nav_idx*-100+'vw'},500);
        $(window).contentTable(ListIdx=nav_idx);
    });
    //왼쪽 스와이프
    function swipeleftHandler( event ){
        // swipeleftHandler 라는 함수가 호출되면
        nav_idx = nav_idx+1;
        if(nav_idx <= last_idx){
            $(".list_content").animate({'left':nav_idx*-100+'vw'},500);
        } else{
            $(".list_content").animate({'left':0},500);
            nav_idx = 0;
        }
        var swipetarget = $(".nav_bar a:eq("+nav_idx+")");
        list_name = swipetarget.find("img").attr("alt");
        $(".nav_bar a span").empty();
        $(".nav_bar a img").fadeIn();
        swipetarget.find("img").hide();
        swipetarget.find("span").text(list_name);
        swipetarget.navMethodNext(navtarget=swipetarget);
        $(window).contentTable(ListIdx=nav_idx);
    }
    //오른쪽 스와이프
    function swiperightHandler( event ){
        nav_idx = nav_idx-1;
        if(nav_idx < 0){
            nav_idx = last_idx;
            $(".list_content").animate({'left':nav_idx*-100+'vw'},500);
        } else{
            $(".list_content").animate({'left':nav_idx*-100+'vw'},500);
        }
        var swipetarget = $(".nav_bar a:eq("+nav_idx+")");
        list_name = swipetarget.find("img").attr("alt");
        $(".nav_bar a span").empty();
        $(".nav_bar a img").fadeIn();
        swipetarget.find("img").hide();
        swipetarget.find("span").text(list_name);
        swipetarget.navMethodPrev(navtarget=swipetarget);
        $(window).contentTable(ListIdx=nav_idx);
    }
        
    $( ".list_content ul li" ).on( "swipeleft", swipeleftHandler );
    $( ".list_content ul li" ).on( "swiperight", swiperightHandler );


    // view
    $(".list_content ul li div button").on('click',function(){
        var viewIdx = $(this).parent().parent().index();

        // switch(viewIdx){
        //     case 0 : window.open("../sub/hosigul/index.html");
        //     break;
        //     case 1 : window.open("../sub/clm/index.html");
        //     break;
        //     case 2 : window.open("http://whatsthecraic.dothome.co.kr/");
        //     break;
        //     case 3 : window.open("../sub/handok/index.html");
        //     break;
        //     case 4 : window.open("../sub/osakaharu/index.html");
        //     break;
        //     case 5 : window.open("../sub/animation_sample/index.html");
        //     break;
        //     case 6 : window.open("../sub/bmi/index.html");
        //     break;
        //     case 7 : window.open("../sub/online_booth/index.html");
        // }
    })
});


