// !Problem

// Given an array arr[] of n integers and a target value, the task is to find whether there is a pair of elements in the array whose sum is equal to target. but the solution is with leaner big O(n) time complexity.

// Examples:

// Input: arr[] = {0, -1, 2, -3, 1}, target = -2
// Output: True
// Explanation: There is a pair (1, -3) with the sum equal to given target, 1 + (-3) = -2

// Input: arr[] = {1, -2, 1, 0, 5}, target = 0
// Output: False
// There is no pair with sum equals to given target.

// !Solution

const arr = [1, 4, 55, 7, 3, 2];
const num = 5;
let obj = {};
let result = "No in this array not any pair exit for this number";

for (let i = 0; i < arr.length; i++) {
  let item = arr[i];
  let expectedItem = num - item;
  obj[`${expectedItem}`] = item;
  if (obj[`${item}`] || obj[`${item}`] == 0) {
    result = `yes these number exit in array for our solution , [${obj[`${item}`]}, ${item}]`;
    break;
  }
}

console.log(result);
