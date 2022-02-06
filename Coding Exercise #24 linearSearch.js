function linearSearch(arr, searchItem, index = 0){
  // add whatever parameters you deem necessary - good luck!
  let result = -1;
  if (arr.length === 0) return result
  if (arr[0] === searchItem) return index
  return linearSearch(arr.slice(1), searchItem, ++index)
}

console.log(linearSearch([1,2,3,4],2))
