var reverse = function (x) {
  // create reverse var to store reversed integer
  //  if x is signed, append '-' reverse, else continue
  // loop over from back and append to revese var
  // parse str to integer
  // return parseInt of reversed

  let reversed = "";
  if (x < 0) {
    reversed += "-";
  }

  x += "";

  for (let i = x.length - 1; i > -1; i--) {
    reversed += x[i];
    console.log(reversed);
  }
  if (
    Number.parseInt(reversed) < -(2 ** 31) ||
    Number.parseInt(reversed) > 2 ** 31 - 1
  ) {
    return 0;
  }
  return Number.parseInt(reversed);
  //   TIME CPX : O(N)
  // SPACE CPX: O(N)
};

const reverseRefactor = (x) => {
  // create a sign variable with value 1
  // if x is lessthan zero set sign to -1
  // create reverse variable with 0
  // while x is greater than zero
  // if x is zero add x mod 10 to reverse and set x to x divided by 10 (floored)
  // else add (x mod 10) to reverse * 10
  // if reverse is big number return 0
  // if return according to sign

  const sign = 1;
  if (x < 0) {
    sign *= -1;
  }

  let reverse = 0;
  while (x > 0) {
    if (x === 0) {
      reverse += x % 10;
    } else {
      reverse = reverse * 10 + (x % 10);
    }
    x = Math.floor(x / 10);
  }
  if (reverse > 2 ** 31 - 1 || reverse < -(2 ** 31)) {
    return 0;
  }
  return reverse * sign;

  //   TIME cpx: O(n)
  // SPACE cpx: 0(1)
};
