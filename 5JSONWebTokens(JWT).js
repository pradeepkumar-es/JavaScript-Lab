// https://codedamn.com/problem/IMemwBwOnzM2JpA_DeghY?challenge-list=50-days-of-js
//import
import  jwt from 'jsonwebtoken';
//token generation/creation
//const payload
const payload = {
    userName:"pradeep",
    email:"test@gmail.com"
}
const secretKey = "SECRET_TOKEN_KEY"
const token = jwt.sign(payload, secretKey);

//verifying the jwt
const verified  = jwt.verify(token, secretKey)

//decode the payload
const decodedPayload = jwt.decode(token)
console.log("decoded Payload",decodedPayload);
console.log('JWT Lab')
export {token, verified, decodedPayload};
/*
⚖️ 3. Summary Table
Feature	jwt.verify()	jwt.decode()
Checks token validity	✅ Yes	❌ No
Checks signature	✅ Yes	❌ No
Checks expiration	✅ Yes	❌ No
Throws error if invalid	✅ Yes	❌ No
Returns decoded payload	✅ Yes	✅ Yes
Use case	Authentication middleware	Debugging / reading token info

🧠 4. In Real Projects

Use verify() in backend routes (for real authentication).

Use decode() only when you just want to read what’s inside (for debugging, logging, etc.).

*/
