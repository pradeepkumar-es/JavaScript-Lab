//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


//Approach: sieve of Eratosthenes: make the prime array of size of N+1 with all as True initially (all Prime), 
//then iterativel mark them as false by multiple of each prime starting from 2
//then after iteration we will have only prime position as true left, print position (prime) them starting from 2nd position;

//space: O(n) //to store prime array
//time : O(nloglogn)
export const primes = (n)=> {
  let primeArray = new Array(n+1).fill(true);
  // for(let i = 2; i <= n; i++) {
    for(let i = 2; i*i <= n; i++) { //optimized
    if(primeArray[i]) {
      // for(let j = i*2 ; j <= n; j+=i) {
        for(let j = i*i ; j <= n; j+=i) { //optimized
        primeArray[j] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if(primeArray[i]) {
      console.log(i);
    }
  }
  // throw new Error('Remove this statement and implement this function');
};
primes(5);
