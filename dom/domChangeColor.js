button = document.getElementsByTagName("button")[0];
console.log(button);

body = document.getElementsByTagName("body")[0];
console.log(body);

var isBlue = false;

// button.addEventListener("click",function(){
// 	if(isBlue){
// 		body.classList.remove("background");
// 		button.textContent = "Blue";
// 	} else{
		
// 		body.classList.add("background");
// 		button.textContent = "white";
// 	}
// 	isBlue = !isBlue;
// })

button.addEventListener("click",function(){
	body.classList.toggle("background");
})