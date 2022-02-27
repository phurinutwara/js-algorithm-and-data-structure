function areThereDuplicates(...arr) {
  // good luck. (supply any arguments you deem necessary.)
  // Use Frequency Counter
  
  // Store it in Object and if it's already key in there then return true. After that , false.

  // Declaring Object
  let freqCounter = {};

  for (let val of arr){
      freqCounter[val] = freqCounter[val] + 1 || 1;
  }
  
  for (let val in freqCounter){
      if (freqCounter[val] > 1){
        return true
      }
  }
  return false
}

console.log(areThereDuplicates(1,2,3))