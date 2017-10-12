function computeArea(width,height){
	return width*height;
}

function testComputeArea(){
	var width = 3;
	var height = 5;
	var expected = 15;

	if(computeArea(width,height) === expected){
		console.log("Success");
		return true;
	}

	else{
		console.log("failure");
		return false;
	}
}

console.log(testComputeArea());


function celsToFahr(celsTemp){
	return celsTemp*9/5+32;
}

function fahrToCels(fahtTemp){
	return (fahtTemp-32)*5/9;
}

function testConversion(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` is working');
    return true;
  }
  else {
    console.log('FAILURE: `' + fn.name + '` is not working');
    return false;
  }
}

function testConverters() {
  var cel2FahrInput = 100;
  var cel2FahrExpect = 212;
  var fahr2CelInput = 32;
  var fahr2CelExpect = 0;
  
  if (testConversion(celsToFahr, cel2FahrInput, cel2FahrExpect) &&
     testConversion(fahrToCels, fahr2CelInput, fahr2CelExpect)) {
    console.log('SUCCESS: All tests passing');
  }
  else {
    console.log('FAILURE: Some tests are failing');
  }
}

testConverters();

function isDivisible(num,div){
	if(num%div===0){
		return true;
	}

	else{
		return false;
	}
}

function testIsDivisible(){
	if (isDivisible(10,5)&&!isDivisible(16,7)){
		console.log('SUCCESS: `isDivisible` is working');
	}

	else{
		console.log('failure')
	}
}

testIsDivisible();
