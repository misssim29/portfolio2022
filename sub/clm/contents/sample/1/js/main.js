$(function(){
	
});

function pullRod() {
	var pullCnt = parseInt($("#pullCnt").val());
	var endCnt = 6;
	var remainCnt = endCnt-(pullCnt+1);
	console.log(remainCnt);
	
	if (remainCnt > 0){
		$("#pullCnt").val(pullCnt+1);		
		swapRod();
		if (remainCnt>0 && remainCnt<=9){
			$("#remainCnt").text(remainCnt);
		}
	} else {
		$("#remainCnt").text('');
		setTimeout(function() {
			$("#gun_1").css('opacity', '0');
			$("#gun_2").css('opacity', '0');
			$("#gun_3").css('opacity', '1.0');
			$("#water_drop").css('opacity', '1.0');			
		}, 0);
		setTimeout(function() {
			window.parent.goNextSequence();	
		}, 500);		
	}
} 

function swapRod(){
	
	setTimeout(function() {
		$("#gun_1").addClass('hiddenItem');	
		$("#gun_2").addClass('moveRight');	
	}, 500);
	
	setTimeout(function() {
		$("#gun_1").removeClass('hiddenItem');	
		$("#gun_2").removeClass('moveRight');	
	}, 1000);
		
}