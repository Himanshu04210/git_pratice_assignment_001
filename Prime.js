function isPrime(number){
	count=0;
	for(let i=1; i<=number; i++){
		if(number%i==0){
			count++ 
		}
	}
     return count;
}

let ans = isPrime(7);
if(ans==2){
	console.log("Prime Number")
}else{
	console.log("Not a Prime Number")
}