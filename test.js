function add(num1,num2){
	return num1+num2;
}

function testAdd(){
	var num1 = 5;
	var num2 = 10;
	var expected = 15;
	if (add(num1,num2)===expected){
		console.log('Success');
		return true;
	}
	else{
		console.log('Failure');
		return false;
	}
}

testAdd();

function shouter(whatToShout){
	return whatToShout.toUpperCase+'!!!';
}

function testShouter(){
	var whatToShout = 'hey,men';
	var expected = 'HEY,MEN!!!';
	if (shouter(whatToShout) === expected){
		console.log('Success');
		return true;
	}

	else{
		console.log("Failure");
		return false;
	}
}