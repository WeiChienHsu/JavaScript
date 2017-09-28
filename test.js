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



var myStr; // Change this line
myStr = "FirstLine\n\\SecondLine\\\nThirdLine";


console.log(myStr);



function phoneticLookup(val) {
  var result = ""; 
  var item = {
    alpha:"Adams",
    bravp:"Boston",
    charlie:"Chicago",
    delta:"Denver",
    echo:"Easy",
    foxtrot:"Frank"
  };
  result = item[val];
  console.log (result);
}


phoneticLookup("charlie");

var ourMusic ={
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP" ],
    "gold": true
  };


console.log(ourMusic.formats);


myArr = [[1,2],[3,4,5],[6,7]];
for(var i=0;i<myArr.length;i++){
	for(var j=0;j<myArr[i].length;j++){
		console.log(myArr[i][j]);
	}
}

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];
function lookUpProfile(firstName, prop){
 for (var x = 0; x < contacts.length; x++){
    if (contacts[x].firstName === firstName) {
        if (contacts[x].hasOwnProperty(prop)) {
             contacts[x][prop];
        } else {
            return "No such property";
        }
    }
}
  return "No such contact";
}

console.log(lookUpProfile("Akira", "address"));

var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";
var expressionToGetSoftware = /a/gi;
var softwareCount = testString.match(expressionToGetSoftware);
console.log(softwareCount);

function factorial(num){
	var result=1;
	for(var i=1;i<=num;i++){
		result*=i;
	}
	return result;
}

console.log(factorial(10));

function kebabToSnake(str){
	var temp = str["-"];
	str[temp] = "_";
	return str;
}

console.log(kebabToSnake("hello-world"));


var numbers = [1,2,3,4,5,6,7,8,9,10];
var colors = ["red","orange","yellow","green"];

numbers.forEach(function(color){
  if(color%3===0){
    console.log(color);
  }
})

function logNums(el, i, arr) {
  console.log("This is the numeber " +i+"itme: " + el + " in the "+ arr);
}
 
[1,2,3].forEach(logNums);