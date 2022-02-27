const merge = (arr1, arr2) => {
    let result = []
    let [leftIndex, rightIndex] = [0,0]

    while (leftIndex < arr1.length && rightIndex < arr2.length){
        if(arr1[leftIndex] < arr2[rightIndex]){
            result.push(arr1[leftIndex])
            leftIndex++
        }
        else {
            result.push(arr2[rightIndex])
            rightIndex++
        }
    }
    while (leftIndex < arr1.length) {
        result.push(arr1[leftIndex])
        leftIndex++
    }
    while (rightIndex < arr2.length) {
        result.push(arr2[rightIndex])
        rightIndex++
    }

    return result
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let left = mergeSort(arr.slice(0,Math.floor(arr.length / 2)))
    let right = mergeSort(arr.slice(Math.floor(arr.length / 2)))
    return merge(left, right)
}

console.log(mergeSort([10,24,76,73]))