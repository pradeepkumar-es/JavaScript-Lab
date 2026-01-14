function Hello(user) {
    this.name = user;
}
let obj = new Hello("John")
alert(obj.name) //"John"
let obj2 = new obj.constructor("Pete");
alert(obj2.name) //Pete
//this work becauase we did not touched default prototype of Hello function object, 
// and we have Hello.prototype.constructor == Hello, its constructor is refrencing to same object, hence we can use same constructor to build other object 

//but when we change default prototype than there will be error
function Hello1(user) {
    this.name = user;
}
Hello1.prototype = {};
let objA = new Hello1("Gita");
alert(objA.name); //Gita
let objB = new objA.constructor("Sita");
alert(objB.name); //undefined 
//here it does not work because we have changed default prototype to plane object and we did not refrenced back to the same object Hello1, 
// and we do not have constructor property in prototype which can refrence to the same object Hello1 and hence no name property in objB created 
