// !Problem: Find the Longest Consecutive Sequence in an Array (Without Using Built-in Methods)
// Description: You are given an unsorted array of integers. You need to find the length of the longest consecutive elements sequence. Consecutive means that numbers appear in sequence without gaps, but they can appear in any order in the input. You are not allowed to use any built-in methods like sort().

// ! Example
// Input: [100, 4, 200, 1, 3, 2]
// Output: 4

// Explanation: The longest consecutive sequence is [1, 2, 3, 4], so the length is 4.

let arr = [444, 333, 23, 555, 24, 25, 26, 555, 555];

// solution with sorting
// ----------------------
const sortArr = (arr) => {
  let newArr = [...arr];
  //   outer loop of new arr
  for (let i = 0; i < newArr.length; i++) {
    // inner loop of arr
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[i] < newArr[j]) {
        let temp = newArr[j];
        newArr[j] = newArr[i];
        newArr[i] = temp;
      }
    }
  }
  return newArr;
};
const findLongestConsecutiveSequenceOfArr = (arr) => {
  let consecutiveSequenceNum = 1;

  let sortedArr = sortArr(arr);
  console.log(sortedArr);

  for (let i = 0; i < sortedArr.length; i++) {
    let prevValue = sortedArr[i - 1];
    let currentValue = sortedArr[i];
    if (i == 0) continue;
    if (prevValue + 1 !== currentValue) break;
    consecutiveSequenceNum += 1;
  }

  console.log("consecutive sequence ====", consecutiveSequenceNum);
};
// findLongestConsecutiveSequenceOfArr(arr);

// solution without sorting
// ----------------------

const findLongestConsecutiveSequenceOfArrWithOutSorting = (arr) => {
  let smallestNumInArr = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (smallestNumInArr > arr[i]) smallestNumInArr = arr[i];
  }

  let consecutiveSequence = [smallestNumInArr];

  for (let j = 0; j < arr.length; j++) {
    let lastConsecutive = consecutiveSequence[consecutiveSequence.length - 1];
    let currentValue = arr[j];
    if (currentValue == lastConsecutive + 1) consecutiveSequence.push(currentValue);
  }
  console.log("consecutive sequence num ===", consecutiveSequence.length);
};

findLongestConsecutiveSequenceOfArrWithOutSorting(arr);
