function isPrime(number){
	factors=0;
	for(let i=2; i<=number-1; i++){
		if(number%i==0){
			factors++;
			break; 
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