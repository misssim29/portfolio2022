$(function(){
    $(".nav button").on('click',function(){
        $(".nav button").removeClass('on');
        $(this).addClass('on');
        var ClassName = $(this).attr('class');
        if(ClassName.indexOf('btn1') != -1){
            $(".cont2").hide();
            $(".cont3").hide();
            $(".cont1").show();
        }
        else if(ClassName.indexOf('btn2') != -1){
            $(".cont1").hide();
            $(".cont3").hide();
            $(".cont2").show();
            $(".cont2 .important").hide();
            setTimeout(function(){ var a = 0 
                while(a <= 2){ setTimeout(function(){ 
                $(".cont2 .title span").css({opacity:0}); },a*450); 
                setTimeout(function(){ $(".cont2 .title span").css({opacity:1}); 
                },200+a*450); a++; 
                } },200); 
            setTimeout(function(){
                $(".cont2 .important").fadeIn();
            },1500);
        }
        else if(ClassName.indexOf('btn3') != -1){
            $(".cont1").hide();
            $(".cont2").hide();
            $(".cont3").show();
        }
        
        });
    
    $(".btn_home").on("click",function(){
        location.href="../index.html";
    });
    $(".male span").on('click',function(){
      $(".male label").click();
      $(".tab_cont span").removeClass('on');
      $(".male span").addClass('on');
    });
    $(".female span").on('click',function(){
      $(".female label").click();
      $(".tab_cont span").removeClass('on');
      $(".female span").addClass('on');
    });
    
});

          
function cont1_result(){
    
    var cont1_cm = document.getElementById("cont1_cm");
    var cont1_kg = document.getElementById("cont1_kg");
    var cont1_age = document.getElementById("cont1_age");
    var cont1_waist = document.getElementById("cont1_waist");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var reg = /[^0-9 ^\.]/gi;     

    
    if(cont1_cm.value == ""){
        alert("신체정보를 입력해주세요.");
        $(cont1_cm).focus();
    }
    
    else if(cont1_kg.value == ""){
        alert("신체정보를 입력해주세요.");
        $(cont1_kg).focus();
    }
    else if(cont1_age.value == ""){
        alert("신체정보를 입력해주세요.");
        $(cont1_age).focus();
    }
    else if(cont1_waist.value == ""){
        alert("신체정보를 입력해주세요.");
        $(cont1_waist).focus();
    }
    else if(!male.checked && !female.checked){
        alert("성별을 선택해주세요.");
    }     
    else if(reg.test(cont1_cm.value) || reg.test(cont1_kg.value) || reg.test(cont1_age.value) || reg.test(cont1_waist.value)){
        alert("신체정보는 숫자만 입력할 수 있습니다.");
    }

    else{

        var txtWeight = parseFloat($("#cont1_kg").val());
        var txtHeight = parseFloat($("#cont1_cm").val());
        var result;
        var arrResult = new Array;
        var arrNumber;
        
        if($.trim(txtWeight).length==0 || $.trim(txtHeight).length==0) {
            alert ('계산을 위한 입력 값이 필요합니다');
            return;
        }
        
        result = (txtWeight/Math.pow(txtHeight/100, 2)).toFixed(1);

        if(result<17){
            arrNumber = 16;
        } else if(result>=40){
            arrNumber = 40;
        } else {
            arrNumber = parseInt(result);
        }
        
        //위험도 확인탭 출력을 위한 값(arrResult[BMI수치] ==> 0:당뇨병, 1:고혈압, 2:이상지질혈증)
        arrResult[16]=[1.9, 5.1, 7.3];
        arrResult[17]=[1.6, 5.1, 8.2];
        arrResult[18]=[1.5, 5.4, 9.7]
        arrResult[19]=[1.6, 6.0, 11.6];
        arrResult[20]=[1.9, 6.8, 14.3];
        arrResult[21]=[2.2, 7.9, 17.3];
        arrResult[22]=[2.8, 9.1, 20.4];
        arrResult[23]=[3.5, 10.5, 23.3];
        arrResult[24]=[4.3, 12.0, 26.0];
        arrResult[25]=[5.2, 13.7, 28.5];
        arrResult[26]=[6.3, 15.6, 31.0];
        arrResult[27]=[7.6, 17.5, 33.5];
        arrResult[28]=[8.8, 19.6, 35.9];
        arrResult[29]=[10.6, 22.2, 38.3];
        arrResult[30]=[12.4, 24.9, 41.0];
        arrResult[31]=[14.2, 27.3, 42.2];
        arrResult[32]=[16.5, 30.5, 44.0];
        arrResult[33]=[19.1, 33.1, 46.5];
        arrResult[34]=[21.4, 36.7, 48.5];
        arrResult[35]=[23.9, 38.2, 50.3];
        arrResult[36]=[27.5, 41.0, 51.4];
        arrResult[37]=[29.4, 42.4, 51.4];
        arrResult[38]=[30.8, 43.1, 48.4];
        arrResult[39]=[32.7, 42.5, 56.5];
        arrResult[40]=[31.1, 44.7, 48.8];

          
              
        console.log('BMI: '+result);
        console.log('당뇨병: '+arrResult[arrNumber][0]);
        console.log('고혈압: '+arrResult[arrNumber][1]);
        console.log('이상지질혈증: '+arrResult[arrNumber][2]);
        console.log(arrNumber);
        $(".cont2 .table h2 span").text(result);
        $(".cont2 .table .array1 span").text(arrResult[arrNumber][0]+'   명');
          $(".cont2 .table .array2 span").text(arrResult[arrNumber][1]+'   명');
          $(".cont2 .table .array3 span").text(arrResult[arrNumber][2]+'   명');
          if(arrNumber == 16){
              $(".cont2 .important").show().css({opacity:1,left:'10.5%',height:'20vw'});
          }
          else if(arrNumber == 17){
             $(".cont2 .important").show().css({opacity:1,left:'14%',height:'20vw'}); 
          }
          else if(arrNumber == 18){
             $(".cont2 .important").show().css({opacity:1,left:'17%',height:'20vw'});
          }
          else if(arrNumber == 19){
             $(".cont2 .important").show().css({opacity:1,left:'20%',height:'20vw'});
          }
          else if(arrNumber == 20){
             $(".cont2 .important").show().css({opacity:1,left:'23.3%',height:'20vw'});
          }
          else if(arrNumber == 21){
             $(".cont2 .important").show().css({opacity:1,left:'26.5%',height:'20vw'});
          }
          else if(arrNumber == 22){
             $(".cont2 .important").show().css({opacity:1,left:'29.6%',height:'20vw'});
          }
          else if(arrNumber == 23){
             $(".cont2 .important").show().css({opacity:1,left:'33%',height:'25vw'});
          }
          else if(arrNumber == 24){
             $(".cont2 .important").show().css({opacity:1,left:'36%',height:'25vw'});
          }
          else if(arrNumber == 25){
             $(".cont2 .important").show().css({opacity:1,left:'39.5%',height:'25vw'});
          }
          else if(arrNumber == 26){
             $(".cont2 .important").show().css({opacity:1,left:'42.5%',height:'25vw'});
          }
          else if(arrNumber == 27){
             $(".cont2 .important").show().css({opacity:1,left:'45.7%',height:'30vw'});
          }
          else if(arrNumber == 28){
             $(".cont2 .important").show().css({opacity:1,left:'48.7%',height:'30vw'});
          }
          else if(arrNumber == 29){
             $(".cont2 .important").show().css({opacity:1,left:'51.9%',height:'30vw'});
          }
          else if(arrNumber == 30){
             $(".cont2 .important").show().css({opacity:1,left:'55.2%',height:'30vw'});
          }
          else if(arrNumber == 31){
             $(".cont2 .important").show().css({opacity:1,left:'58.2%',height:'30vw'});
          }
          else if(arrNumber == 32){
             $(".cont2 .important").show().css({opacity:1,left:'61.4%',height:'30vw'});
          }
          else if(arrNumber == 33){
             $(".cont2 .important").show().css({opacity:1,left:'64.6%',height:'30vw'});
          }
          else if(arrNumber == 34){
             $(".cont2 .important").show().css({opacity:1,left:'67.8%',height:'30vw'});
          }
          else if(arrNumber == 35){
             $(".cont2 .important").show().css({opacity:1,left:'71%',height:'35vw'});
          }
          else if(arrNumber == 36){
             $(".cont2 .important").show().css({opacity:1,left:'74.3%',height:'35vw'});
          }
          else if(arrNumber == 37){
             $(".cont2 .important").show().css({opacity:1,left:'77.8%',height:'35vw'});
          }
          else if(arrNumber == 38){
             $(".cont2 .important").show().css({opacity:1,left:'80.5%',height:'35vw'});
          }
          else if(arrNumber == 39){
             $(".cont2 .important").show().css({opacity:1,left:'83.7%',height:'38vw'});
          }
          else if(arrNumber == 40){
             $(".cont2 .important").show().css({opacity:1,left:'87%',height:'35vw'});
          }
          
          
           var gender;
          if(male.checked){
              gender = "male";
          }
          else if(female.checked){
              gender = "female";
          }
          
        $(".result_kgm2").text(result);
        var result_txt;
        var waist = $("#cont1_waist").val();
        
    if(result <18.5){
        result_txt = "저체중";
        $(".result_bmi").text(result_txt);
        if(gender == "male" && waist <90){
          $(".cont2 .title span").text("낮음");
        }
        else if(gender == "male" && waist >=90){
          $(".cont2 .title span").text("보통");
        }
        else if(gender == "female" && waist <85){
          $(".cont2 .title span").text("낮음");
        }
        else if(gender == "female" && waist >=85){
          $(".cont2 .title span").text("보통");
        }
        return false;
    }
    if(result >=18.5 && result < 22.9){
        result_txt = "정상";
        $(".result_bmi").text(result_txt);
        if(gender == "male" && waist <90){
          $(".cont2 .title span").text("보통");
        }
        else if(gender == "male" && waist >=90){
          $(".cont2 .title span").text("약간높음");
        }
        else if(gender == "female" && waist <85){
          $(".cont2 .title span").text("보통");
        }
        else if(gender == "female" && waist >=85){
          $(".cont2 .title span").text("약간높음");
        }
        return false;
    }
    if(result >=22.9 && result < 24.9){
        result_txt = "과체중";
        $(".result_bmi").text(result_txt);
        if(gender == "male" && waist <90){
          $(".cont2 .title span").text("약간높음");
        }
        else if(gender == "male" && waist >=90){
          $(".cont2 .title span").text("높음");
        }
        else if(gender == "female" && waist <85){
          $(".cont2 .title span").text("약간높음");
        }
        else if(gender == "female" && waist >=85){
          $(".cont2 .title span").text("높음");
        }
        return false;
    }
    if(result >=24.9 && result < 29.9){
        result_txt = "1단계비만";
        $(".result_bmi").text(result_txt);
        if(gender == "male" && waist <90){
          $(".cont2 .title span").text("높음");
        }
        else if(gender == "male" && waist >=90){
          $(".cont2 .title span").text("매우높음");
        }
        else if(gender == "female" && waist <85){
          $(".cont2 .title span").text("높음");
        }
        else if(gender == "female" && waist >=85){
          $(".cont2 .title span").text("매우높음");
        }
        return false;
    }
    if(result >=29.9 && result < 34.9){
        result_txt = "2단계비만";
        $(".result_bmi").text(result_txt);
         if(gender == "male" && waist <90){
          $(".cont2 .title span").text("매우높음");
        }
        else if(gender == "male" && waist >=90){
          $(".cont2 .title span").text("가장높음");
        }
        else if(gender == "female" && waist <85){
          $(".cont2 .title span").text("매우높음");
        }
        else if(gender == "female" && waist >=85){
          $(".cont2 .title span").text("가장높음");
        }
        return false;
    }
    if(result >=34.9){
        result_txt = "고도비만";
        $(".result_bmi").text(result_txt);
        $(".cont2 .title span").text("가장높음");
        return false;
    }
           
      
          }
}