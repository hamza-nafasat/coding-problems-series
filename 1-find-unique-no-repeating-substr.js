// !Problem: Find the Longest Substring Without Repeating Characters (Without Using Built-in Methods)
// Description: You need to find the length of the longest substring in a given string that contains no repeating characters, without using any built-in methods like split(), Set(), indexOf(), or substring().

// !Example
// Input: "swiss";
// Output: "w";

let subStr = "";
let lastIndex = 0;

const isExist = (str, char) => {
  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) return true;
  }
  return false;
};

const findSubStr = (str) => {
  let sub = "";
  for (let i = lastIndex; i < str.length; i++) {
    if (isExist(sub, str[i])) break;
    sub += str[i];
  }
  if (lastIndex >= str.length) return console.log("the longest unique substr = ", subStr);

  if (str.length === sub.length) return console.log("the longest unique substr = ", sub);
  else {
    if (sub.length > subStr.length) subStr = sub;
    lastIndex += sub.length;
    findSubStr(str);
  }
};

findSubStr("abcdabc"); // Should return "abcd"
