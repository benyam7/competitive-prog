const sumation = (a, b) => {
  // given two numbers, do sumation treating them as stirngs
  //   2
  // + 2
  //4

  // 10
  //+4
  //14

  // 65
  // + 7
  //  72

  //     644
  //      71

  // change numbers to string
  // [1,4,3] & [2]
  // create carry variable and initi to 0
  // declare sum variable and set it to []
  // add the first last digits a[-1] and b[-1] and carry
  // we need to change individual str to number again to do the addition
  // if there sum is less than ten, unshift the result to array
  // if there sum is greater than nine
  // unshift first element of result to array and set carry to first elemenet of result
  // repeat (iteration will be determined by number with lowest digits and existen)
  // return join of sum array

  const aStr = a + "";
  const bStr = b + "";

  let carry = 0;
  let sum = [];

  const loopLen = aStr.length > bStr.length ? aStr.length : bStr.length;
  // if isA true then aStr has smaller length
  const isA = aStr.length < bStr.length;
  for (let i = loopLen - 1; i > -1; i--) {
    //         console.log(bStr[i])

    if (isA) {
      // a:    21
      // b: 1221
      let a = Number.parseInt(aStr[i - (bStr.length - aStr.length)]);
      // add diffrence of the two lengths and add to i to find the offset
      //             let b = Number.parseInt(bStr[i + (bStr.length - aStr.length)])
      let b = Number.parseInt(bStr[i]);

      if (!a) {
        // aStr has smaller len and now it's become undefined

        let tot = b;
        //              console.log("a , b" , a, b)
        // check if there's previous carry
        if (carry > 0) {
          tot += carry;
          carry = 0;
        }
        // check if a + b is greater than 9
        if (tot > 9) {
          carry = Math.floor(tot / 10);
          sum.unshift(tot % 10);
        } else {
          sum.unshift(tot);
        }
        // go to next
        continue;
      }

      let tot = a + b;
      console.log("a , b", a, b);
      // check if there's previous carry
      if (carry > 0) {
        tot += carry;
        carry = 0;
      }
      // check if a + b is greater than 9
      if (tot > 9) {
        carry = Math.floor(tot / 10);
        sum.unshift(tot % 10);
      } else {
        sum.unshift(tot);
      }
    } else {
      if (aStr.length === bStr.length) {
        let a = Number.parseInt(aStr[i]);
        let b = Number.parseInt(bStr[i]);
        let tot = a + b;

        if (carry > 0) {
          tot += carry;
          carry = 0;
        }
        // check if a + b is greater than 9
        if (tot > 9) {
          carry = Math.floor(tot / 10);
          sum.unshift(tot % 10);
        } else {
          sum.unshift(tot);
        }
      } else {
        // bStr has lowwer lenght

        // a:    21
        // b: 1221
        let a = Number.parseInt(aStr[i]);
        // add diffrence of the two lengths and add to i to find the offset
        //             let b = Number.parseInt(bStr[i + (bStr.length - aStr.length)])
        let b = Number.parseInt(bStr[i - (aStr.length - bStr.length)]);

        if (!b) {
          // aStr has smaller len and now it's become undefined

          let tot = a;
          //              console.log("a , b" , a, b)
          // check if there's previous carry
          if (carry > 0) {
            tot += carry;
            carry = 0;
          }
          // check if a + b is greater than 9
          if (tot > 9) {
            carry = Math.floor(tot / 10);
            sum.unshift(tot % 10);
          } else {
            sum.unshift(tot);
          }
          // go to next
          continue;
        }

        let tot = a + b;
        console.log("a , b", a, b);
        // check if there's previous carry
        if (carry > 0) {
          tot += carry;
          carry = 0;
        }
        // check if a + b is greater than 9
        if (tot > 9) {
          carry = Math.floor(tot / 10);
          sum.unshift(tot % 10);
        } else {
          sum.unshift(tot);
        }
      }
    }
  }
  if (carry > 0) {
    sum.unshift(carry);
  }
  console.log(sum);
  return sum.join("");
};

sumation("999993723187861023129", "999992399999992323999");
