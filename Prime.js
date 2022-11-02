function isPrime(number){
	factors=0;

	for(let i=1; i<=number; i++){
		if(number%i==0){
			factors++ 
		}
	}
      return factors;
}

let ans = isPrime(7);
if(ans==0){
	console.log("Prime Number")
}else{
	console.log("Not a Prime Number")
}