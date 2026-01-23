/*
Iteration Protocols in JavaScript
In this lab, you'll learn about iteration protocols in JavaScript by creating an iterable and iterator for even numbers. Iteration protocols are a set of conventions used in JavaScript to iterate over a collection.

The iterable protocol allows JavaScript objects to define or customize their iteration behavior. It requires the object to have a [Symbol.iterator] method.

The iterator protocol defines a standard way to produce a sequence of values. It requires an object to have a next method that should return an object with two properties: value (the next value in the sequence) and done (a boolean indicating if the sequence is complete).
Create an iterable object `myIterable`
Implement an iterator in `myIterable[Symbol.iterator]` function
Modify iterator to return 5 even numbers starting from 2
Export the `myIterable` object as default
*/
console.log('Create an iterable object to generate even numbers')
const myIterable = { //iterable object : object which can be used in for..of.. loop
    from : 2,
    to : 10
}

myIterable[Symbol.iterator] = function(){
    return { //iterator object
        current : this.from,
        last : this.to,
        next(){
            // if(this.current <= this.last && this.current % 2 == 0){
            if(this.current <= this.last){
                if(this.current % 2 == 0){ //below is 3 line code is implementation post increment by more than 1 (like genralization of count++)
                    this.even = this.current;
                    this.current +=2;
                }
                return {done : false, value : this.even}
            }else{
                return {done : true};
            }

        }
    }
}
// console.log(myIterable[Symbol.iterator]());
// for(let num of myIterable){
//     console.log(num);
// }
export default myIterable;
/*
 //iterable object : object which can be used in for..of.. loop, for of loop when starts internally call Symbol.iterator method of iterable object 
 which return iterator object, onwards for of loop work only on iterator obj which has method next(), whenver for of loop need value, it calls the next method
 of iterator object which return object with done, and value properties as {done:Boolean, value: current value}, when done become true, then iteration get finished
*/
