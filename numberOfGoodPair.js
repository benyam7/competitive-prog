const numIdenticalPairs = function (nums) {
  const freq = {};
  for (let num of nums) {
    if (freq[num]) {
      ++freq[num];
    } else {
      freq[num] = 1;
    }
  }

  let count = 0;
  let values = Object.values(freq);

  for (let val of Object.values(freq)) {
    count += sumRange(val - 1);
  }

  function sumRange(num) {
    // if(num === 0) return 0
    // if (num === 1) return 1
    // return num + sumRange(num - 1)
    return (num * (num + 1)) / 2;
  }

  return count;
};
