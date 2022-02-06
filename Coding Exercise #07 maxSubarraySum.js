function maxSubarraySum(arr, num){
  // add whatever parameters you deem necessary - good luck!
  
  let tmpSum = 0;
  let maxSum = 0;
  
  if (arr.length === 0 || num === 0) return false;
  
  for(let i = 0; i < num; i++){
      maxSum += arr[i]
  }
  tmpSum = maxSum;
  for(let i = num; i < arr.length; i++){
      tmpSum = tmpSum - arr[i - num] + arr[i]
      maxSum = Math.max(tmpSum,maxSum)
  }
  
  return maxSum
}