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
    swap(arr, start, pivotIndex)
    console.log('preview arr : ', arr)
    
    // return the finished index
    return pivotIndex
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right){
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex - 1)
        //right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
    
}

quickSort([4,6,9,1,2,5])