var toDos = ["Buy an apple"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	
	if(input === "list"){
		listToDos();
	} else if(input === "new"){
	//ask for new todo
		newToDos();
	} else if(input ==="delete"){
		deleteToDos();
	}
  input = prompt("What would you like to do?");
  }
  console.log("Ok, You Quit the APP");

function listToDos(){
    toDos.forEach(function(todo,num){			
    console.log("*******");
    console.log(num +": "+todo);
  });
}

function newToDos(){
	var newToDos = prompt("Enter new todo");
	toDos.push(newToDos);
	console.log("Added Todo");
}

function deleteToDos(){
	var index = prompt("Enter index of todo to delet")
	toDos.splice(index,1);
	console.log("deleted Todo");
}

 