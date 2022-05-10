console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55

function recursiveRange(n){
   if (n === 0) return 0;
   return n + recursiveRange(--n);
}

