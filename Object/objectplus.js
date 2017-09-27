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

function makeStudentsReport(data) {
  var results = [];
  for (var i=0;i<data.length;i++){
  	  var item = data[i];
  	  results.push(item.name + ': ' + item.grade);
  }
  return results;
}



function testIt() {

  var testData = [
    {name: 'Jane Doe', grade: 'A'},
    {name: 'John Dough', grade: 'B'},
    {name: 'Jill Do', grade: 'A'}
  ];

  var expectations = [
    'Jane Doe: A',
    'John Dough: B',
    'Jill Do: A'
  ];

  var results = makeStudentsReport(testData);

  if (!(results && results instanceof Array)) {
    console.error(
      'FAILURE: `makeStudentsReport` must return an array');
    return
  }
  if (results.length !== testData.length) {
    console.error(
      'FAILURE: test data had length of ' + testData.length +
      ' but `makeStudentsReport` returned array of length ' + results.length);
    return
  }
  for (var i=0; i < expectations.length; i++) {
    var expect = expectations[i];
    if (!results.find(function(item) {
      return item === expect;
    })) {
      console.error(
        'FAILURE: `makeStudentsReport` is not ' +
        'producing expected strings'
      );
      return
    }
  }
  console.log('SUCCESS: `makeStudentsReport` is working');
}

testIt();
