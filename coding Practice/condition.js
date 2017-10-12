var isMember = true;

console.log('The fee is '+(isMember? '$2':'$10'));

try{
	nonexistentVariable += "foo";
}

catch(e){
	console.log('There is something wrong');
	console.dir(e);
}

finally{
	console.log("I show!")
}