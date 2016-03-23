function sumPrimes(num) {
  var sum = 0;
  var primes = [2,3,5,7];

  for (var i = 8; i <= num; i++){
    if (isPrime(i)) primes.push(i);
  }
  
  for (var j = 0; j < primes.length; j++) {
    sum += primes[j];
  }
  
  return sum;
};

function isPrime(x){
  for(var i=2;i<=Math.sqrt(x);i++){
    if(x % i===0){
      return false;
    }
  }
  return true;
};