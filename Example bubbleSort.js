const bubbleSort = (arr) => {
    let noSwaps
    for(let i = arr.length - 1; i > 0; i--){
        noSwaps = true
        for(let j = 0; j < arr.length - 1; j++){
            if (arr[j] > arr[j + 1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr
}

console.log(bubbleSort([1,4,234,52,12,3,4,3,4,5]))