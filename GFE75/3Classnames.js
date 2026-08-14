/*
classnames is a commonly used utility in modern frontend applications to conditionally join CSS class names together. If you've written React applications, you likely have used a similar library.

Implement the classnames function.

Examples

classNames('foo', 'bar'); // 'foo bar'
classNames('foo', { bar: true }); // 'foo bar'
classNames({ 'foo-bar': true }); // 'foo-bar'
classNames({ 'foo-bar': false }); // ''
classNames({ foo: true }, { bar: true }); // 'foo bar'
classNames({ foo: true, bar: true }); // 'foo bar'
classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
Arrays will be recursively flattened as per the rules above.


classNames('a', ['b', { c: true, d: false }]); // 'a b c'
Values can be mixed.


classNames(
  'foo',
  {
    bar: true,
    duck: false,
  },
  'baz',
  { quux: true },
); // 'foo bar baz quux'
Falsy values are ignored.


classNames(null, false, 'bar', undefined, { baz: null }, ''); // 'bar'
In addition, the returned string should not have any leading or trailing whitespace.

Resources
classnames library on GitHub
clsx library on GitHub: A newer version that serves as a faster and smaller drop-in replacement for classnames.
Hints
New
Hint 1: Normalize supported input kinds
Falsy inputs contribute nothing. Strings and numbers contribute themselves, while objects contribute only their own keys whose values are truthy.

Hint 2: Recurse through arrays
Arrays can contain any supported input, including more arrays, so process their items with the same normalization rules. Check for arrays before the general object case.

Hint 3: Preserve encounter order
Collect class segments from left to right and join the non-empty results with single spaces. Recursive results should occupy the position where their array appeared, without adding leading or trailing whitespace.

*/

/**
 * @param {...(any|Object|Array<any|Object|Array>)} argument
 * @return {string}
 */
export default function classNames(...args) {
  let argument = args;
  let resArr = [];

  if (argument.length < 1) {
    //if we reached to empty values
    return resArr;
  }

  //recursive faltening of arrays
  function flatArr(collection, resArr) {
    //base case
    if (Object.keys(collection).length < 1) {
      // valid for both array and object
      return;
    }
    if (Array.isArray(collection)) {
      //for array
      for (let element of collection) {
        if (typeof element === "object") {
          flatArr(element, resArr);
        } else {
          if (element) {
            resArr.push(element);
          }
        }
      }
    } else {
      //for object
      for (let key in collection) {
        if (collection[key]) {
          resArr.push(key);
        }
      }
    }
  }

//iteratively find truthy values
  for (let i = 0; i < argument.length; i++) {
    if (!argument[i]) {
      //if element is falsy
      continue;
    }

    if (Array.isArray(argument[i])) {
      //here typeof is not used because it will give object

      //recursion for flattening array
      flatArr(argument[i], resArr);
      continue;
    }

    if (typeof argument[i] === "object") {
      //for object
      for (let key in argument[i]) {
        if (argument[i][key]) {
          //if truthy value
          resArr.push(key);
        }
      }
      continue;
    }

    //for truthy value apart from array and oject which is already handled
    if (argument[i]) {
      resArr.push(argument[i]);
    }
  }
  return resArr.join(" ");
}
