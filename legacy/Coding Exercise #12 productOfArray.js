// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// Helper Method
const productOfArrayWithHelper = (arr) => {
    let result = 1
    const helper = (helperInput) => {
        if (helperInput.length === 0) return
        result *= helperInput[0]
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result
}
// console.log(productOfArrayWithHelper([1,2,3,10]))

// Pure Recursion
const productOfArray = (arr) => {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1))
}
console.log(productOfArray([1,2,3,4]))
