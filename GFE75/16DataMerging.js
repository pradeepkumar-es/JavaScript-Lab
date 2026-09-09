/*
🧩 Data Merging — Merge Rows by User (implement a function to merge data from same user)

Difficulty: Medium
Category: JavaScript / Data Manipulation
Estimated Time: 30–45 minutes

Problem

You are given an array of data rows representing user information collected from different systems.

A single user may appear in multiple rows. Your task is to merge rows belonging to the same user into a single object.

Two rows belong to the same user when they have the same id.

Input

Each row is an object with:

{
  id: number,
  name?: string,
  email?: string,
  age?: number,
  city?: string
}

Some fields may be missing from one row but present in another.

Example
const rows = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', city: 'London' },
  { id: 1, age: 25, city: 'New York' },
  { id: 2, email: 'bob@example.com' },
];

Your function should return:

[
  {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
    age: 25,
    city: 'New York',
  },
  {
    id: 2,
    name: 'Bob',
    city: 'London',
    email: 'bob@example.com',
  },
]
Requirements

Implement:

function mergeUserData(rows) {
  // ...
}
1. Merge rows with the same id

For example:

[
  { id: 1, name: 'Alice' },
  { id: 1, age: 25 }
]

becomes:

[
  { id: 1, name: 'Alice', age: 25 }
]
2. Preserve the order of first appearance

Given:

[
  { id: 3, name: 'Charlie' },
  { id: 1, name: 'Alice' },
  { id: 3, age: 30 },
  { id: 2, name: 'Bob' }
]

the result must start with:

[
  { id: 3, ... },
  { id: 1, ... },
  { id: 2, ... }
]

The second occurrence of id: 3 should not create another entry.

3. Later values should overwrite earlier values

For:

[
  { id: 1, name: 'Alice', city: 'London' },
  { id: 1, city: 'Paris' }
]

return:

[
  { id: 1, name: 'Alice', city: 'Paris' }
]
4. Missing fields should not erase existing data

For example:

[
  { id: 1, name: 'Alice', age: 25 },
  { id: 1, name: undefined }
]

You should not accidentally lose age.

Edge Cases

Your implementation should handle:

Empty input
mergeUserData([]);

Expected:

[]
One row
mergeUserData([
  { id: 1, name: 'Alice' }
]);

Expected:

[
  { id: 1, name: 'Alice' }
]
Duplicate rows
mergeUserData([
  { id: 1, name: 'Alice' },
  { id: 1, name: 'Alice' }
]);

Expected:

[
  { id: 1, name: 'Alice' }
]
Constraints
Do not use external libraries.
Do not mutate the original rows array.
Aim for O(n) time complexity.
The returned objects should be newly created rather than modifying the input objects.
Starter Code
/**
 * @param {Array<Object>} rows
 * @return {Array<Object>}
 */
// export default function mergeUserData(rows) {
//   // Your implementation
// }
// */

// solution
// /**
//  * @param {Array<Object>} rows
//  * @return {Array<Object>}
//  */
// export default function mergeUserData(rows) {
//   // Your implementation
//   if(rows.length==0){
//     // console.log([]);
//     return [];
//   }
//   const visited = new Map();
//   rows.forEach((item)=>{
//     if(!visited.has(item.id)){
//          visited.set(item.id, {...item}); //here {...item} is used because we have return newly created objects
//     // ans.push(item); 
//     }else{
//       let prev = visited.get(item.id);
//       visited.set(item.id, {...prev, ...item})
//     }
//   })
//   return [...visited.values()]
//   // console.log([...visited.values()]) //here visited.values() return iterable but not array so we need to make it array using spread operator or Array.from()
//   //or
//   // console.log(Array.from(visited.values()));
// }

//improved version
/**
 * @param {Array<Object>} rows
 * @return {Array<Object>}
 */
export default function mergeUserData(rows) {
  // Your implementation
  //here we do not need to return empty array for empty rows explicitly because when we make array from empty map then it will be automatically an empty array and no loop run on empty rows
  const visited = new Map();
  rows.forEach((item)=>{
    const prev = visited.get(item.id); //if empty then it will return undefined
    visited.set(item.id, {...prev, ...item}) //here if prev is undefined (for that user not created already in map), then there will be no error in object spread (here spread operator in objects, look for object properties, if it don't exist then it simply skip(eg.undefined, null, {})) but in array spread look for whether it is iterable or not since undefined is not iterable it will throw error of undefined is not iterable
  })
  // console.log(Array.from(visited.values()));
  return Array.from(visited.values());
}

// tests
mergeUserData([]); //[]

mergeUserData([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, age: 25 },
]); //[ { id: 1, name: 'Alice', age: 25 }, { id: 2, name: 'Bob' } ]

mergeUserData(
  [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob' }
]
)//[ { id: 1, name: 'Alice', age: 25 }, { id: 2, name: 'Bob' } ]

mergeUserData([
  { id: 3, city: 'Delhi' },
  { id: 1, name: 'Alice' },
  { id: 3, age: 30 },
  { id: 1, city: 'Mumbai' },
]); /*
[
  { id: 3, city: 'Delhi', age: 30 },
  { id: 1, name: 'Alice', city: 'Mumbai' }
]
*/

mergeUserData(
  [
  { id: 1, name: 'Alice' },
  { id: 1, age: 25 }
]
)//[ { id: 1, name: 'Alice', age: 25 } ]
