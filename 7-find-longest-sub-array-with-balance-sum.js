// !Problem: Find the Longest Subarray with a Balanced Sum
// Description: You’re given an array of integers that can contain both positive and negative numbers. The task is to find the longest contiguous subarray whose sum is zero. If there are multiple subarrays of the same length, return the one that appears first.

// !Example:
// Input: nums = [4, -1, -3, 1, 2, -2, -1, 5, -5]
// Output: [4, -1, -3, 1, 2, -2, -1]
// Explanation: The longest subarray with a sum of zero is [4, -1, -3, 1, 2, -2, -1], with a length of 7.

let array = [1, 2, -3, 3, -1, 2, -2, 1];

const findLongestSubArray = (array) => {
  let longestSubArray = [];
  let subArray = [];

  for (let start = 0; start < array.length; start++) {
    for (let end = 0; end < array.length; end++) {
      if (start === end) continue;
      subArray = [];
      for (let i = start; i <= end; i++) {
        subArray.push(array[i]);
      }
      //   add in sub arrays if sum of sub array is 0
      if (
        subArray.length > 0 &&
        longestSubArray.length < subArray.length &&
        subArray.length < array.length
      ) {
        let sum = 0;
        for (let s = 0; s < subArray.length; s++) {
          sum += subArray[s];
        }
        if (sum == 0) longestSubArray = subArray;
      }
    }
  }
  console.log(longestSubArray);
};

findLongestSubArray(array);
