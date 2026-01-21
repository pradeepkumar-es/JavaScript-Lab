/*
Handling JavaScript Errors
In this lab, you will learn how to handle errors in JavaScript using try-catch blocks. You will create and throw a custom error, and then catch and log the errors properly.

Try-catch blocks are an important part of writing robust JavaScript code by allowing us to gracefully handle errors and prevent our application from crashing or freezing.

A try block will contain the code we want to execute, and the catch block will catch any errors. If an error is caught, you can log it or handle it in any way you want.
*/
// Implement your try-catch block here
try{
//    let err =  throw new Error("myCustomError") //this is syntactically wrong because throw is statement (not expression) like if, while, return 
//which does not produce any value; hence execuition flow will get interrupted before assignment

// const err = new Error("some error") //this is right because right side of = is an expression which is Error object {name: "Error", message: "some error", stack: "some error \n at..."}
//that produce srtingified value Error: some error when we console err object
// throw err; //this is right if let err = new Error("some error") in previous line of code
// console.log(err.message) //some error

throw new Error("myCustomError") // this is short hand of the previous code, throw statement ones appear, it stops the execution and control is passed to the 
//nearest catch block to handle error, if no catch block then program crashes;
}catch(err){
    console.error(err);

    // console.log(err);
    //both .log and .error print the err obj in the terminal but .log for genral info, and console.error(err)sends err to error stream and marks semantically as an error
}
