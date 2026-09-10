/*
A deep clone makes a copy of a JavaScript value such that the copy has no shared references to nested arrays or objects in the original. Mutating the cloned value should never affect the original.

How to deep clone an object in JavaScript
In production code, use the built-in structuredClone():


const original = { user: { name: 'Ada', tags: ['admin'] } };
const copy = structuredClone(original);

copy.user.tags.push('owner');

console.log(original.user.tags); // ['admin']
console.log(copy.user.tags); // ['admin', 'owner']
structuredClone is part of the Web Platform spec. It is available in all evergreen browsers, Node.js 17+, and Deno. It correctly handles plain objects and arrays as well as Date, RegExp, Map, Set, ArrayBuffer, typed arrays, and circular references. None of those work with the older JSON.parse(JSON.stringify(value)) trick.

When structuredClone isn't enough
structuredClone covers most cases, but it throws a DataCloneError for values that cannot be structured-cloned and silently flattens others:

Input	Behavior
Functions / methods	Throws DataCloneError.
DOM nodes	Throws (except via the special transfer option for transferable types).
Symbol values	Throws.
Class instances	Cloned as plain objects. The prototype is not preserved.
Getters and setters	Flattened to data properties on the clone.
Property descriptors	enumerable, writable, configurable flags are not preserved.
If you need to clone any of those, or you need full control over what gets shared versus copied, you'll write your own deepClone. Implementing it from scratch is also one of the most common JavaScript interview questions, because it tests recursion, type detection, and Object traversal in a small surface area.

Looking for the conceptual explanation of "shallow vs deep copy"? See the dedicated quiz page: Explain the difference between shallow copy and deep copy.

Implement deepClone(value) so it returns a deep copy of a JSON-serializable value. The input may be null, booleans, numbers, strings, arrays, or plain objects. It will not contain cycles or special objects like Date, RegExp, Map, or Set. Primitive values can be returned as-is.

Arguments
value (*): The value to clone.
Returns
(*): Returns a deep copy of value.

Examples

const obj1 = { user: { role: 'admin' } };
const clonedObj1 = deepClone(obj1);

clonedObj1.user.role = 'guest'; // Change the cloned user's role to 'guest'.
clonedObj1.user.role; // 'guest'
obj1.user.role; // Should still be 'admin'.

const obj2 = { foo: [{ bar: 'baz' }] };
const clonedObj2 = deepClone(obj2);

obj2.foo[0].bar = 'bax'; // Modify the original object.
obj2.foo[0].bar; // 'bax'
clonedObj2.foo[0].bar; // Should still be 'baz'.
Hints
New
Hint 1: Separate leaves from containers
Primitive values and null have no nested identity to duplicate, so they form the base case. Arrays and plain objects need new containers because returning either original container would preserve shared references.

Hint 2: Preserve the input shape
Classify each container before recursing. Rebuild arrays element by element, and rebuild plain objects by keeping each own enumerable key while transforming its value.

Hint 3: Rebuild every nested level
Apply the same decision to every child, not only the root. Array.prototype.map() and an Object.entries() transformation can both produce fresh containers while recursive calls handle arbitrarily deep values.
*/
/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value) {
  function clone(value) {
    const isPrimitive =
      value === null ||
      typeof value === "boolean" ||
      typeof value === "number" ||
      typeof value === "string";
    if (isPrimitive) {
      return value;
    }

    function isPlainObject(data) {
      const plainObjectStatus =
        data !== null && //typeof null is also object but null is not object hence skip it
        data !== undefined &&
        typeof data === "object" &&
        (Object.getPrototypeOf(data) === Object.prototype ||
          Object.getPrototypeOf(data) === null); //check whether object prototype is normal object.protype //when plain object is considered and  created with Object.create(null) then its prototype is null

      return plainObjectStatus;
    }

    if (Array.isArray(value)) {
      return value.map((item) => {
        if (Array.isArray(item) || isPlainObject(item)) {
          return clone(item);
        } else {
          return item;
        }
      });
    }

    if (isPlainObject(value)) {
      const obj = {};
      for (let [key, res] of Object.entries(value)) {
        if (Array.isArray(res) || isPlainObject(res)) {
          obj[key] = clone(res);
        } else {
          obj[key] = res;
        }
      }
      return obj;
    }
  }
  return clone(value);
}


//improved version
/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value) {
    //if value is not object or is null then return it as is, as they are immutable because they are primitives
  if(typeof value !== 'object' || value === null ){
    return value
  }

//if it is array, then return new array with each item with deep cloned so that no reference get shared
  if(Array.isArray(value)){
    return value.map((item)=>deepClone(item))
  }

  //other case, if they are plain object
  return Object.fromEntries(Object.entries(value).map(([key, data])=>[key, deepClone(data)]));
}


