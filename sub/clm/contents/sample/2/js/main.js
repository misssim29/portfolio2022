$(function(){

	$( "#piece" ).draggable();
	$( "#dropArea" ).droppable({
    	drop: function( event, ui ) {
    		puzzlMeet();
    	}
  	});
	
	
});

//드래그 되는 동안 실시간으로 이벤트작동
function dragEnter(ev) {
	console.log('X:'+ev.offsetX+', Y:'+ev.offsetY);
//	$(".piece").css('opacity', '0');
	$("#pos").text('X:'+ev.offsetX+', Y:'+ev.offsetY);
//	ev.preventDefault();
}

//처음 드래그 시작할때 발생
function drag(ev) {
//	console.log(ev);
//	ev.dataTransfer.setData("text", ev.target.id);
}

//드래그 종료시점에 발생
function drop(ev) {
	var posX = 317;
	var posY = 266;
	var dragX = ev.offsetX;
	var dragY = ev.offsetY
	var calcX = Math.abs(dragX-posX);
	var calcY = Math.abs(dragY-posY);
	
	console.log(calcX +'///'+ calcY);
	ev.preventDefault();
	
	if (calcX <= 100 && calcY <= 100) {
		puzzlMeet();
	} else {
		$(".piece").css('opacity', '1');
	}
	return;
}

function puzzlMeet() {
	setTimeout(function() {
		$(".piece_1").addClass("mix");
		$(".piece_2").addClass("mix");
		$(".piece_3").addClass("mix");
		$(".piece_4").addClass("mix");
	},0);
	setTimeout(function() {
		$(".background_2").fadeIn(600);
	},500);
}
