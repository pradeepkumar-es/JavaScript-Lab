/*
Run Length Encoding
Implement run-length encoding and decoding.

Run-length encoding (RLE) is a simple form of data compression, where runs
(consecutive data elements) are replaced by just one data value and count.

For example we can represent the original 53 characters with only 13.

"WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB"
RLE allows the original data to be perfectly reconstructed from
the compressed data, which makes it a lossless data compression.

"AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE"
For simplicity, you can assume that the unencoded string will only contain
the letters A through Z (either lower or upper case) and whitespace. This way
data to be encoded will never contain any numbers and numbers inside data to
be decoded always represent the count for the following character.
*/
//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str1) => {
  let str = str1.split("").join("");
  if(str == "") return "";
  let encoded = "";
  let count = 0;
  let start = str[0];
  for(let ch of str){
    if(ch == start){
      count += 1;
    }else{
      if(count == 1){
        encoded += `${start}`
      }else{
        encoded += `${count}${start}`;
      }
      start = ch;
      count = 1;
    }
  }
  //for rest last repeating character
  encoded += `${count}${start}`

  // throw new Error('Remove this statement and implement this function');
  return encoded;
};
// console.log(encode("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"));


export const decode = (str2) => {
  let str = str2.split("").join("");
  if(str == "") return "";
  let decoded = "";
  let count = 0;
  for(let ch of str){
    if(isNaN(ch)){
      if(count > 0) {
        decoded += ch.repeat(count);
        count = 0;
      }else{
        decoded += ch;
      }
    }else{
      count = Number(ch);
    }
  }
  return decoded;
};
// console.log(decode("2AB3CD4E"));
