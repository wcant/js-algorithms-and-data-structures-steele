function iterativeFactorial(n) {
    let result = 1;
    for (let i = n; i>0; i--) {
        result *= i;
        console.log(result);
    }
    return result;
}

//iterativeFactorial(5);



function recursiveFactorial(n) {
    if (n === 1) return 1;
    return n * recursiveFactorial(--n);
}

console.log(recursiveFactorial(5));
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(2)); // 2
console.log(recursiveFactorial(4)); // 24
console.log(recursiveFactorial(7)); // 5040