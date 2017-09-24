var person = {
	name:'Kevin',
	greet:function(){
		console.log('Hello');
	}
}

console.log(person.name);
person.greet();

var stringVar = 'Kevin';
var numVar = 23;
var combined = stringVar+numVar;

typeof combined;
console.log(combined);

function alert(string){
  console.log(string);
}

function alertHelloWorld(){
	alert('Hello World');
}

alertHelloWorld();

function sayHelloTo(name){
	var greet = 'Hello!';
	return greet + name + ".";
}

console.log(sayHelloTo('Kevin'));

function countAverage(num1,num2){
	return (num1+num2)/2;
}


function sayBye(name){
	var goodBye = 'Bye!';
	return goodBye+name;
}

