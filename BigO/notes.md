# Big O Notation

## Time Complexity

For this slower case, the number of operations scale linearly with n, so this is O(n)

```js
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }

  var t1 = performance.now();
  addUpTo(1000000000);
  var t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
```

For this faster case, the number of operations are constant (3), so this is O(1)

```js
function addUpTo(n) {
    return n * (n + 1) / 2;
  }

  var time1 = performance.now();
  addUpTo(1000000000);
  var time2 = performance.now();
  console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)
```

For a case where you have an O(n) operation inside of another O(n) operation, such as
with a for loop with a nested for loop, then the number of operations is quadratic, so O(n^2)

```js
  function printAllPairs(n) {
      for (var i = 0; i < n; i++) {
          for (var j = 0; j < n; j++) {
              console.log(i,j);
          }
      }
  }
```

## Rules to help simplify O expressions

1. constants dont matter
    - O(2n) ===> O(n)
    - O(500) ===> O(1)
    - O(13n^2) ===> O(n^2)

2. smaller terms don't matter
    - O(n + 10) ===> O(n)
    - O(1000n + 50) ===> O(n)
    - O(n^2 + 5n + 8) ===> O(n^2)

## Big O Shorthands

1. Arithmetic operations are constant
2. variable assignment is constant
3. accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

## Space Complexity

Sometimes you hear the term auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs.

- most primitives (booleans, numbers, undefined, null) are constant space
- Strings requrie O(n) space (where n is the string length)
- reference types are generally O(n), where n is the length (for arrays) or the number of keys for an object

## Logarithms

- Certain searching algorithms have log time complexity
- efficient sorting algorithms involve log
- recursion sometimes involves log space complexity

## Objects

- unordered, key-value pairs

- work well when you dont need order

- when you need fast access / insertion / removal

### Big O of objects

- insertion - O(1)
- removal - O(1)
- searching - O(N)
- access - O(1)
- Object.keys() - O(n)
- Object.values() - O(n)
- Object.entries() - O(n)
- Object.hasOwnProperty() - O(1)

## Arrays

Ordered lists

### Big  O of arrays

- insertion - it depends
- removal - it depends
- searching - O(N)
- access - O(1)
- Insertion at the end - O(1)
- Insertion at the beginning - O(N) , because every single element index must be shifted
- Removal from the beginning - O(N), same reason
- Removal from end - O(1)

### Built in methods

- push - O(1)
- pop - O(1)
- shift - O(N)
- unshift - O(N)
- concat - O(N)
- slice - O(N)
- splice - O(N)
- sort - O(N*logN)
- forEach/map/filter/reduce/etc - O(N)

## Problem Solving Approach

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
5. How should I label the important pieces of data that are a part of the problem?

Example:

Write a function which takes two numbers and returns their sum.

1. implement addition
2. ints? floats? large numbers?
3. int? float? string?

4.
5.

Explore examples

- start with simple examples
- progress to more complex examples
- explore examples with empty inputs
- explore examples with invalid inputs

Problem: Write a function which takes in a string and returns counts of each character in the string.

charCount("aaaa"); // {a:4}
    do we want {a: 4, b:0}, clarify if you might want to have all letters set to zero initially, so that you only have to increment

charCount("hello"); // {h:1, e:1, l:2, o:1}

"my phone number is 135890"
  do we count spaces? numbers?

"Hello hi"  store lowercase and uppercase?

charCount("") empty or invalid input?

Break it down.
Explicityly write steps you need to take.
This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details ( e.g. language syntax ) as well

function charCount(str) {
  // make object to return at end
  // loop over string, for each character...
      // if the char is a number/letter key in object, add one to count
      // if the char is number/letter  not in object, add it and set value to 1
      // if char is something else (space, period, ...) don't do anything
  // return object at end
}

### Refactoring

```js
function charCount(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    if(/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
}

// Can simplify the nested if/else

      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }

// to

  obj[char] = ++obj[char] || 1;  // the ++ operator must be before the variable it's acting on in this case

// since ++obj[char] is falsy (NaN) when the key doesn't exist
```

In the logical expression `++z || 2` the **return** value of the operator is used to evaluate the comparison.  For `++`, as a prefix it returns the current value incremented by 1 and then does the assignment of changing the value of `z`.  As a suffix, it returns the current value unchanged and then does the assignment of changing the value of `z`.

So for the correct assignment to happen in this case, we need the return value of the `++` operator to be the incremented value, or else this doesn't work.

```js
 let z = 0;
  z = ++z || 2;

  // difference between
  z = z++ || 2;

  // another example
 let z = 0;
 let y = z++ || 2;

console.log(`z=${z}, y=${y}`) // "z=1, y=2"


```

## Problem Solving Patterns

### Frequency Counter

This pattern uses object or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(n^2) operations with arrays/strings
