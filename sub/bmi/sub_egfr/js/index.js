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
    
    $(".gender > div > label").on('click',function(){
        $(".gender > div > label > span").removeClass('on');
        $(this).find('span').addClass('on');
    });
    
});

function fncGFR(){
    var tst_cr = document.getElementById("txtCr");
    var tst_age = document.getElementById("txtAge");
    var tst_sex = $("input[name='gender']:checked").attr('id');
    var reg = /[^0-9 ^\.]/gi;
    
    if(tst_cr.value == ''){
        alert("혈청 크레아티닌 농도를 입력해주세요.");
        $(tst_cr).focus();
    }
    else if(tst_age.value == ''){
        alert("나이를 입력해주세요.");
        $(tst_age).focus();
    }
   else if(tst_sex != 'male' && tst_sex != 'female'){
        alert("성별을 선택해주세요.")
    }
    else if(reg.test(tst_cr.value) || reg.test(tst_age.value)){
        alert("혈청 크레아티닌 농도와 나이는 숫자만 입력하실 수 있습니다.");
    }
    
    else{
    
        var cr = parseFloat($("#txtCr").val());   //크레아니틴 농도
        var age = parseFloat($("#txtAge").val());   //나이       
        var sex = $("input[name='gender']:checked").val(); //성별
        var sexPoint = 1;
        var black = $("#rdoBlack").val(); //흑인여부
        var result;

        //여자일 경우 성별에 따른 계산식 변수에 0.742를 적용
        if(sex==2){
            sexPoint = 0.742;
        }

        result = (175*Math.pow(cr,-1.154)*Math.pow(age,-0.203)*sexPoint).toFixed(1);
        $("#txtResult").text(result);
        
        if(result >= 90){
            $(".cont2 .txt1").text("정상입니다.");
            $(".cont2 .txt2").text("혈뇨, 단백뇨 여부를 체크하고, 이상이 있으면 원인을 찾아서 교정하세요.");
        }
        else if(result >= 60 && result < 90){
            $(".cont2 .txt1").text("감소하기 시작했습니다.");
            $(".cont2 .txt2").text("혈압을 조절하고, 원인을 찾아서 치료하세요.");
        }
        else if(result >= 30 && result < 60){
            $(".cont2 .txt1").text("상당히 감소했습니다.");
            $(".cont2 .txt2").text("혈압을 조절하고, 신장기능 악화를 늦추기 위한 치료를 시작하세요.");
        }
        else if(result >= 15 && result < 30){
            $(".cont2 .txt1").text("생명 유지에 필요한 기능을 겨우 유지하고 있습니다.");
            $(".cont2 .txt2").text("신장투석을 준비하세요. 이식 가능성에 대해서도 준비하시기 바랍니다.");
        }
        else if(result < 15){
            $(".cont2 .txt1").text("심각하게 손상되어 투석이나 이식 없이는 생명을 유지하기 어려운 상태입니다.");
            $(".cont2 .txt2").text("신장 투석 또는 신장 이식을 시행받아야 합니다.");
        }
    }
    }