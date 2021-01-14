// Complete the factorial function below.
function factorial(n) {
  if (n < 0) {
    return "complex number";
  }
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
  //
}
