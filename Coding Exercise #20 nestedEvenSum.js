function nestedEvenSum (obj) {
  // add whatever parameters you deem necessary - good luck!
  const objVal = Object.values(obj)
  let sum = 0

  if (objVal.length === 0) return 0

  if (typeof objVal[0] === "object")
    sum = nestedEvenSum(objVal[0])
  else if(Number.isInteger(objVal[0])){
    if (objVal[0] % 2 === 0) sum = objVal[0]
  }

  return sum + nestedEvenSum(objVal.slice(1))
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10