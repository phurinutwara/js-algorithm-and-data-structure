function factorialIterative(num){
    let total = 1
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total
}

function factorialRecursive(num){
    if (num === 1) return num
    return num * factorialRecursive(num - 1)
}

console.log('Iterative : ' + factorialIterative(4))
console.log('Recursive : ' + factorialRecursive(4))