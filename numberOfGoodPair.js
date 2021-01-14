const numIdenticalPairsRefactor = function (nums) {
  // create freq object to store each element's frequency
  // loop over nums
  //      if nums in freq increment by one
  //      if nums not in freq create one and set it to 1
  // create count and set it to 0
  //  for each frequnce in freq object values,do its sumRange(val -1)
  // increatmet count by sumrange

  // return 0
  const freq = {};
  for (let num of nums) {
    if (freq[num]) {
      ++freq[num];
    } else {
      freq[num] = 1;
    }
  }

  let count = 0;

  for (let val of Object.values(freq)) {
    count += sumRange(val - 1);
  }

  function sumRange(num) {
    // if(num === 0) return 0
    // if (num === 1) return 1
    // return num + sumRange(num - 1)
    return (num * (num + 1)) / 2;
  }
  // time cmpx : 0(n)
  // space : 0(n)
  return count;
};
