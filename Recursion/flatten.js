function flatten(arr){
    let flatArr = [];
    console.log(arr.length);
    if (arr.length === 0) {
        return flatArr;
    }

    const item = arr.slice(0,1);
    console.log(item);
    // if (arr.length === 1) {
        //     flatArr.push(item);
        //     return;
        // }

    if (item.length === 1) {
        flatArr.push(item[0]);
        console.log(flatArr);
        flatArr = flatArr.concat(flatten(arr.slice(1)));
    } else {
        flatArr = flatArr.concat(flatten(item));
        console.log(flatArr);
    }
    console.log(flatArr);
    return flatArr;
}

  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]


 // console.log(flatten([1, 2, 3, [4, 5] ]));
  console.log(flatten([1, [2, [3, 4], [[5]]]]));
  //console.log(flatten([[1],[2],[3]]));
  //console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));



