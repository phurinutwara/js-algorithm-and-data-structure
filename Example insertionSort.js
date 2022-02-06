// const insertionSort = arr => {
//     const swap = (arr,idx1,idx2) => {
//         [arr[idx2],arr[idx1]] = [arr[idx1],arr[idx2]]
//     }
//     let count = 0;
//     for (let i = 1; i < arr.length; i++ , count++){
//         for(let j = i; j >= 0; j-- , count++){
//             if (arr[j - 1] > arr[j]) swap(arr,j,j-1)
//             else break
//         }
//     }
//     console.log(`total loop`, count)
//     return arr
// }

const insertionSort = arr => {
    let count = 0;
    for (let i = 1; i < arr.length; i++, count++){
        let currentVal = arr[i]
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--, count++){
            arr[j + 1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    console.log(`total count: `,count)
    return arr
}

console.log(insertionSort([2,1,9,76,4]))