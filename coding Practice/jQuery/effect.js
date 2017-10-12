

$("button").on("click",function(){
	$(".box1").css("background","red");
	$(".box1").fadeToggle(2000);
	$(".box2").fadeOut(1000,function(){
		$(this).remove();
	});
	$(".box3").fadeToggle(function(){
		$(this).css("background","red");
	});
})