/*
Collatz Conjecture
The Collatz Conjecture or 3x+1 problem can be summarized as follows:

Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is
odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely.
The conjecture states that no matter which number you start with, you will
always reach 1 eventually.

Given a number n, return the number of steps required to reach 1.

Examples
Starting with n = 12, the steps would be as follows:

12
6
3
10
5
16
8
4
2
1
Resulting in 9 steps starting from 0th steps. So for input n = 12, the return value would be 9.

Create a steps() function that returns the number of steps taken to reach 1. Make sure to export the function using ESM Syntax.

Hint : You can use recursion to make it a bit easier

123456798101112131415161718192021
      return 0;
    }
    if(n % 2 == 0) {
      n = n/2;
    }else if(n % 2 !=0){
      n = 3*n+1
    }
    return 1 + steps(n);
};



*/
//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  if(n <= 0){
    throw new Error('Negative number is not allowed!');
  }
    if(n == 1) {
      return 0;
    }
    if(n % 2 == 0) {
      n = n/2;
    }else if(n % 2 !=0){
      n = 3*n+1
    }
    return 1 + steps(n);
};

