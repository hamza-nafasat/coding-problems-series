// Problem: Find the First Non-Repeating Character in a String (Without Using Built-in Methods)
// Description: You need to find the first non-repeating character in a string. This means you should return the first character in the string that does not appear more than once. You cannot use any built-in methods like indexOf(), charAt(), includes(), etc.

let str = "aabbcdd";
const howMuchExist = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) count += 1;
  }

  return count;
};

function findFirstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (howMuchExist(str, str[i]) == 1) return console.log("FIRST NON REPEATING CHAR OF STR", str[i]);
  }
  console.log("NOT ANY NON REPEATING CHAR FOUND");
}

findFirstNonRepeatingChar(str);
