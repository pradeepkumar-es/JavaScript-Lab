/*
https://codedamn.com/problem/yyr_1rt3XNpRYhjpykXVU?challenge-list=50-days-of-js
Inheritance in JavaScript
In this lab, you are going to apply the concept of inheritance by creating classes and their relationship in JavaScript. First, you will create a Person class with properties 'firstName' and 'lastName'. 
Then, create a method 'fullName()' that returns the full name of the person.

After that, create another class Employee that inherits from the Person class. Add new properties 'position' and 'salary' to this derived class. Finally, create a 'toString()' method that returns the string representation of the Employee object.
*/
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
// let person = new Person("Pradeep", "Kumar");
// console.log(person.fullName());

class Employee extends Person{
    constructor(firstName, lastName, position, salary){
        super(firstName, lastName);
        this.position = position;
        this.salary = salary;
    }
    toString(){
        return `${this.fullName()} ${this.position} ${this.salary}`
    }
}
// let employee = new Employee("Bakir", "Khan", "Manager", 10000000);
// console.log(JSON.stringify(employee))
// console.log(employee.toString());
export {Person, Employee}
