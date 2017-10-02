$('button').click(function(){
	$('body').css("background","yelow");
	$('img').fadeOut(3000,function(){
		$(this).remove();
	});
});

$('ul li').css("color",'red');
$('.header').css("border","2px solid red");

$('a')