var h1 = document.querySelector("h1");

h1.addEventListener("click",function(){
	h1.style.color="red";
})


var lis = document.querySelectorAll("li");

for(var i=0; i<lis.length; i++){
	lis[i].addEventListener("click",function(){
		this.style.color="blue";
	});
}

var p = document.querySelector('p');
var button = document.querySelector('button');
var a = 0;

var p = document.querySelector('p');
var button = document.querySelector('button');
var start = 0;

button.addEventListener("click",function(){
	if(start == 0){
		p.textContent = "Don't Click me!";
		p.classList.add("larger");
		button.textContent = "Return";
		start += 1;
	} else{
		p.textContent = "Hey Please click me!";
		p.classList.remove("larger");
		button.textContent = "Click me!";
		start -= 1;
	}

})