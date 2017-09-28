arr = ["a","b","c","d"];

arr.forEach(function(alp){
	console.log(alp);
})

function myForEach(arr,func){
	for(var i=0;i<arr.length;i++){
		func(arr[i]);
	}
}

myForEach(arr,function(alp){
	console.log(alp);
});


Array.prototype.myForEach = function(func){
	for(var i=0; i<this.length;i++){
		func(this[i]);
	}
}

arr.myForEach(function(color){
	console.log(color);
})
