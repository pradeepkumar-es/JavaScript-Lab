//https://codedamn.com/problem/EtURnPzVTw9Bgby9P9cdp?challenge-list=50-days-of-js
// Create your functions here
function addNumbers (a,b){
    return a+b;
}
function multiplyNumbers (a,b){
    return a*b;
}
export {addNumbers}; //named export
/*
The {} let JS:

Distinguish which items you’re exporting/importing.

Avoid confusion between multiple exports.

Enforce name matching across modules.

Think of {} like a "menu" of names the module exposes.
*/
export default multiplyNumbers;
