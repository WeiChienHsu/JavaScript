var oldFamily = {
	dad:"Kevin",
	mon:"Elsa",
	me:"Nick",
} 

function myFunction(obj){
	obj.dad = 'Kevin22';
	return obj;
}

myFunction(oldFamily);
console.log(oldFamily);