// https://codedamn.com/problem/ty8uyzVk_Tg8mf4k3wG_h?challenge-list=50-days-of-js
console.log('Welcome to the Array.prototype.every() lab')

// Your code goes here
function checkPositive(arr){
    return arr.every(num=>num>0); //this check the condition on every ele, if all true then return true, otherwise false;
}
export { checkPositive};
