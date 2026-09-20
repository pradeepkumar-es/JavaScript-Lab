/*
Given a list of strings, implement a function listFormat that returns the items concatenated into a single string. A common use case is summarizing reactions on social media posts.

The function should support a few options as the second parameter:

sorted: Sorts the items alphabetically.
length: Shows only the first length items, using "and X other(s)" for the remaining. Ignore invalid values (negative, 0, etc.).
unique: Removes duplicate items.
Examples

listFormat([]); // ''

listFormat(['Bob']); // 'Bob'
listFormat(['Bob', 'Alice']); // 'Bob and Alice'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']);
// 'Bob, Ben, Tim, Jane and John'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 4,
}); // 'Bob, Ben, Tim, Jane and 1 other'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
  sorted: true,
}); // 'Ben, Bob, Jane and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
  length: 3,
  unique: true,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
  unique: true,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', '', '', 'John']); // 'Bob, Ben and John'
Hints
New
Hint 1: Which list does `length` apply to?
Which order of unique, sorted, and length makes the visible values and the “other(s)” count describe the same cleaned list?

Hint 2: What belongs after the final “and”?
Compare two items, five fully shown items, and three shown from five. Separate the comma-joined prefix from the last segment, then decide when that segment is an item and when it is a hidden count.
*/

/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
export default function listFormat(items, options) {
  const validItems = items.filter((item) => item !== "");
  const itemLength = validItems.length;
  if (itemLength < 1) {
    //empty case
    return "";
  }
  if (itemLength == 1 && validItems[0]) {
    //single value
    return validItems[0];
  }
  let res = [...validItems];
  if (options?.sorted) {
    res = res.sort();
  }
  if (options?.unique) {
    const uniqueItems = new Set();
    res.forEach((item) => uniqueItems.add(item));
    res = Array.from(uniqueItems);
    if (res.length === 1) {
      //unique collapsed into one
      return res[0];
    }
  }

  if (options?.length > 0 && options?.length <= res.length) {
    res.splice(
      options.length,
      res.length - options.length,
      `and ${res.length - options.length} other${res.length - options.length < 2 ? "" : "s"}`,
    );
  } else {
    res.splice(res.length - 1, 0, "and");
  }

  let finalAnswer = [];
  for (let i = 0; i <= res.length - 1; i++) {
    if (options?.length > 0 && options?.length <= res.length) {
      if (i <= options.length - 2) { //subtrcting 2 (one for 1 lees comma than option length and other for due to 0 based indexing)
        finalAnswer.push(res[i] + ",");
      } else {
        finalAnswer.push(res[i]);
      }
    } else {
      if (i <= res.length - 4) { //here 'and' is also part of finalAnswer array, so we are putting comma before 1 element of 'and //(-1 for 0 based index, -1 for and; -1 &-1 for element before and after and )
        finalAnswer.push(res[i] + ",");
      } else {
        finalAnswer.push(res[i]);
      }
    }
  }
  return res.length === 2 ? res.join(" ") : finalAnswer.join(" ");
}
