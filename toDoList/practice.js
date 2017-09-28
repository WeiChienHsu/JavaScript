var toDos=["Eat Apple"];
var input=prompt("new/list/delete/quit");

while(input!="quit"){
	if(input === "new"){
		var newToDos = prompt("input new toDos:");
		toDos.push(newToDos);
		console.log("Add " + newToDos + " in lists.")	
	}
	else if(input ==="list"){
		toDos.forEach(function(list,num){
		console.log("*******");
		console.log(num +". " + list);
		})
	}
	else if(input ==="delete"){
		var index = prompt("Enter index of todo to delet")
		toDos.splice(index,1);
		console.log("deleted Todo");
	}

	input= prompt("new/list/delete/quit"); 
	// After a movement Ask again (avoid stucking in loop)

}

console.log("OK. You've quitted.")