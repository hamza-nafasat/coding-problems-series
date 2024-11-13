let mergeSort = function (arr) {
  // Base case: If the array has one or no elements, it's already sorted
  if (arr.length <= 1) return arr;

  // Step 1: Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Step 2: Recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right));
};

let result = mergeSort([10, 5, 3, 4, 2, 0, 7.5, 18, 90, 1]);
console.log(result);

// Merge function that combines two sorted arrays
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Step 3: Compare elements and merge them in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Step 4: Concatenate remaining elements (one of the halves will be empty)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
