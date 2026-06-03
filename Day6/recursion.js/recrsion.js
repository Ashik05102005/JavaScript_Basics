let a=1;
function sum(n) {
  if (n === 0) {
    return 0; // base case
  }
  console.log(`function call ${a}`);
  a++;
  return n + sum(n - 1); // recursive call
}

console.log(sum(3));