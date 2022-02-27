/**
 * find factorial of according integer
 * @param {number} num 
 * @returns 
 */
const factorial = (num = 1) => num <= 1 ? num : num * factorial(num - 1);

factorial(4);