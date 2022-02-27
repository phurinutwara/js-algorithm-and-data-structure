function averagePair(pair,avg){
  // add whatever parameters you deem necessary - good luck!
  

  let left = 0;
  let right = pair.length - 1;

  while (left < right){
      if ((pair[left] + pair[right]) / 2 === avg )
        return true;
      else if((pair[left] + pair[right]) / 2 > avg)
        right--;
      else
        left++;
  }
  return false
}

console.log(averagePair([1,2,2,5],2.5))