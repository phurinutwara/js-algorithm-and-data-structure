const selectionSort = (arr) => {
    const swapByIndex = (arr,a,b) => {[arr[a], arr[b]] = [arr[b],arr[a]]}
    for(let i = 0; i < arr.length; i++){
        let minIndex = i
        for(let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[minIndex]) minIndex = j
        }
        if (arr[i] !== arr[minIndex]) swapByIndex(arr,i, minIndex)
    }
    return arr
}

console.log(selectionSort([1,8,5,3,2]))