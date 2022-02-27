function binarySearch(arr, searchItem){
  // add whatever parameters you deem necessary - good luck!
  let [min,max] = [0,arr.length -1]
  while (min <= max){
      let mid = Math.floor((min + max) / 2) // I prefer floor
      if (arr[mid] === searchItem) return mid
      else if (arr[mid] > searchItem) [min,max] = [min,mid - 1]
      else [min,max] = [mid + 1,max]
  }
  return -1
}

console.log(binarySearch([0,1,2,3,4,5,6,7,8,9],-1))