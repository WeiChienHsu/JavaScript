$("input").keypress(function(event){
	if(event.which === 13){
		alert("you click enter")
	}
})

$("h1").on("click",function(){
	$(this).css("color","blue");
})

$("button").on("mouseenter",function(){
	$(this).css("font-weight","bold");
})
