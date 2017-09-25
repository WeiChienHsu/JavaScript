// function makeList(item1, item2, item3) {
//   var myList = [item1,item2,item3];
//   return myList;
// }


// function testMakeList() {
  
//   var items = ["prime rib", "fried goat cheese salad", "fish tacos"];
//   var result = makeList(items[0], items[1], items[2]);
  
//   if (
//     result && result.length && items.length === result.length &&
//     items.every(function(item) {
//       return result.indexOf(item) > -1;
//     })) {
//     console.log('SUCCESS: `makeList` works!');
//   } else {
//     console.error('FAILURE: `makeList` is not working');
//   } 
// }

// testMakeList();

// function addToList(list, item) {
//   list.push(item)
//   return list
// }


// function testAddToList() {
  
//   var input1 = ["red", "blue", "green"]
//   var input2 = "pink"
//   var expected = ["red", "blue", "green", "pink"]
//   var result = addToList(input1, input2);
  
//   if (
//     result && result.length && expected.length === result.length &&
//     expected.every(function(item) {
//       return result.indexOf(item) > -1;
//     })) {
//     console.log('SUCCESS: `addToList` works!');
//   } else {
//     console.error('FAILURE: `addToList` is not working');
//   } 
// }

// testAddToList();


// function accessFirstItem(array) {
//   return array[0];
// }

// function accessThirdItem(array) {
//   return array[2];
// }



// function testFunctionWorks(fn, input, expected) {
  
//   if (fn(input) === expected) {
//     console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
//     return true;
//   }
//   else {
//     console.log(
//       'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
//       ' but was ' + fn(input)
//     );
//     return false;
//   }
// }


// function runTests() {
  
//   var list = [1, 4, 9, 16, 25]
//   var item1 = 1
//   var item2 = 9
  
//   var testResults = [
//     testFunctionWorks(accessFirstItem, list, item1),
//     testFunctionWorks(accessThirdItem, list, item2),
//   ];
  
  
  
//   var numPassing = testResults.filter(function(result){ return result; }).length;
//   console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
// }

// runTests();

// function findLength(array) {
//   	return array.length;
// }

// function accessLastItem(array) {
//   return array[array.length-1];
// }


// function testFunctionWorks(fn, input, expected) {
  
//   if (fn(input) === expected) {
//     console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
//     return true;
//   }
//   else {
//     console.error(
//       'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
//       ' but was ' + fn(input)
//     );
//     return false;
//   }
// }

// function runTests() {
  
//   var list = [1, 4, 9, 16, 25];
//   var originalList = [1, 4, 9, 16, 25];
//   var length = 5;
//   var lastItem = 25;
  
//   var testResults = [
//     testFunctionWorks(findLength, list, length),
//     testFunctionWorks(accessLastItem, list, lastItem),
//   ];
  
  
  
//   var numPassing = testResults.filter(function(result){ return result; }).length;
//   console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
// }

// runTests();



// function firstFourItems(array) {
//   	return array.slice(0,4);
// }


// function lastThreeItems(array) {
//     return array.slice(array.length - 3,array.length);
// }




// function testFunctionWorks(fn, input, expected) {
  
//   var result = fn(input);
//   if (
//     result && result.length === expected.length &&
//     result.every(function(item) {
//       return expected.indexOf(item) > -1;
//     })) {
//     console.log('SUCCESS: `' + fn.name + '` works!')
//     return true;
//   } 
//   else {
//     console.error('FAILURE: `' + fn.name + '` is not working')
//     return false;
//   } 
// }

// function runTests() {
  
//   var list = ["red bull", "monster", "amp", "rockstar", "full throttle"];
//   var result1 = ["red bull", "monster", "amp", "rockstar"];
//   var result2 = ["amp", "rockstar", "full throttle"];
  
//   var testResults = [
//     testFunctionWorks(firstFourItems, list, result1),
//     testFunctionWorks(lastThreeItems, list, result2),
//   ];
  
  
//   var numPassing = testResults.filter(function(result){ return result; }).length;
//   console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
// }

// runTests();




// function minusLastItem(array) {
//   return array.slice(0, (array.length-1));
// }


// function copyFirstHalf(array) {
//   if (array.length%2 === 0) {
//   return array.slice(0, (array.length/2));
//   }
// }



// function testFunctionWorks(fn, input, expected) {
  
//   if (
//     fn(input).length === expected.length &&
//     fn(input).every(function(item) {
//       return expected.indexOf(item) > -1;
//     })) {
//     console.log('SUCCESS: `' + fn.name + '` works!');
//     return true;
//   } else {
//     console.error('FAILURE: `' + fn.name + '` is not working');
//     return false;
//   } 
// }

// function runTests() {
  
//   var list = ["red bull", "monster", "amp", "rockstar", "full throttle", "kickstart"];
//   var result1 = ["red bull", "monster", "amp", "rockstar", "full throttle"];
//   var result2 = ["red bull", "monster", "amp"];
  
//   var testResults = [
//     testFunctionWorks(minusLastItem, list, result1),
//     testFunctionWorks(copyFirstHalf, list, result2),
//   ];
  
  
//   var numPassing = testResults.filter(function(result){ return result; }).length;
//   console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
// }

// runTests();


