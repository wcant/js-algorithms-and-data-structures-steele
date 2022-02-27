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
    return n * recursiveFactorial(n-1);

}

recursiveFactorial(5);