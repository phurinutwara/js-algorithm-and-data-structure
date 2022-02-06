const pivot = (arr, start = 0, end = arr.length - 1) => {
    // swap helper
    const swap = (arr,idx1,idx2) => {
        [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
        return arr
    }
    let pivot = arr[start] , pivotIndex = start

    // loop though for value to swap value lower than pivot to the left
    for(let i = pivotIndex + 1 ; i <= end ; i++){
        if (arr[i] < pivot){
            pivotIndex++
            swap(arr,i,pivotIndex)
        }
    }
    // swap pivot with last pivotIndex
    swap(arr, 0, pivotIndex)
    console.log('preview arr : ', arr)
    
    // return the finished index
    return pivotIndex
}

pivot([9,4,8,2,1,5,7,6,3])