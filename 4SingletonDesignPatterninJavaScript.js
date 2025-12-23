// https://codedamn.com/problem/XRoz9cqToD9G8hSTm0S-E?challenge-list=50-days-of-js
/*
 * Create your Singleton class in this file.
 */
class Singleton{
    static instance; //static variable to store singleton instance, this varible is shared in whole class 
    //static instance creation help in assigning the varibale to class itself, not to other instance object that is creation letter using new keyword
    //we need to make static method as well
    static getInstance(){
        if(!Singleton.instance){ //when 1st time getInstance() is called, there will be no instance, so create instance for one time only
            Singleton.instance = new Singleton();
        }
        return Singleton.instance; //otherwise, return it, in all other cases that is stored in static instance
    }
    message(){
        return "Hello Singleton!"
    }
}
// let myMessage = Singleton.instance; //instance
// myMessage.message();
// console.log(message)
export default Singleton;
