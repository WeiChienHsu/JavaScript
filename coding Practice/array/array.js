function makeList(item1, item2, item3) {
  var myList = [item1,item2,item3];
  return myList;
}


function testMakeList() {
  
  var items = ["prime rib", "fried goat cheese salad", "fish tacos"];
  var result = makeList(items[0], items[1], items[2]);
  
  if (
    result && result.length && items.length === result.length &&
    items.every(function(item) {
      return result.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `makeList` works!');
  } else {
    console.error('FAILURE: `makeList` is not working');
  } 
}

testMakeList();

function addToList(list, item) {
  list.push(item)
  return list
}


function testAddToList() {
  
  var input1 = ["red", "blue", "green"]
  var input2 = "pink"
  var expected = ["red", "blue", "green", "pink"]
  var result = addToList(input1, input2);
  
  if (
    result && result.length && expected.length === result.length &&
    expected.every(function(item) {
      return result.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `addToList` works!');
  } else {
    console.error('FAILURE: `addToList` is not working');
  } 
}

testAddToList();


function accessFirstItem(array) {
  return array[0];
}

function accessThirdItem(array) {
  return array[2];
}



function testFunctionWorks(fn, input, expected) {
  
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.log(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}


function runTests() {
  
  var list = [1, 4, 9, 16, 25]
  var item1 = 1
  var item2 = 9
  
  var testResults = [
    testFunctionWorks(accessFirstItem, list, item1),
    testFunctionWorks(accessThirdItem, list, item2),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

function findLength(array) {
  	return array.length;
}

function accessLastItem(array) {
  return array[array.length-1];
}


function testFunctionWorks(fn, input, expected) {
  
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.error(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}

function runTests() {
  
  var list = [1, 4, 9, 16, 25];
  var originalList = [1, 4, 9, 16, 25];
  var length = 5;
  var lastItem = 25;
  
  var testResults = [
    testFunctionWorks(findLength, list, length),
    testFunctionWorks(accessLastItem, list, lastItem),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();



function firstFourItems(array) {
  	return array.slice(0,4);
}


function lastThreeItems(array) {
    return array.slice(array.length - 3,array.length);
}




function testFunctionWorks(fn, input, expected) {
  
  var result = fn(input);
  if (
    result && result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `' + fn.name + '` works!')
    return true;
  } 
  else {
    console.error('FAILURE: `' + fn.name + '` is not working')
    return false;
  } 
}

function runTests() {
  
  var list = ["red bull", "monster", "amp", "rockstar", "full throttle"];
  var result1 = ["red bull", "monster", "amp", "rockstar"];
  var result2 = ["amp", "rockstar", "full throttle"];
  
  var testResults = [
    testFunctionWorks(firstFourItems, list, result1),
    testFunctionWorks(lastThreeItems, list, result2),
  ];
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();




function minusLastItem(array) {
  return array.slice(0, (array.length-1));
}


function copyFirstHalf(array) {
  if (array.length%2 === 0) {
  return array.slice(0, (array.length/2));
  }
}



function testFunctionWorks(fn, input, expected) {
  
  if (
    fn(input).length === expected.length &&
    fn(input).every(function(item) {
      return expected.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `' + fn.name + '` works!');
    return true;
  } else {
    console.error('FAILURE: `' + fn.name + '` is not working');
    return false;
  } 
}

function runTests() {
  
  var list = ["red bull", "monster", "amp", "rockstar", "full throttle", "kickstart"];
  var result1 = ["red bull", "monster", "amp", "rockstar", "full throttle"];
  var result2 = ["red bull", "monster", "amp"];
  
  var testResults = [
    testFunctionWorks(minusLastItem, list, result1),
    testFunctionWorks(copyFirstHalf, list, result2),
  ];
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();


function squares(array) {
  return array.map(function double(num){
  	return num*num;
  });
}



function testFunctionWorks(fn, input, expected) {
  
  var result = fn(input);
  if (
    result && result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `' + fn.name + '` works!')
    return true;
  } 
  else {
    console.error('FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input))
    return false;
  } 
}

function runTests() {
  
  var input1 = [1, 2, 3, 4, 5];
  var result1 = [1, 4, 9, 16, 25];
  var input2 = [2, 4, 6, 8];
  var result2 = [4, 16, 36, 64];
  
  var testResults = [
    testFunctionWorks(squares, input1, result1),
    testFunctionWorks(squares, input2, result2),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

function reverseNumber(a,b){
	return b-a;
}

function greatestToLeast(array) {
    return array.sort(reverseNumber);
}


function testFunctionWorks(fn, input, expected) {
  var result = fn(input);
  if (
    result &&
    result.length === expected.length &&
    result.every(function(item, index) {
     return (index === 0 || result[index] < result[index-1]);
    }) &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `' + fn.name + '` works!')
    return true;
  }
  else {
    console.error('FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input))
    return false;
  }
}

function runTests() {
  
  var input1 = [10, 3, 5, 22, 19];
  var result1 = [22, 19, 10, 5, 3];
  var input2 = [2, 4, 6, 8];
  var result2 = [8, 6, 4, 2];
  
  var testResults = [
    testFunctionWorks(greatestToLeast, input1, result1),
    testFunctionWorks(greatestToLeast, input2, result2),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

function shortWords(array) {
  	return array.filter(function(array){
  		return array.length < 5;
  	});
}



function testFunctionWorks(fn, input, expected) {
  
  var result = fn(input);
  if (
    result && result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `' + fn.name + '` works!')
    return true;
  } 
  else {
    console.error('FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input))
    return false;
  } 
}

function runTests() {
  
  var input1 = ['cat', 'oblivion', 'dog', 'patriarchy', 'blue'];
  var result1 = ['cat', 'dog', 'blue'];
  var input2 = ['rainbow', 'the', 'big'];
  var result2 = ['the', 'big'];
  
  var testResults = [
    testFunctionWorks(shortWords, input1, result1),
    testFunctionWorks(shortWords, input2, result2),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

function divisibleBy5(array) {
  return array.find(function div(num){
    return num % 5 ===0;
  })
}



function testFunctionWorks(fn, input, expected) {
  
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.error(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  } 
}

function runTests() {
  
  var input1 = [13, 22, 4, 47, 15, 35, 82];
  var result1 = 15;
  var input2 = [25, 20, 15, 10, 5];
  var result2 = 25;
  
  var testResults = [
    testFunctionWorks(divisibleBy5, input1, result1),
    testFunctionWorks(divisibleBy5, input2, result2),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();