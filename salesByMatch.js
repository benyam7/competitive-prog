// Complete the sockMerchant function below.
const sockMerchant = (n, ar) => {
  // create empty map
  // init var pairs with initial value 0
  // iterate over the array
  // if (key in map exists, increament value by one)
  // if (key in map doesn't exist, set value to one)
  // get values from map
  // iterate over values of map and divide by 2 and floor value and add to pairs
  // return pairs
  let map = {};
  let pairs = 0;
  for (let color of ar) {
    if (map[color]) {
      map[color]++;
    } else {
      map[color] = 1;
    }
  }

  for (let occurences of Object.values(map)) {
    pairs += Math.floor(occurences / 2);
  }

  return pairs;
};
