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

button.addEventListener('click',function(){
	console.log(a);
	if(a === 0){
	p.textContent = "I'was cliked by you ><";
	p.classList.add("larger");
	button.textContent ="Click to return";
	a +=1;
	} else{
		p.textContent ="Hey! Please Click the button!";
		p.classList.remove("larger");
		button.textContent ="Click me!";
		a -=1;
	}
})