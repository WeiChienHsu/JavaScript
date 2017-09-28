var toDos = ["Buy an apple"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	
	if(input === "list"){
		console.log(toDos);
	} else if(input === "new"){
	//ask for new todo
	var newToDos = prompt("Enter new todo");
	toDos.push(newToDos);
	}
  input = prompt("What would you like to do?");
  }

  console.log("Ok, You Quit the APP");

