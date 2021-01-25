const binarySearchRecursive = (arr, val, left = 0, right = arr.length - 1) => {
  console.log("left", left);
  console.log("right", right);

  const mid = Math.floor((left + right) / 2);

  if (left > right) {
    return -1;
  }
  if (arr[mid] > val) {
    return binarySearchRecursive(arr, val, left, mid - 1);
  } else if (arr[mid] < val) {
    return binarySearchRecursive(arr, val, mid + 1, right);
  } else {
    return mid;
  }
  //   tim cplx: O(logn)
};

binarySearchRecursive([1, 2, 3, 4], 4);
