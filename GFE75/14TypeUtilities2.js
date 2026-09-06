/*
JavaScript is a dynamically typed language, which means the types of variables can change at runtime. Many interview questions involve recursively traversing objects that can hold different value types, and each type may require different handling (e.g. different code is needed to iterate over an array vs. an object). Understanding JavaScript types is crucial to solving questions like Deep Clone and Deep Equal.

The Type Utilities question covered utility functions for primitive values. Implement the following utility functions to determine the types of non-primitive values.

isArray(value): Return true if value is an array, false otherwise.
isFunction(value): Return true if value is a function, false otherwise.
isObject(value): Return true if value is an object (e.g. arrays, functions, plain objects, etc., excluding null and undefined), false otherwise.
isPlainObject(value): Return true if value is a plain object, false otherwise (for arrays, functions, etc).
A plain object, or what is commonly known as a Plain Old JavaScript Object (POJO), is any object whose prototype is Object.prototype or an object created via Object.create(null).
Hints
New
Hint 1: Prefer the narrowest runtime check
Use the dedicated array predicate for arrays and typeof value === 'function' for callable values. Array.isArray() is more precise than constructor checks and also works across realms.

Hint 2: Define object-like values broadly
For this question, an object is any non-null value whose typeof result is either 'object' or 'function'. Reject null and undefined before applying that broad rule.

Hint 3: Follow the stated plainness rule
A plain object has an immediate prototype equal to Object.prototype or null. Checking that relationship excludes arrays, built-in instances, and custom class instances without depending on their contents.

Hint 4: Reject unreliable shortcuts
An own constructor property can shadow the inherited one, and an object created with Object.create(null) has none. Prototype inspection is therefore a more faithful implementation of the stated plain-object definition.
*/
/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isArray(value) {
  return Array.isArray(value);
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isFunction(value) {
  return typeof(value) ==="function";
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isObject(value) {
  return ((typeof value === "object" || typeof value === "function") && value!==null);
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isPlainObject(value) {
  if(value===null || typeof value!=="object"){
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return Object.prototype === proto || proto === null;
  //typeof null === 'object', hence we need value!==null also to exclude null
  //typeof is used to check whether it's an object or not
  //Object.getPrototypeOf(value)===Object.prototype checks whether its protype is normal Object.prototype
  //proto === null is used because when plain object is considered to object created with also Object.create(null) which has no prototype (means it's prototype will be null)
}
