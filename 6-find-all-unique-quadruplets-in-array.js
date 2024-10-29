// !Problem: Find All Unique Quadruplets That Sum to a Target Value
// Description: Given an array of integers nums and an integer target, return all unique quadruplets (𝑎,𝑏,𝑐,𝑑)
// (a,b,c,d) such that 𝑎+𝑏+𝑐+𝑑 = target a+b+c+d=target.

// !Example
// Input: nums = [1, 0, -1, 0, -2, 2], target = 0
// Output: [[-2, -1, 0, 1], [-2, 0, 0, 2], [-1, 0, 0, 1]]

// let arr = [2, 2, 2, 2, 2];
// let target = 8;
let arr = [-3, -2, -1, 0, 0, 1, 2, 3];
let target = 0;

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

const findAllUniqueQuadruplets = (array, target) => {
  if (array.length < 3) return console.log("array is smaller");
  if (!target && target != 0) return console.log("target is not define");
  let quadruplets = [];

  // find all combinations
  // ---------------------
  for (let first = 0; first < array.length; first++) {
    // second loop
    let firstElem = array[first];
    for (let second = 0; second < array.length; second++) {
      if (second == first) continue;
      // third array
      let secondElem = array[second];
      for (let third = 0; third < array.length; third++) {
        if (third == second || third == first) continue;
        let thirdElem = array[third];
        // fourth loop
        for (let fourth = 0; fourth < array.length; fourth++) {
          if (fourth == third || fourth == second || fourth == first) continue;
          let fourthElem = array[fourth];
          if (firstElem + secondElem + thirdElem + fourthElem === target) {
            let arr = [firstElem, secondElem, thirdElem, fourthElem];
            quadruplets.push(sortArr(arr));
          }
        }
      }
    }
  }

  // make the same combinations null
  // -------------------------------

  for (let i = 0; i < quadruplets.length; i++) {
    let prevItem = quadruplets[i];

    for (let j = 0; j < quadruplets.length; j++) {
      if (i == j) continue;
      let currentItem = quadruplets[j];
      if (!currentItem || !prevItem) continue;
      let a = currentItem[0] == prevItem[0];
      let b = currentItem[1] == prevItem[1];
      let c = currentItem[2] == prevItem[2];
      let d = currentItem[3] == prevItem[3];
      if (a && b && c && d) quadruplets[j] = null;
    }
  }

  // add unique values in final result
  // ---------------------------------
  let uniqueQuadruplets = [];
  for (let i = 0; i < quadruplets.length; i++) {
    if (quadruplets[i]?.length) uniqueQuadruplets.push(quadruplets[i]);
  }

  console.log(uniqueQuadruplets);
};

findAllUniqueQuadruplets(arr, target);
