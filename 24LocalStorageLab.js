/*
Local Storage Lab
In this lab, you'll practice using the Web Storage API by creating a simple key-value storage system. You will create two div sections, one for saving data to localStorage and another for retrieving data from it.

First, create a div with id localStorage-setup. Inside this div, add an input field with id storageKey and a button with id setStorage. You'll save the input field's value to localStorage when the button is clicked.

Next, bind a click event to the setStorage button. When clicked, save the input field's value to localStorage using the key myKey.

Create another div with id localStorage-retrieve. Inside this div, add a div element with id output to display the retrieved value and a button with id getStorage to retrieve the value from localStorage.

Bind a click event to the getStorage button. When clicked, retrieve the value from localStorage using the key myKey and display it in the output element.

Remember, localStorage values are stored as strings. If you want to store complex data types like objects or arrays, you have to convert them into strings using JSON.stringify() before storing and parse them back using JSON.parse() after retrieving.
*/
//html code
<!doctype HTML>
<html>
    <head>
        <title>Web Storage Lab</title>
    </head>
    <body>
        <!-- Create a div with id 'localStorage-setup' and add an input field with id 'storageKey' and a button with id 'setStorage' -->
        <div id="localStorage-setup">
            <input id="storageKey" type="text">
            <button id="setStorage">Save Key</button>
        </div>
        <div id="localStorage-retrieve">
            <div id="output"></div>
            <button id="getStorage">Retrive value</button>
        </div>
        <!-- Create another div with id 'localStorage-retrieve' and add an element with id 'output' and a button with id 'getStorage' -->
        <script src='script.js'>
        </script>
    </body>
</html>

//js code 
// Write JavaScript code to bind click event on the setStorage and getStorage buttons
let setEle = document.getElementById("setStorage");
setEle.addEventListener("click", function(){
    // alert("storage EventTriggered for key value setup");
    localStorage.setItem("myKey", document.getElementById("storageKey").value);
})

let getEle = document.getElementById("getStorage");
getEle.addEventListener("click", function(){
    // alert("Storage event Triggered for retriving value from local storage");
    const value = localStorage.getItem("myKey");
    let outPutEle = document.getElementById("output");
    outPutEle.innerText = value;
})
