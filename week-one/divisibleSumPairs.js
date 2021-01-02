// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
  // init count to 0
  // loop over nested

  // second loop starts from i + 1
  // if (ar[i] + ar[j] % k === 0) increament count by 1
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i < j && (ar[i] + ar[j]) % k === 0) {
        count++;
      }
    }
  }
  return count;
}
