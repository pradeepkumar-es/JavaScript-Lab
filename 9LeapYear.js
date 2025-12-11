// https://codedamn.com/problem/SJ6pyb2Ur0ENDlV9k0oSi?challenge-list=50-days-of-js
//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (n) => {
  if(n % 400 == 0) {
    return true
  } else if(n % 4 ==0 && n % 100 !== 0) {
    return true;
  } else {
    return false;
  }
  throw new Error('Remove this statement and implement this function');
};
