// !Problem: Find All Triplets in an Array That Sum to Zero (Without Using Built-in Methods)
// Description:
// Given an array of integers, find all unique triplets (three numbers) in the array that sum up to zero. You cannot use any built-in methods like Set(), filter(), map(), or sorting functions. Also, avoid nested helper functions.

// ! Example
// let arr = [-1, 0, 1, 2, -1, -4];
// [[-1, 0, 1], [-1, -1, 2]]

let arr = [-1, 0, 1, 2, -1, -4];
1, 3, 1;
let makeSortedArrForThreeNum = (first, second, third) => {
  let min = Math.min(first, second, third);
  let max = Math.max(first, second, third);
  let middle = first + second + third - min - max;
  return [min, middle, max];
};

const findAllPossibleTriplets = (array) => {
  let triplets = [];

  // get all possible array of triplets
  //   --------------------------------
  for (let first = 0; first < array.length; first++) {
    let firstElem = array[first];

    // second loop
    for (let second = 0; second < array.length; second++) {
      if (second == first) continue;
      let secondElem = array[second];
      // third loop
      for (let third = 0; third < array.length; third++) {
        if (third == first || third == second) continue;
        let thirdElem = array[third];
        // get all possible array of triplets
        if (firstElem + secondElem + thirdElem == 0) {
          triplets[triplets.length] = makeSortedArrForThreeNum(firstElem, secondElem, thirdElem);
        }
      }
    }
  }

  //   make duplicate triplets NAN
  //   ---------------------------
  let uniqueTriplets = [];

  for (let i = 0; i < triplets.length; i++) {
    let tripletsArr1 = triplets[i];
    for (let j = 0; j < triplets.length; j++) {
      if (i === j) continue;
      let tripletsArr2 = triplets[j];
      if (!tripletsArr2 || !tripletsArr1) continue;
      let a = tripletsArr1[0] === tripletsArr2[0];
      let b = tripletsArr1[1] === tripletsArr2[1];
      let c = tripletsArr1[2] === tripletsArr2[2];
      if (a && b && c) triplets[j] = null;
    }
  }

  // only get arr
  // ------------

  for (let i = 0; i < triplets.length; i++) {
    let item = triplets[i];
    if (!item?.length) continue;
    uniqueTriplets[uniqueTriplets.length] = triplets[i];
  }

  console.log("Possible triplets are ==", uniqueTriplets);
};

findAllPossibleTriplets(arr);
