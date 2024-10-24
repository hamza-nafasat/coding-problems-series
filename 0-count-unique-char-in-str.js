// !Problem: Count Unique Characters in a String (Without Using Built-in Methods)
// You need to count the number of unique characters in a string without using any built-in methods like Array.from(), Set(), or similar utilities. Additionally, you should not convert the string into an array.

let str = "abbcccd";
let uniqueStr = "";

function isExist(char, str) {
  let exist = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) exist = true;
  }
  return exist;
}

for (let i = 0; i < str.length; i++) {
  let currentItem = str[i];
  if (!isExist(currentItem, uniqueStr)) {
    uniqueStr += currentItem;
  }
}

console.log(uniqueStr.length);
