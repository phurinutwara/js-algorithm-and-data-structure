function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  let maxStack = 0
  let currentStack = 0;
  let currentHold = {};
  let index = 0;
  let position = 0;

  while(position < str.length){

    if (index >= str.length){
      position++
      index = position
      continue
    }
    
    currentHold[str[index]] = currentHold[str[index]] + 1 || 1;

    if (currentHold[str[index]] > 1 || index >= str.length ){
      currentHold = {}
      maxStack = Math.max(maxStack, currentStack);
      currentStack = 0
      position++
      index = position
      continue
    }

    currentStack++;
    index++;
  }
  return maxStack
}

console.log(findLongestSubstring(''))
console.log(findLongestSubstring('rithmschool'))
console.log(findLongestSubstring('thisisawesome'))
console.log(findLongestSubstring('thecatinthehat'))
console.log(findLongestSubstring('bbbbbb'))
console.log(findLongestSubstring('longestsubstring'))
console.log(findLongestSubstring('thisishowwedoit'))