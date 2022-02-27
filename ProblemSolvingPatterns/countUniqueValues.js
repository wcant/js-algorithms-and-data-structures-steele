function countUniqueValues(arr) {
    let left = 0;
    let right = 1;
    let count = 0;
    while(left <= arr.length) {
        if (arr[left] < arr[right]) {
            count++;
            left++;
            right++;
        } else if (arr[left] === arr[right]) {
            left++;
            right++;
        } else if (!arr[right]) {
            count++;
            left++
        }
    }
    return count;
}


console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));

