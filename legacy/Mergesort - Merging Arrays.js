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

merge([1,3,9,40],[2,4,6,7])