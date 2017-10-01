playerOne = document.getElementsByClassName("playerOne")[0];
playerTwo = document.getElementsByClassName("playerTwo")[0];
var pointOne = 0;
var pointTwo = 0;
var winningPoint = 5; // compare to pointOne and pointTwo
var gameOver = false; 
// Select h1's wining output (When button clicked, plus one)
buttonOne = document.getElementsByClassName("buttonOne")[0];
buttonTwo = document.getElementsByClassName("buttonTwo")[0];
buttonReset = document.getElementsByClassName("buttonReset")[0];
// Select the button for wining (click it)
buttonOne.addEventListener("click",function(){
	if(!gameOver){
	  pointOne+=1;
	  if(pointOne === winningPoint){
	  	playerOne.classList.add("winner");
	  	gameOver = true;
	  }
	  playerOne.textContent = pointOne;
	}
})

buttonTwo.addEventListener("click",function(){
	if(!gameOver){
		pointTwo+=1;
		if(pointTwo === winningPoint){
			playerTwo.classList.add("winner");
			gameOver = true;
		}
	playerTwo.textContent = pointTwo;
	}
})

buttonReset.addEventListener("click",function(){
	pointTwo = 0;
	pointOne = 0;
	playerOne.textContent = pointOne;
	playerTwo.textContent = pointTwo;
	playerOne.classList.remove("winner");
	playerTwo.classList.remove("winner");
	gameOver = false;
})

// What happen after clicking button