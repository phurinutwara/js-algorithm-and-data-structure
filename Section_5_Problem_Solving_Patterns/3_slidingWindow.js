/**
 * This pattern involves creating a WINDOW which can either be 
 * an array or number from one position to another
 * 
 * Depending on a certain condition, 
 * the window either increases or closes (and a new window is created)
 * 
 * Very useful for keeping track of a subset of data in an array/string etc.
 */

/**
 * Example solution to solve maxSubarraySum() with sliding window 
 * assume that we had parameter as 
 *     ->  ([1,2,3,4,5,6,7,8,9,10],4)
 *           ^     ^
 * 
 * first;  sum the first consecutive subArray first 
 *         ->  ([1,2,3,4,5,6,7,8,9,10],4)
 *             ^     ^                             <- oldWindow
 *             + + + +                             <- number to be subtracted or added to the current state
 *         ->    1+2+3+4                            = 10 and we'll call this group as oldWindowSum
 *         -> also kept the value of oldWindow as first maxSubArraySum
 * 
 * second; what we going to do next is, when we're moving to second window. 
 *         we subtrack the left-edge of subArray which is 1 so next is    
 *         ([1,2,3,4,5,6,7,8,9,10],4)
 *             ^     ^                             <- Current window
 *           -       +                             <- number to be subtracted or added to the current state
 * 
 *         -> oldWindow - (outedLeftEdge) + (rightEdge) 
 *         ->     10    -        1        +     5   = 14 and we'll call this value as currentWindowSum
 *    
 * third;  we check the value of oldWindowSum and currentWindowSum that what is greater,
 *         we'll replace the greater to the new value of maxSubArraySum
 * 
 * forth;  we'll keep doing second and third step 
 *         until our rightEdge meet the end of array
 *         then we will return the value of maxSubArraySum as an output
 */

const maxSubarraySum = (arr, size) => {
    if (size > arr.length) return null;

    let currentSum = arr.slice(0, size).reduce((acc, value) => acc + value, 0); //?
    let maxSubArraySum = currentSum;
    let index = 1;

    while (index <= (arr.length - size)) {
        const outLeftEdge = arr[index - 1];
        const newRightEdge = arr[index - 1 + size];
        currentSum = currentSum - outLeftEdge + newRightEdge; //?
        maxSubArraySum = Math.max(currentSum, maxSubArraySum);
        index++;
    }
    return maxSubArraySum;
};
maxSubarraySum([1, 1, 1, 1, 12, 1, 3, 4, 9, 5, 9, 2], 4); //?