console.log(fib(4)) // 3
console.log(fib(6))
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465

function fib(n){
    if (n === 2 || n === 1) return 1;
    return fib(n-1) + fib(n-2);
  }


// fib(6)
//         fib(5) + fib(4)
//             fib(4) + fib(3) + fib(3) + fib(2)
//                 fib(3) + fib(2) + fib(2) + fib(1) + fib(2) + fib(1) + fib(1)
//                     fib(2) + fib(1) + fib(2) + fib(2) + fib(1) + fib(2) + fib(1) + fib(1)
//                         1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 8