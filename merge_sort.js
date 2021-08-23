var mergeSort = function(nums) {
  if (nums.length <= 1) return nums;
  const mid =  Math.floor(nums.length/2);
  var left = mergeSort(nums.slice(0,mid));
  var right = mergeSort(nums.slice(mid));
  return merge(left, right);
}

var merge = function(arr1, arr2) {
  const lOne = arr1.length;
  const lTwo = arr2.length;
  let i = 0;
  let j = 0;
  const merged = [];
  while (i < lOne && j < lTwo) {
    if (arr1[i] > arr2[j]) {
      merged.push(arr2[j++]);
    } else {
      merged.push(arr1[i++]);
    }
  }
  while (i < lOne) {
    merged.push(arr1[i++]);
  }

  while (j < lTwo) {
    merged.push(arr2[j++]);
  }

  return merged;
}