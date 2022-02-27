function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  
  if (arr.length === 0) return newArr;

  if (Array.isArray(arr[0]))
    newArr = flatten(arr[0])
  else
    newArr.push(arr[0])
  
  return newArr.concat(flatten(arr.splice(1)))
}


// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3