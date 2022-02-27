function maxSubarraySum(arr,n) {

    if (n > arr.length) return null;
    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i<n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (let j = n; j<arr.length; j++) {
        tempSum = tempSum + arr[j] - arr[j-n];
        console.log(tempSum)
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}


console.log(maxSubarraySum([1,2,5,2,8,1,5], 2));
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));
console.log(maxSubarraySum([4,2,1,6], 1));
console.log(maxSubarraySum([4,2,1,6,2], 4));
console.log(maxSubarraySum([], 4));

