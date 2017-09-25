var myArray=[1,2,3];

console.log(myArray.length);
var lastItem = myArray.pop();
console.log(myArray);
console.log(lastItem);

var myArray1=[1,2,3];

var firstItem = myArray1.shift();
console.log(myArray1);
console.log(firstItem);

var myArray2 = [1,2,10,20,100,200];
myArray2.sort();
console.log(myArray2);

function sortNumber(a,b){
	return a - b;
}

myArray2.sort(sortNumber);
console.log(myArray2);

var step = ['wash','throw','pick'];
var stepsElement = step.map(function(step){
	return '<li>'+step+'</li>';
	});

console.log('<ul>\n\t'+stepsElement.join('\n\t')+'\n</ul>');

var directionsLibrary = [
  ['wash', 'rinse', 'repeat'],
  ['be born', 'live', 'die'],
            ['wake', 'work', 'sleep']
];

function saveDirectionInDatabase(direction) {
  // save the direction in the database
  console.log('`saveDirectionInDatabase` called');
}

directionsLibrary.forEach(saveDirectionInDatabase);


function isEven(num){
	return num%2 ===0;
}

var myArray3 = [1,2,3,4,5,6,7,8];
var evens = myArray3.filter(isEven);
console.log(evens);

function isEven(num) {
  return num % 8 === 0;
}

var myNumbers = [1, 2, 3, 4, 5, 6];
console.log(myNumbers.find(isEven));


function copyFirstHalf(array) {
  if (array.length%2 === 0) {
    return array.slice(0,array.length/2);
  }
}

var array = ["red bull", "monster", "amp", "rockstar", "full throttle", "kickstart"];
console.log(copyFirstHalf(array));
