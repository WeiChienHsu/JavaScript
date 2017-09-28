var toDos=["Eat Apple"];
var input=prompt("new/list/delete/quit");

while(input!="quit"){
	if(input === "new"){
		newToDos();
	}
	else if(input ==="list"){
		inputToDos();
	}
	else if(input ==="delete"){
		deleteToDos();
	}

	input= prompt("new/list/delete/quit"); 
	// After a movement Ask again (avoid stucking in loop)

}

console.log("OK. You've quitted.");

function newToDos(){
		var newToDos = prompt("input new toDos:");
		toDos.push(newToDos);
		console.log("Add " + newToDos + " in lists.");	
}

function inputToDos(){
		toDos.forEach(function(list,num){
		console.log("*******");
		console.log(num +". " + list);
		})
}

function deleteToDos(){
		var index = prompt("Enter index of todo to delet")
		toDos.splice(index,1);
		console.log("deleted Todo");
}
