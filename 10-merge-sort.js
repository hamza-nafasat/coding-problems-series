let arr = [4, 1, 3, 2];

const mergeLeftAndRight = (left, right) => {
  let mergedArr = [];

  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergedArr.push(left[i]);
      i++;
    } else {
      mergedArr.push(right[j]);
      j++;
    }
  }

  while (left.length > i) {
    mergedArr.push(left[i]);
    i++;
  }
  while (right.length > j) {
    mergedArr.push(right[j]);
    j++;
  }
  return mergedArr;
};

let mergeSort = (arr) => {
  let sortedArr = arr.map((arr) => [arr]);
  // conquer the sub arrays and modified sorted arr
  while (sortedArr.length > 1) {
    let temp = [];
    for (let i = 0; i < sortedArr.length; i += 2) {
      if (i + 1 < sortedArr.length) {
        let left = sortedArr[i];
        let right = sortedArr[i + 1];
        temp.push(mergeLeftAndRight(left, right));
      } else break;
    }
    sortedArr = temp;
  }
  return sortedArr[0];
};

const result = mergeSort(arr);
console.log(result);
