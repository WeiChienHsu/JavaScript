var body = document.querySelector("body");
var isBlue = false;

setInterval(function(){
	if (isBlue){
		body.style.background = "white";
	} else{
		body.style.background = "black";
	};
	isBlue = !isBlue;
},200);