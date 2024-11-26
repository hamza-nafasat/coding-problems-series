// ! PROBLEM

// Rearrange an array such that arr[i] = i
// Last Updated : 26 Nov, 2024
// Given an array of elements of length n, ranging from 0 to n – 1. All elements may not be present in the array. If the element is not present then there will be -1 present in the array. Rearrange the array such that arr[i] = i and if i is not present, display -1 at that place.

// Examples:

// Input: arr[] = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]
// Output: [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9]
// Explanation: In range 0 to 9, all except 0, 5, 7 and 8 are present. Hence, we print -1 instead of them.

// Input: arr[] = [0, 1, 2, 3, 4, 5]
// Output: [0, 1, 2, 3, 4, 5]
// Explanation: In range 0 to 5, all number are present.

// ! SOLUTION

const array = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];

const rearrangeArrayAccordingIndexes = (array) => {
  const newArr = [];
  let hashMap = new Set();

  for (let i = 0; i < array.length; i++) {
    hashMap.add(array[i]);
  }

  for (let i = 0; i < array.length; i++) {
    if (hashMap.has(i)) {
      newArr.push(i);
    } else {
      newArr.push(-1);
    }
  }
  return newArr;
};

let result = rearrangeArrayAccordingIndexes(array);
console.log(result);
