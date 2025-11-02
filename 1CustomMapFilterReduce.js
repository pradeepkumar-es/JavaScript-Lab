// https://codedamn.com/problem/1JZweIicNnZ2ryr8Sxilg?challenge-list=50-days-of-js
// Implement the myMap, myFilter, and myReduce functions
/*
callback is function which is passed as argument to another function, so that it can be called later by outside function
ex. 
function greet(name){ //this is callback function
    console.log(name+", welcome");
}
function invite(callback){
    let userName = "Pradeep";
    callback(userName); //here callback function is called later
}
invite(greet) //call invite function by passing greet function as an argument
*/
// myMap function
function myMap(array, callback){ 
 let res = [];
 for(let i=0;i<array.length;i++){
    res.push(callback(array[i],i,array)) //here parameter and order of it depends how javascript's built in array methods works;
    // for filter, and map it same as like in this code, but in reduce, 1st parameter is accumulator, and rest is same as above code
 }
 return res;
}
// myFilter function
function myFilter(array, callback){
    let res = [];
    for(let i=0;i<array.length;i++){
        if(callback(array[i],i,array)){
            res.push(array[i]);
        }
    }
    return res;
}
// myReduce function
function myReduce(array, callback, initialValue){
    let accumulator = initialValue;
    let firstIndex = 0;
    if(accumulator==undefined){ //if initialValue is not given then it will be undefined so for loop start reducing array from 1st ele of array, other wise from intial value
        accumulator = array[0];
        firstIndex = 1; //start index from next ele of intial val
    }
    for(let i =firstIndex;i<array.length;i++){
        accumulator = callback(accumulator,array[i],i,array) //this will return accumulated ans to reduced to single ele
    }
    return accumulator;
}
// Export the functions
export {myMap, myFilter, myReduce}
