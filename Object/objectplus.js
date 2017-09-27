// var pageViewCounts = {
// 	homePage:399,
// 	aboutMePage:450,
// 	termsOfService:25
// };

// Object.keys(pageViewCounts).map(function(keys){
// 	console.log(
// 		'the '+ keys +' page has ' + pageViewCounts[keys] + ' views.')
// })

// function classMates(name,yearsOld){
// 	return{
// 		name:name,
// 		yearsOld:yearsOld,
// 		passbirthday:function(){
// 			console.log(
// 				"After one Year.....");
// 			this.yearsOld ++;
// 		},

// 		introductionYourSelf:function(){
// 			console.log(
// 				"I'm "+this.name+" "+this.yearsOld+' years old.');
// 		}
// 	}
// }

// var kevin = classMates('Kevin',8);
// kevin.introductionYourSelf();
// kevin.passbirthday();
// kevin.introductionYourSelf();

// function makeStudentsReport(data) {
//   var results = [];
//   for (var i=0;i<data.length;i++){
//   	  var item = data[i];
//   	  results.push(item.name + ': ' + item.grade);
//   }
//   return results;
// }



// function testIt() {

//   var testData = [
//     {name: 'Jane Doe', grade: 'A'},
//     {name: 'John Dough', grade: 'B'},
//     {name: 'Jill Do', grade: 'A'}
//   ];

//   var expectations = [
//     'Jane Doe: A',
//     'John Dough: B',
//     'Jill Do: A'
//   ];

//   var results = makeStudentsReport(testData);

//   if (!(results && results instanceof Array)) {
//     console.error(
//       'FAILURE: `makeStudentsReport` must return an array');
//     return
//   }
//   if (results.length !== testData.length) {
//     console.error(
//       'FAILURE: test data had length of ' + testData.length +
//       ' but `makeStudentsReport` returned array of length ' + results.length);
//     return
//   }
//   for (var i=0; i < expectations.length; i++) {
//     var expect = expectations[i];
//     if (!results.find(function(item) {
//       return item === expect;
//     })) {
//       console.error(
//         'FAILURE: `makeStudentsReport` is not ' +
//         'producing expected strings'
//       );
//       return
//     }
//   }
//   console.log('SUCCESS: `makeStudentsReport` is working');
// }

// testIt();


// var studentData = [
//   {
//     name: 'Tim',
//     status: 'Current student',
//     course: 'Biology'
//   },
//   {
//     name: 'Sue',
//     status: 'Withdrawn',
//     course: 'Mathematics'
//   },
//   {
//     name: 'Liz',
//     status: 'On leave',
//     course: 'Computer science'
//   }
// ];

// function enrollInSummerSchool(students) {
// 	students.forEach(function(obj){
// 		obj.status = 'In Summer school';
// 	});

// 	return students;
// }



// function testIt() {
//   var testData = [
//     {
//       name: 'Burt',
//       status: 'Playing hooky',
//       course: 'Biology'
//     },
//     {
//       name: 'Melanie',
//       status: 'Sick',
//       course: 'Mathematics'
//     },
//     {
//       name: 'Leonard',
//       status: 'AWOL',
//       course: 'Computer science'
//     }
//   ];

//   var results = enrollInSummerSchool(testData);

//   if (!(results && results instanceof Array)) {
//     console.error('FAILURE: `enrollSummerSchool` must return an array');
//     return
//   }

//   for (var i=0; i<testData.length; i++) {
//     var result = results.find(function(_result) {
//       return (
//         _result.name === testData[i].name &&
//         _result.course === testData[i].course &&
//         _result.status === 'In Summer school');
//     });
//     if (!result) {
//       console.error(
//         'FAILURE: `enrollSummerSchool` should return ' +
//         'original key/value pairs for each student, and ' +
//         'update `status` to "In Summer school"');
//       return
//     }
//   }
//   console.info('SUCCESS: `enrollSummerSchool` is working');
// }

// testIt();

// function findById(items, idNum) {
//    for(var i=0;i<items.length;i++){
//    	var item =  items[i];
//    	if (item.id === idNum){
//    		return item;
//    	}
//    }
// }


// var scratchData = [
//   {id: 22, foo: 'bar'},
//   {id: 28, foo: 'bizz'},
//   {id: 19, foo: 'bazz'}
// ];

// console.log(findById(scratchData,22));

// function testIt() {
//   var testData = [
//     {id: 1, foo: 'bar'},
//     {id: 2, foo: 'bizz'},
//     {id: 3, bang: 'boo'}
//   ];
//   var result = findById(testData, 3);
//   if (!(result && result !== null && typeof result === 'object')) {
//     console.error('`findById` must return an object');
//     return
//   }
//   if (result.id !== 3) {
//     console.error(
//       'Asked for item with id of `3` but got back one with id of ' +
//       result.id
//     );
//     return
//   }
//   if (result.bang !== 'boo') {
//     console.error('Expected all key/value pairs from target object to be returned');
//     return
//   }
//   console.log('SUCCESS: `findByid` is working');
// }

// testIt();

var objectB = {
  id: 3,
  age: 33,
  city: 'Peoria'
}

var objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago'
}

var expectedKeys = [
  'id', 'name', 'age', 'city'
];

function validateKeys(object, expectedKeys) {  
	expectedKeys.sort();
	var realKeys = Object.keys(object);
	realKeys.sort();
	if (expectedKeys.length != realKeys.length){
       return false;
	}
	else{
		for(var i=0;i<realKeys.length;i++){
			if (expectedKeys[i]!=realKeys[i]){
				return false;
			}
			else{
				return true;
			}
		}
	}
}


console.log(validateKeys(objectA,expectedKeys));

function testIt() {
  var objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago'
  }

  var objectB = {
    id: 3,
    age: 33,
    city: 'Peoria'
  }

  var objectC = {
    id: 9,
    name: 'Billy Bear',
    age: 62,
    city: 'Milwaukee',
    status: 'paused'
  }

  var expectedKeys = [
    'id', 'name', 'age', 'city'
  ];

  if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
    console.error(
      'FAILURE: `validateKeys` should return a boolean value');
    return;
  }


  if (!validateKeys(objectA, expectedKeys)) {
    console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `true` but returned `false`:\n' +
      objectA  + '\n' + expectedKeys
    )
    return;
  }

  if (validateKeys(objectB, expectedKeys)) {
   console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `false` but returned `true`:\n' +
      objectB  + '\n' + expectedKeys
    );
  }

  if (validateKeys(objectC, expectedKeys)) {
   console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `false` but returned `true`:\n' +
      objectC  + '\n' + expectedKeys
    );
  }
  
  console.log('SUCCESS: `validateKeys` is working');
}

testIt()

