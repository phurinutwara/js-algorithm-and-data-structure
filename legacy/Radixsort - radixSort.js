const getDigit = (num, digit) => Math.floor((Math.abs(num) / (Math.pow(10, digit))) % 10)

const digitCount = (num, count = 0) => {
    if (num == 0) return 1
    return Math.floor(Math.log10(num)) + 1
}

const mostDigits = (arr) => {
    let maxDigit = 1
    for(let i = 0; i < arr.length; i++)
        maxDigit = Math.max(maxDigit, digitCount(arr[i]))
    return maxDigit
}

const radixSort = (arr) => {
    let mostDigit = mostDigits(arr)

    // loop up to largest number of digits
    for( let i = 0; i < mostDigit; i++){
        // creating 10 buckets 
        let bucket = Array.from({length: 10}, () => [])

        // put values in arr to each bucket
        arr.forEach((val,index) => bucket[getDigit(val, i)].push(val))

        // reduct the object
        arr = bucket.reduce( (previousValue, currentValue) => previousValue.concat(currentValue) )
    }

    return arr
}

console.log(radixSort([23,345,5467,12,2345,9852]))