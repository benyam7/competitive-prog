const numIdenticalPairs = function (nums) {
  // create count variable to count
  // iterate using nested forloop
  // i start from 0
  // j starts from i + 1 i.e j > i
  // check if ith and jth eslement are equal
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
};
