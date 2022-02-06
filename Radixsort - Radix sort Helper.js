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

console.log(mostDigits([1,10,1000,100]))