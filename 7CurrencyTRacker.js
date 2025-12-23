// https://codedamn.com/problem/wLpeFoRIEyRE1dLkDZSPX?challenge-list=50-days-of-js
/*
<!DOCTYPE html>
<html>
	<head>
		<title>Currency Tracker</title>
	</head>
	<body>
		<form onsubmit="getCurrency(event)">
			<input
				type="text"
				id="currencyInput"
				name="currencyCode"
				placeholder="INR, EUR, CAD"
				pattern="^[A-Z]{3}$"
				autocomplete="off"
				autofocus
				required
			/>

			<input type="submit" value="Get Rate" />
		</form>

		<div id="results"></div>

		<script src="script.js"></script>
	</body>
</html>
<!-- 
	Perfect question again, Pradeep 👏 —
let’s carefully break down your line:

“.json() method parses the HTTP response from API as JSON and returns a Promise which resolves into an object.”

This is 100% correct, but let’s make it crystal clear step-by-step 👇

🧠 1. What Happens When You Fetch Data

When you do:

const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");


You get a Response object, not the actual data.
It represents what the server sent back (headers, status, body, etc.)

Example:

console.log(response);
/*
Response {
  status: 200,
  body: ReadableStream,
  ...
}
*/


Now, the actual JSON data is hidden inside the body as a stream (not yet readable text or JS object).

⚙️ 2. .json() Method — What It Does

When you call:

const dataObj = await response.json();


this .json() method does 3 things internally:

Step	Action
1️⃣	Reads the response body stream (the raw bytes).
2️⃣	Converts it to a text string (like '{"key":"value"}').
3️⃣	Parses that JSON text into a JavaScript object { key: "value" }.
🔁 3. Why It Returns a Promise

Because reading the response body from the network takes time —
JavaScript can’t block the main thread waiting.

So:

.json() starts reading in the background.

Returns a Promise.

When done, the Promise resolves with the final JS object.

That’s why you must use either:

const dataObj = await response.json();


or

response.json().then(dataObj => console.log(dataObj));

🧩 4. Example in Action
const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
const dataObj = await response.json();

console.log(typeof dataObj); // "object"
console.log(dataObj.rates.INR); // e.g. 83.2


✅ After .json() resolves, you have a real JavaScript object — not text.

🔍 5. What “Promise that resolves into object” means
Term	Meaning
Promise	A wrapper around a future value (data that’s not ready yet).
Resolves into object	Once .json() finishes reading + parsing, the Promise gives you the final JS object.

So:

const dataObjPromise = response.json();
console.log(dataObjPromise); // Promise { <pending> }

const dataObj = await dataObjPromise;
console.log(dataObj); // { base: "USD", rates: { INR: 83.2, ... } }

✅ Summary
Concept	Explanation
.json()	Method of Response object
What it does	Reads and parses response body into JS object
Returns	A Promise
Use with	await or .then()
Output	JavaScript object
🧩 In your own words (simplified):

.json() reads the raw data from the server response, converts it from JSON format to a JavaScript object, and gives it back through a Promise once it’s ready.
 -->
*/
  /**
 * Returns a currency value if the given currency code exists
 * @param {FormDataEvent} event - form submit event
 */
const currencyCode = document.getElementById("currencyInput").value;
console.log(currencyCode)
async function getCurrency(event) {
	event.preventDefault(); //preventing default behaviour of form submitting

	// async function getCurrency() {
	// Fetch Data from API
	// API URL - https://api.exchangerate-api.com/v4/latest/USD
	// Verify if the passed Country Code Exists
	// If exists - return the value of the currency
	// Else - show currency code entered is wrong
	const data = await fetch("https://api.exchangerate-api.com/v4/latest/USD"); //this is http response from api
	const dataObj = await data.json(); //.json method pasrse the http response from api as json and return a promise which resolved in to object
	const currencyCode = document.getElementById("currencyInput").value;
	console.log(currencyCode)
	/*
	🧠 1. Both . and [] access object properties — but they differ
	| Syntax                      | Works When                                                         | Example                       |
| --------------------------- | ------------------------------------------------------------------ | ----------------------------- |
| **Dot notation (`.`)**      | When property name is **fixed, known, and valid as an identifier** | `dataObj.rates.INR`           |
| **Bracket notation (`[]`)** | When property name is **stored in a variable or dynamic**          | `dataObj.rates[currencyCode]` |

	*/
	const currecyRate = dataObj.rates[currencyCode];
	const resultEle = document.getElementById("results");
	
	if(currecyRate){
		resultEle.innerHTML=`1 USD = ${currecyRate} ${currencyCode}`;
		// return `1 USD = ${currecyRate} ${currencyCode}`;
	}else{
		resultEle.innerHTML = `${currencyCode} does not exist`;
		// return `${currencyCode} does not exist`
	}
	// console.log(dataObj.rates.INR);
}
// getCurrency();
/*

 */
