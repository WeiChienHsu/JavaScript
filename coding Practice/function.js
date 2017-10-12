function wisePerson(wiseType,whatToSay){
	return 'A wise'+wiseType+'once said: "'+ whatToSay+ '".';
}

console.log(wisePerson("goat","Hello world"));


function shouter(whatToShout){
    var upperShout = whatToShout.toUpperCase();
    return upperShout+"!!!";
}

console.log(shouter("as you can hear i am whispering"));


function textNormalizer(text){
   var lowerText = text.toLowerCase();
   var noSpaceLowerText = lowerText.trim();
   return noSpaceLowerText;
}

function testTextNormalizer() {
  var text = "   let's GO SURFING NOW everyone is learning how   ";
  var expected = "let's go surfing now everyone is learning how";
  if (textNormalizer(text) === expected) {
    console.log('SUCCESS: `textNormalizer` is working');
  }
  else {
    console.log('FAILURE: `textNormalizer` is not working');
  }
}

testTextNormalizer();