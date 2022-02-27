// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
    if (num <= 0) return 0
    if (num === 1 || num === 2) return 1
    return fib(num - 1) + fib(num - 2)
}

for(let i = 0 ; i < 10 ; i++){
    console.log(fib(i))
}