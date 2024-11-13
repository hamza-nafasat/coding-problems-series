// !Problem: Find the Longest Palindromic Substring (Without Using Built-in Methods)
// Description: You need to find the longest palindromic substring in a given string. A palindrome is a string that reads the same forwards and backwards. You cannot use built-in methods like reverse(), substring(), slice(), or split().

// !Example
// Input: "babad"
// Output: "bab" or "aba" (both are valid)
// Input: "cbbd"
// Output: "bb"

// ---------------------------------------------------------------------

let str = "bbbaaaa";

let isPalindRomicStr = (str) => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  if (reverseStr == str) return true;
  else return false;
};

let findAllSubStrings = (string) => {
  let allSubStr = [];
  //  find all start and end combinations
  for (let start = 0; start < string.length; start++) {
    for (let end = start; end < string.length; end++) {
      // find all substring
      let subString = "";
      for (let i = start; i <= end; i++) {
        subString += string[i];
      }
      allSubStr.push(subString);
    }
  }

  return allSubStr;
};

let findLongestPalindRomicSubStr = (str) => {
  let longestPalindromicSubstr = "";

  let allSubStr = findAllSubStrings(str);
  console.log("all sub str=", allSubStr);

  for (let i = 0; i < allSubStr.length; i++) {
    let currentSubstr = allSubStr[i];
    if (isPalindRomicStr(currentSubstr) && currentSubstr.length > longestPalindromicSubstr.length) {
      longestPalindromicSubstr = currentSubstr;
    }
  }
  console.log(`longest sub str of (${str}== ${longestPalindromicSubstr})`);
};

findLongestPalindRomicSubStr(str);
