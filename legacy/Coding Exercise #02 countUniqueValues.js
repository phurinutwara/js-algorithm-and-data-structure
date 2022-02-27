const countUniqueValues = (arr) => {
    if (arr.length === 0) return 0

    let uniquePointer = 0

    for(let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[uniquePointer]){
            uniquePointer++
            arr[uniquePointer] = arr[i]
        }
    }
    return uniquePointer + 1
}