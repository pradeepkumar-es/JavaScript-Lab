// https://codedamn.com/problem/8ZdLoGU7vicRCzZDxM-Zm?challenge-list=50-days-of-js
console.log('JavaScript Date Object Lab')

//Create a new Date object called `currentDate` and log the current date and time
const currentDate = new Date();
console.log(currentDate); //for testing purpose only
//Create a function `formatDate` that takes a Date object and returns a formatted string in the format 'dd-mm-yyyy'
function formatDate(currentDate){
    return `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`;
}
console.log(formatDate(currentDate)); //for testing purpose only
//Create a function `getDayName` that takes a Date object and returns the day of the week as a string
function getDayName(currentDate){
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return dayNames[currentDate.getDay()]
}
console.log(getDayName(currentDate)); //for testing purpose only
//Export the `formatDate` function using ESM syntax
export {formatDate};
