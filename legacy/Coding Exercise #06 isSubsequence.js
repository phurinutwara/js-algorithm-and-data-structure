function isSubsequence(str1,str2) {
  // good luck. Add any arguments you deem necessary.

  let left = 0;
  let right = 0;

  while (left < str1.length){
      if (str1[left] === str2[right]){
          left++
          right = left
      }
      else if (right === str2.length - 1){
          return false
      }
      else{
          right++;
      }
  }
  return true
}

console.log(isSubsequence("abc","acb"))