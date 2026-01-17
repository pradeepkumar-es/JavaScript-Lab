/*
Inherit from SyntaxError
importance: 5
Create a class FormatError that inherits from the built-in SyntaxError class.

It should support message, name and stack properties.

Usage example:

let err = new FormatError("formatting error");

alert( err.message ); // formatting error
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError ); // true (because inherits from SyntaxError)
*/
class FormatError extends SyntaxError{
    constructor(message){
        super(message); //call constructor of SyntaxError so that this get defined
        this.name = this.constructor.name;
        // this.message = message; will be handled by SyntaxError
        // this.stack =  // will be handled by syntaxError
    }
}

let err = new FormatError("formatting error");

alert( err.message ); // formatting error
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError ); // true (because inherits from SyntaxError)
