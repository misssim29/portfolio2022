  $(document).ready(function(){
      setTimeout(function(){
         $(".cont1").addClass('on');
         $(".cont1_left img").addClass('on');
         $(".cont1_right img").addClass('on'); 
      },500);
      
      
            $(window).scroll(function(){
               var wd = parseInt($(window).scrollTop());
               var scrollHeight = parseInt($(document).height() - $(window).height()); //실제 스크롤바영역의 높이               
               var carRatio = Math.round((wd / scrollHeight)*100)-10;
               var lightRatio = 1-(parseFloat((wd/scrollHeight).toFixed(2))+0.05);
               var whellRatio = parseInt(wd/100)*30;
               if(carRatio<0) { carRatio = 0};
               
               $(".car").css({'left':carRatio+'%'});
               $(".wheel1").css({'transform':'rotate('+whellRatio+')'});
               $(".wheel2").css({'transform':'rotate('+whellRatio+')'});
               $(".header_on").css({'opacity':lightRatio});
               
               if(carRatio>10){
                  $(".cont2").addClass('on');
                  $(".cont2_left img").addClass('on');
                  $(".cont2_right img").addClass('on');
               }
               if(carRatio>43){
                  $(".cont3").addClass('on');
                  $(".cont3_left img").addClass('on');
                  $(".cont3_right img").addClass('on');
               }
               if(carRatio>70){
                  $(".cont4").addClass('on');
                  $(".cont4_left img").addClass('on');
                  $(".cont4_right img").addClass('on');
               }
              
/*
                
                if(wd < 50){
                   $(".car").css({'left':0});
                   $(".wheel1").css({'transform':'rotate(0deg)'});
                   $(".wheel2").css({'transform':'rotate(0deg)'});
                    $(".header_on").css({'opacity':1})
                }
               if(wd > 50 && wd < 100){
                   $(".car").css({'left':'1%'});
                   $(".wheel1").css({'transform':'rotate(30deg)'});
                   $(".wheel2").css({'transform':'rotate(30deg)'});
                    $(".header_on").css({'opacity':1})
                }
                
                 if(wd > 100 && wd < 150){
                   $(".car").css({'left':'2%'});
                   $(".wheel1").css({'transform':'rotate(60deg)'});
                   $(".wheel2").css({'transform':'rotate(60deg)'});
                }
                
                if(wd > 150 && wd < 200){
                   $(".car").css({'left':'3%'});
                   $(".wheel1").css({'transform':'rotate(90deg)'});
                   $(".wheel2").css({'transform':'rotate(90deg)'});
                }
                 if(wd > 200 && wd < 250){
                   $(".car").css({'left':'4%'});
                   $(".wheel1").css({'transform':'rotate(120deg)'});
                   $(".wheel2").css({'transform':'rotate(120deg)'});
                    $(".header_on").css({'opacity':0.9})
                }
                 if(wd > 250 && wd < 300){
                   $(".car").css({'left':'5%'});
                   $(".wheel1").css({'transform':'rotate(150deg)'});
                   $(".wheel2").css({'transform':'rotate(150deg)'});
                }
                 if(wd > 300 && wd < 350){
                   $(".car").css({'left':'6%'});
                   $(".wheel1").css({'transform':'rotate(180deg)'});
                   $(".wheel2").css({'transform':'rotate(180deg)'});
                }
                 if(wd > 350 && wd < 400){
                   $(".car").css({'left':'7%'});
                   $(".wheel1").css({'transform':'rotate(210deg)'});
                   $(".wheel2").css({'transform':'rotate(210deg)'});
                }
                 if(wd > 400 && wd < 450){
                   $(".car").css({'left':'8%'});
                   $(".wheel1").css({'transform':'rotate(240deg)'});
                   $(".wheel2").css({'transform':'rotate(240deg)'});
                     $(".header_on").css({'opacity':0.8})
                }
                if(wd > 450 && wd < 500){
                   $(".car").css({'left':'9%'});
                   $(".wheel1").css({'transform':'rotate(270deg)'});
                   $(".wheel2").css({'transform':'rotate(270deg)'});
                }
                 if(wd > 500 && wd < 550){
                   $(".car").css({'left':'10%'});
                   $(".wheel1").css({'transform':'rotate(300deg)'});
                   $(".wheel2").css({'transform':'rotate(300deg)'});
                }
                if(wd > 550 && wd < 600){
                   $(".car").css({'left':'11%'});
                   $(".wheel1").css({'transform':'rotate(330deg)'});
                   $(".wheel2").css({'transform':'rotate(330deg)'});
                     
                }
                if(wd > 600 && wd < 650){
                   $(".car").css({'left':'12%'});
                   $(".wheel1").css({'transform':'rotate(360deg)'});
                   $(".wheel2").css({'transform':'rotate(360deg)'});
                    $(".header_on").css({'opacity':0.7})
                }
                if(wd > 650 && wd < 700){
                   $(".car").css({'left':'13%'});
                   $(".wheel1").css({'transform':'rotate(390deg)'});
                   $(".wheel2").css({'transform':'rotate(390deg)'});
                }
                if(wd > 700 && wd < 750){
                   $(".car").css({'left':'14%'});
                   $(".wheel1").css({'transform':'rotate(420deg)'});
                   $(".wheel2").css({'transform':'rotate(420deg)'});
                }
                if(wd > 700){
                    $(".cont2_title img").addClass('on');
                }
                if(wd > 750 && wd < 800){
                   $(".car").css({'left':'15%'});
                   $(".wheel1").css({'transform':'rotate(450deg)'});
                   $(".wheel2").css({'transform':'rotate(450deg)'});
                }
                if(wd > 800 && wd < 850){
                   $(".car").css({'left':'16%'});
                   $(".wheel1").css({'transform':'rotate(480deg)'});
                   $(".wheel2").css({'transform':'rotate(480deg)'});
                }
                if(wd > 800){
                     $(".cont2_left img").addClass('on');
                }
                if(wd > 850 && wd < 900){
                   $(".car").css({'left':'17%'});
                   $(".wheel1").css({'transform':'rotate(510deg)'});
                   $(".wheel2").css({'transform':'rotate(510deg)'});
                     $(".header_on").css({'opacity':0.6})
                }
                if(wd > 900 && wd < 950){
                   $(".car").css({'left':'18%'});
                   $(".wheel1").css({'transform':'rotate(540deg)'});
                   $(".wheel2").css({'transform':'rotate(540deg)'});
                }
                if(wd > 900){
                     $(".cont2_right img").addClass('on');
                }
                 if(wd > 950 && wd < 1000){
                   $(".car").css({'left':'19%'});
                   $(".wheel1").css({'transform':'rotate(570deg)'});
                   $(".wheel2").css({'transform':'rotate(570deg)'});
                }
                if(wd > 1000 && wd < 1050){
                   $(".car").css({'left':'20%'});
                   $(".wheel1").css({'transform':'rotate(600deg)'});
                   $(".wheel2").css({'transform':'rotate(600deg)'});
                }
                if(wd > 1050 && wd < 1100){
                   $(".car").css({'left':'21%'});
                   $(".wheel1").css({'transform':'rotate(630deg)'});
                   $(".wheel2").css({'transform':'rotate(630deg)'});
                }
                if(wd > 1100 && wd < 1150){
                   $(".car").css({'left':'22%'});
                   $(".wheel1").css({'transform':'rotate(660deg)'});
                   $(".wheel2").css({'transform':'rotate(660deg)'});
                }
                if(wd > 1150 && wd < 1200){
                   $(".car").css({'left':'23%'});
                   $(".wheel1").css({'transform':'rotate(690deg)'});
                   $(".wheel2").css({'transform':'rotate(690deg)'});
                    $(".header_on").css({'opacity':0.5})
                }
                if(wd > 1200 && wd < 1250){
                   $(".car").css({'left':'24%'});
                   $(".wheel1").css({'transform':'rotate(720deg)'});
                   $(".wheel2").css({'transform':'rotate(720deg)'});
                }
                if(wd > 1250 && wd < 1300){
                   $(".car").css({'left':'25%'});
                   $(".wheel1").css({'transform':'rotate(750deg)'});
                   $(".wheel2").css({'transform':'rotate(750deg)'});
                }
                if(wd > 1300 && wd < 1350){
                   $(".car").css({'left':'26%'});
                   $(".wheel1").css({'transform':'rotate(780deg)'});
                   $(".wheel2").css({'transform':'rotate(780deg)'});
                }
                if(wd > 1350 && wd < 1400){
                   $(".car").css({'left':'27%'});
                   $(".wheel1").css({'transform':'rotate(810deg)'});
                   $(".wheel2").css({'transform':'rotate(810deg)'});
                }
                if(wd > 1400 && wd < 1450){
                   $(".car").css({'left':'28%'});
                   $(".wheel1").css({'transform':'rotate(840deg)'});
                   $(".wheel2").css({'transform':'rotate(840deg)'});
                }
                if(wd > 1450 && wd < 1500){
                   $(".car").css({'left':'29%'});
                   $(".wheel1").css({'transform':'rotate(870deg)'});
                   $(".wheel2").css({'transform':'rotate(870deg)'});
                    $(".header_on").css({'opacity':0.4})
                }
                if(wd > 1500 && wd < 1550){
                   $(".car").css({'left':'30%'});
                   $(".wheel1").css({'transform':'rotate(900deg)'});
                   $(".wheel2").css({'transform':'rotate(900deg)'});
                }
                if(wd > 1550 && wd < 1600){
                   $(".car").css({'left':'31%'});
                   $(".wheel1").css({'transform':'rotate(930deg)'});
                   $(".wheel2").css({'transform':'rotate(930deg)'});
                }
                if(wd > 1600 && wd < 1650){
                   $(".car").css({'left':'32%'});
                   $(".wheel1").css({'transform':'rotate(960deg)'});
                   $(".wheel2").css({'transform':'rotate(960deg)'});
                }
                if(wd > 1650 && wd < 1700){
                   $(".car").css({'left':'33%'});
                   $(".wheel1").css({'transform':'rotate(990deg)'});
                   $(".wheel2").css({'transform':'rotate(990deg)'});
                     
                }
                  if(wd > 1650){
                    $(".cont3_title img").addClass('on');
                }
                if(wd > 1700 && wd < 1750){
                   $(".car").css({'left':'34%'});
                   $(".wheel1").css({'transform':'rotate(1020deg)'});
                   $(".wheel2").css({'transform':'rotate(1020deg)'});
                }
                if(wd > 1750 && wd < 1800){
                   $(".car").css({'left':'35%'});
                   $(".wheel1").css({'transform':'rotate(1050deg)'});
                   $(".wheel2").css({'transform':'rotate(1050deg)'});
                   
                }
                 if(wd > 1750){
                     $(".cont3_left img").addClass('on');
                }
                if(wd > 1800 && wd < 1850){
                   $(".car").css({'left':'36%'});
                   $(".wheel1").css({'transform':'rotate(1080deg)'});
                   $(".wheel2").css({'transform':'rotate(1080deg)'});
                }
                 if(wd > 1850 && wd < 1900){
                   $(".car").css({'left':'37%'});
                   $(".wheel1").css({'transform':'rotate(1110deg)'});
                   $(".wheel2").css({'transform':'rotate(1110deg)'});
                      $(".header_on").css({'opacity':0.3})
                }
                if(wd > 1850){
                    $(".cont3_right img").addClass('on');
                }
                if(wd > 1900 && wd < 1950){
                   $(".car").css({'left':'38%'});
                   $(".wheel1").css({'transform':'rotate(1140deg)'});
                   $(".wheel2").css({'transform':'rotate(1140deg)'});
                }
                 if(wd > 1950 && wd < 2000){
                   $(".car").css({'left':'39%'});
                   $(".wheel1").css({'transform':'rotate(1170deg)'});
                   $(".wheel2").css({'transform':'rotate(1170deg)'});
                    
                }
                if(wd > 2000 && wd < 2050){
                   $(".car").css({'left':'40%'});
                   $(".wheel1").css({'transform':'rotate(1200deg)'});
                   $(".wheel2").css({'transform':'rotate(1200deg)'});
                }
                if(wd > 2050 && wd < 2100){
                   $(".car").css({'left':'41.5%'});
                   $(".wheel1").css({'transform':'rotate(1230deg)'});
                   $(".wheel2").css({'transform':'rotate(1230deg)'});
                }
                if(wd > 2100 && wd < 2150){
                   $(".car").css({'left':'43%'});
                   $(".wheel1").css({'transform':'rotate(1260deg)'});
                   $(".wheel2").css({'transform':'rotate(1260deg)'});
                }
                if(wd > 2150 && wd < 2200){
                   $(".car").css({'left':'44.5%'});
                   $(".wheel1").css({'transform':'rotate(1290deg)'});
                   $(".wheel2").css({'transform':'rotate(1290deg)'});
                     $(".header_on").css({'opacity':0.2})
                }
                if(wd > 2200 && wd < 2250){
                   $(".car").css({'left':'46%'});
                   $(".wheel1").css({'transform':'rotate(1320deg)'});
                   $(".wheel2").css({'transform':'rotate(1320deg)'});
                }
                 if(wd > 2250 && wd < 2300){
                   $(".car").css({'left':'47.5%'});
                   $(".wheel1").css({'transform':'rotate(1350deg)'});
                   $(".wheel2").css({'transform':'rotate(1350deg)'});
                }
                if(wd > 2300 && wd < 2350){
                   $(".car").css({'left':'49%'});
                   $(".wheel1").css({'transform':'rotate(1380deg)'});
                   $(".wheel2").css({'transform':'rotate(1380deg)'});
                }
                if(wd > 2350 && wd < 2400){
                   $(".car").css({'left':'50.5%'});
                   $(".wheel1").css({'transform':'rotate(1410deg)'});
                   $(".wheel2").css({'transform':'rotate(1410deg)'});
                }
                if(wd > 2400 && wd < 2450){
                   $(".car").css({'left':'52%'});
                   $(".wheel1").css({'transform':'rotate(1440deg)'});
                   $(".wheel2").css({'transform':'rotate(1440deg)'});
                }
                 if(wd > 2450 && wd < 2500){
                   $(".car").css({'left':'53.5%'});
                   $(".wheel1").css({'transform':'rotate(1470deg)'});
                   $(".wheel2").css({'transform':'rotate(1470deg)'});
                }
                if(wd > 2500 && wd < 2550){
                   $(".car").css({'left':'55%'});
                   $(".wheel1").css({'transform':'rotate(1500deg)'});
                   $(".wheel2").css({'transform':'rotate(1500deg)'});
                     $(".header_on").css({'opacity':0.1});
                }
                if(wd > 2500){
                  $(".cont4_title img").addClass('on');
                }
                if(wd > 2550 && wd < 2600){
                   $(".car").css({'left':'56.5%'});
                   $(".wheel1").css({'transform':'rotate(1530deg)'});
                   $(".wheel2").css({'transform':'rotate(1530deg)'});
                    
                }
                if(wd > 2600 && wd < 2650){
                   $(".car").css({'left':'58%'});
                   $(".wheel1").css({'transform':'rotate(1560deg)'});
                   $(".wheel2").css({'transform':'rotate(1560deg)'});
                   
                }
                 
                 if(wd > 2600){
                  $(".cont4_left img").addClass('on');
                }
                 if(wd > 2650 && wd < 2700){
                   $(".car").css({'left':'59.5%'});
                   $(".wheel1").css({'transform':'rotate(1590deg)'});
                   $(".wheel2").css({'transform':'rotate(1590deg)'});
                     
                }
                if(wd > 2700 && wd < 2750){
                   $(".car").css({'left':'61%'});
                   $(".wheel1").css({'transform':'rotate(1620deg)'});
                   $(".wheel2").css({'transform':'rotate(1620deg)'});
                }
               
                 if(wd > 2700){
                  $(".cont4_right img").addClass('on');
                }
                if(wd > 2750 && wd < 2800){
                   $(".car").css({'left':'62.5%'});
                   $(".wheel1").css({'transform':'rotate(1650deg)'});
                   $(".wheel2").css({'transform':'rotate(1650deg)'});
                }
                 if(wd > 2800 && wd < 2850){
                   $(".car").css({'left':'64%'});
                   $(".wheel1").css({'transform':'rotate(1680deg)'});
                   $(".wheel2").css({'transform':'rotate(1680deg)'}); 
                     $(".header_on").css({'opacity':0})
                }
               
                if(wd > 2850 && wd < 2900){
                   $(".car").css({'left':'65.5%'});
                   $(".wheel1").css({'transform':'rotate(1710deg)'});
                   $(".wheel2").css({'transform':'rotate(1710deg)'});
                    
                }
                 if(wd > 2900 && wd < 2950){
                   $(".car").css({'left':'67%'});
                   $(".wheel1").css({'transform':'rotate(1740deg)'});
                   $(".wheel2").css({'transform':'rotate(1740deg)'});
                }
                if(wd > 2950 && wd < 3000){
                   $(".car").css({'left':'68.5%'});
                   $(".wheel1").css({'transform':'rotate(1770deg)'});
                   $(".wheel2").css({'transform':'rotate(1770deg)'});
                }
                 if(wd > 3000 && wd < 3050){
                   $(".car").css({'left':'70%'});
                   $(".wheel1").css({'transform':'rotate(1800deg)'});
                   $(".wheel2").css({'transform':'rotate(1800deg)'});
                      
                }
                */
                
                
            })
        })