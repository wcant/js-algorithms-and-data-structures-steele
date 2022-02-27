function same(a, b) {

    // Trivial case: if the lengths of arrays aren't equal then it can't be true
    if (a.length !== b.length) return false;


  const freqB = {};
  for (let val of b) {
    freqB[val] = ++freqB[val] || 1;
  }

  // calculate the square of each value in a and see if it exists in b
  // frequency matters, so pure existence isn't sufficient

  // loop over a and square each value
  for (let val of a) {
    const squaredVal = val * val;

    // first check for existence
    if (!freqB[squaredVal]) return false;

    // now increment the count of freqB[squaredVal] and check that it doesn't go below zero
    // which means there isn't a
    if (--freqB[squaredVal] < 0) return false;
  }
  // if the exit conditions never evaluated to false, return true (Not sure I like this approach)
  return true;
}

console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,1], [4,4,1]));
console.log(same([1,2,3,2], [9,1,4,4]))
