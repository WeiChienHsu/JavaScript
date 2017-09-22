function getFibListLength() {
  return 20;
}

function generateFib(num){
	var result = [];
	for (var i = 1; i <= num; i++){
		if (i==1) {
			result.push(0);
		}
	else if (i==2){
			result.push(1);
	}
	else{
		result.push(result[i-2]+result[i-3]);
	}
   }	
	return result;
	}

function displayFibs(fibs){
	var mainEl = document.getElementsByTagName('main')[0];
	for (var i=0; i < fibs.length; i++){
		console.log(fibs[i]);
		var newEl = document.createElement('p');
		newEl.innerText = fibs[i];
		mainEl.appendChild(newEl);
	}
}


function main(){
	var fibLimit = getFibListLength();
	var fibs = generateFib(fibLimit);
	displayFibs(fibs);
}

main();