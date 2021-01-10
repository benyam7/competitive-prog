var twoSum = function (nums, target) {
  // alg =>
  // loop over array in nested manner
  // return [i, j] ith + jth element sum equals target
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  //   time cpx: O(n^2)
  //  space cpx: O(1)
};

const twoSumRefactor = (nums, target) => {
  const lookup = {};
  for (let i in nums) {
    lookup[i] = nums[i];
  }

  const sorted = nums.sort((a, b) => a - b);
  let left = 0;
  let right = sorted.length - 1;

  while (left < right) {
    if (sorted[left] + sorted[right] > target) {
      right--;
    } else if (sorted[left] + sorted[right] < target) {
      left++;
    } else {
      return getIndicies(sorted[left], sorted[right]);
    }
  }

  function getIndicies(num1, num2) {
    const indices = [];
    if (indices.length < 2) {
      for (let i in lookup) {
        if (lookup[i] === num1) {
          indices.push(Number.parseInt(i));
          continue;
        }

        if (lookup[i] === num2) {
          indices.push(Number.parseInt(i));
          continue;
        }
      }
    }
    return indices;
  }

  // time cpx: O(nLogn)
  // space cpx: 0(n)
};
