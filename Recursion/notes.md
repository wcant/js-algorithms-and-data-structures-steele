
# Objectives

- understand two essential components of a recursive function
- visualize the call stack to better debug and understand recrusive functions
- use helper method recursion and pure recursion to solve more difficult problems

# Why use recursion?

A process (a function in this case) that calls itself.

- JSON.parse / JSON.stringify are implemented using recursion (often)
- document.getElementById and DOM traversal algorithms
- object traversal
- we will see it with more complex data structures
- sometimes a cleaner alternative to iteration

# The Call Stack

- it's a stack data structure (things are added to the top and removed from the top)
- any time a function is invoked it is placed (pushed) on the **top** of the call stack
- when JS sees the return keyword or when the function ends, the compiler will remove (pop)

Typically we think of functions as being pushed on the call stack and popped off when they are done.  When we write recursive functions we keep pushing new functions onto the call stack.

# How do recursive functions work

- invoke the **same** function with a different input until you reach your base case.

Two essential parts of a recursive function

- base case
- different input

# Common Recursion Pitfalls

- no/wrong base case
- forgetting to return / returning the wrong thing


# Pure Recursion Tips

- for arrays, use methods like slice, spread operator, and concat that make copies of arrays so you do not mutate them
- strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
- to make copies of objects use Object.assign, or the spread operator