$(function(){
    $(".nav button").on('click',function(){
        $(".nav button").removeClass('on');
        $(this).addClass('on');
        var ClassName = $(this).attr('class');
        if(ClassName.indexOf('btn1') != -1){
            $(".cont2").hide();
            $(".cont3").hide();
            $(".cont4").hide();
            $(".cont1").show();
        }
        else if(ClassName.indexOf('btn2') != -1){
            $(".cont1").hide();
            $(".cont3").hide();
            $(".cont4").hide();
            $(".cont2").show();
            
        }
        else if(ClassName.indexOf('btn3') != -1){
          $(".cont1").hide();
          $(".cont2").hide();          
          $(".cont4").hide();
          $(".cont3").show();
        }
        else if(ClassName.indexOf('btn4') != -1){
          $(".cont1").hide();
          $(".cont2").hide();          
          $(".cont3").hide();
          $(".cont4").show();
        }
        
    });
    
    $(".btn_home").on("click",function(){
        location.href="../index.html";
    });
    
    $(".tab_cont td table tr td label").on('click',function(){
        var chkStat = $(this).find('span').prop('class');
        if(chkStat == '') {
          $(this).find('span').addClass('on');
        } else {
          $(this).find('span').removeClass('on');
        }
    });
    
});

          
function cont1_result(){

  var total_c = parseFloat($("#txtAll").val());   //총 콜레스트롤
  var hdl_c = parseFloat($("#txtHdl").val());     //HDL
  var trig_c = parseFloat($("#txtTrig").val());   //중성지방x0.2
  var result;
    if( $.trim($("#txtAll").val()).length == 0) {
    $("#txtAll").focus();
    alert('총콜레스테롤 수치를 입력해주세요');
    return;
  }
  if( $.trim($("#txtTrig").val()).length == 0) {
    $("#txtTrig").focus();
    alert('중성지방 수치를 입력해주세요');
    return;
  }
  if( $.trim($("#txtHdl").val()).length == 0) {
    $("#txtHdl").focus();
    alert('HDL-C 수치를 입력해주세요');
    return;
  }

  result = (total_c-hdl_c-(trig_c*0.2)).toFixed(1);
  $(".cont1 #txtResult1_1").text(result);

}

function cont2_result(){
  
  var chkSum = 0;
  var chkCnt_1 = $("input:checkbox[name='cont1_chk']:checked").length;
  var chkCnt_2 = $("input:checkbox[name='cont2_chk']:checked").length;
  var chkCnt_3 = $("input:checkbox[name='cont3_chk']:checked").length;
  var result1, result2;

  /*
  if (chkCnt > 0) {
    $("input:checkbox[name='cont2_chk']:checked").each(function(){
      chkSum+=parseFloat($(this).val());
    });
  }
  */

  console.log(chkCnt_1+'//'+chkCnt_2+'//'+chkCnt_3);
  
//cont1_chk 초고위험군 70/100
//cont2_chk 증등위험군 100/130
//cont3_chk 주요위험군 2개이상 130/160, 1개이상 160/190

  if(chkCnt_3 == 1) {
    result1='<160';
    result2='<190';
  } else if(chkCnt_3 >= 2) {
    result1='<130';
    result2='<160';
  }

  if(chkCnt_2 >= 1) {
    result1='<100';
    result2='<130';
  }

  if(chkCnt_1 >= 1) {
    result1='<70';
    result2='<100';
  }
  
  $(".cont2 #txtResult2_1").text(result1);
  $(".cont2 #txtResult2_2").text(result2); 

}

function cont4_result(){
  
  var chkSum = 0;
  var chkCnt = $("input:checkbox[name='cont4_chk']:checked").length;
  var result;

  if (chkCnt > 0) {
    $("input:checkbox[name='cont4_chk']:checked").each(function(){
      chkSum+=parseFloat($(this).val());
    });
  }
  
  //chkSum ==> 관상동맥질환, 허혈성 뇌졸중, 일과성 뇌허혈발작, 말초혈관질환 : 30점
  //당뇨병, 경동맥질환, 복부동맥류 : 10점
  //흡연, 고혈압, 연령, 관상동맥질환 가족력 : 각 1점 (총 4점)
  
  
  if(chkSum >= 30){
    result = "초고위험군";
  } else if(chkSum >= 5 && chkSum <30) {
    result = "고위험군";
  } else if(chkSum >= 2 && chkSum <5) {
    result = "중등도위험군";
  } else {
    result = "저위험군";
  }
  
  $(".cont4 #txtResult4_1").text(result);  

}

function cmmNumChk(obj){	
  var chgVal = $("#"+obj).val().replace(/[^0-9]/gi, "");
  $("#"+obj).val(chgVal);
  return;
}
