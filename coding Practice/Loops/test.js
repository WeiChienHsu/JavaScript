function fizzBuzz(countTo) {
   var numbers=[];
   for(var i=0;i<countTo;i++){
         numbers.push(0);
   }
  
   for(var i=1;i<=countTo;i++){
        if(i%15 == 0){
         numbers[i-1] = "fizzbuzz";
        }
        else if(i%3 == 0){
         numbers[i-1] = "fizz";
        }
        else if(i%5 == 0){
         numbers[i-1] = "buzz";
        }
        else{
         numbers[i-1] = i;
        }
   }
   return numbers;
}

console.log(fizzBuzz(15));