//official solution
/*
Writing out a complete deep clone solution from scratch is almost impossible under typical interview constraints. The scope is usually fairly limited, and interviewers are more interested in data-type detection and using built-in APIs and Object methods to traverse a given object.

View deep cloning as rebuilding the supported container tree. Primitive leaves can be returned as-is, but every supported container node needs a new container whose children are recursively cloned.

Solution
For interview purposes, learn Approach 2 first. The JSON version is useful as a baseline to discuss, but it only works for JSON-safe data and avoids the actual cloning logic.

Approach 1: JSON.stringify
The tempting but flawed shortcut for deep-copying an object in JavaScript is to serialize it and then deserialize it with JSON.stringify and JSON.parse.


export default function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}
Although this approach is acceptable when the input object only contains null, boolean, number, and string values, it has important downsides:

Only non-symbol-keyed properties whose values are supported by JSON can be copied. Unsupported data types are simply ignored.
JSON.stringify also has a few other surprising behaviors such as converting Date objects to ISO timestamp strings, and turning NaN and Infinity into null.
Most interviewers disallow this shortcut.

Approach 2: Recursion
This is the recommended solution. Traverse the value recursively, cloning arrays element-by-element and plain objects property-by-property.

The recursive pieces are:

Stop at primitives and null, because they do not need cloning.
For arrays, create a new array and recursively clone each element.
For objects, enumerate the object's own enumerable string keys, recursively clone each value, and rebuild a new object from those entries.

JavaScript

TypeScript

Open in editor

/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value) {
  if (typeof value !== 'object' || value === null) {
    // Primitives can be returned directly because they are already immutable values.
    return value;
  }

  if (Array.isArray(value)) {
    // Clone each slot so nested arrays do not share references with the original.
    return value.map((item) => deepClone(item));
  }

  // Rebuild the object with recursively cloned property values.
  return Object.fromEntries(
    Object.entries(value).map(([key, value]) => [key, deepClone(value)]),
  );
}
There are generally two ways to traverse an object:

Loop through the keys with the traditional for ... in statement.
Convert the object into an array of keys with Object.keys(), or an array of key-value tuples with Object.entries().
With the for ... in statement, inherited enumerable properties are processed as well. On the other hand, Object.keys() and Object.entries() only include the properties directly defined on the object, and this is usually the intended behavior.

Approach 3: structuredClone (the modern one-liner)
For production code outside an interview, the right answer is the built-in structuredClone. It is available in all evergreen browsers, Node.js 17+, and Deno.


const clonedObj = structuredClone(obj);
Cases that structuredClone handles correctly and JSON.parse(JSON.stringify(value)) does not:

Circular references.
Date, RegExp, Map, Set.
ArrayBuffer, typed arrays, Blob, File, FileList, ImageData.
Most error types.
What it still does not handle:

Input	Behavior
Functions / methods	Throws DataCloneError.
DOM nodes	Throws. Transferable types use the transfer option instead.
Symbol values	Throws.
Class instances	Cloned as plain objects. The prototype is not preserved.
Getters and setters	Flattened to data properties on the clone.
Property descriptors (enumerable, writable, configurable)	Not preserved.
See "Deep-copying in JavaScript using structuredClone" on web.dev for the full reference.

Choosing an approach in real code
For a deep clone, work down this short decision list:

Plain JSON-serializable data only? JSON.parse(JSON.stringify(value)) is fastest for that narrow case. Watch for the Date and NaN/Infinity pitfalls noted in Approach 1.
Anything more complex, but no functions, DOM, or class identity? Use structuredClone(value). This is the right default for most apps.
Need to preserve prototypes, functions, or property descriptors? Write a custom recursive clone (Approach 2), or use a well-tested library like Lodash's cloneDeep.
Updating React state? Deep cloning state on every change is almost always the wrong tool. Reach for the spread operator, Immer, or a useReducer with structural updates instead.
Common pitfalls
Forgetting the value === null check before recursing. typeof null is 'object', but it is not traversable.
Using for ... in without an own-property guard, which pulls in inherited enumerable properties.
Expecting Date, RegExp, Map, Set, functions, DOM nodes, or class instances to clone correctly in this first recursive version.
Expecting circular references to work without a visited-object cache.
Assuming a cloned object also preserves prototypes, getters, setters, or property descriptors.
Notes
Non-enumerable and symbol-keyed properties are ignored.
Property descriptors are not respected or copied into the cloned object.
If the object has circular references, the current solution will recurse indefinitely and may cause a stack overflow.
Prototypes are not copied.
These edge cases are addressed in Deep Clone II.
*/
