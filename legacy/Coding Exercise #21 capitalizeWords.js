function capitalizeWords (arr) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = []
  if (arr.length === 0) return newArr
  newArr = [ arr[0].toUpperCase() ]
  return newArr.concat(capitalizeWords(arr.slice(1)))
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']