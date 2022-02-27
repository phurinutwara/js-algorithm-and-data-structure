/**
 * Creating POINTER or values that correspond to
 * an index or position and move towards the beginning,
 * end or middle based on a certain condition
 * 
 * VERY efficient for solving problems
 * with minimal space complexity as well
 */

const sumZero = (sortedArr) => {

    let left = 0;
    let right = sortedArr.length - 1;
    let result = [];

    while (left < right) {
        const sum = sortedArr[left] + sortedArr[right];
        if (sum > 0) {
            right--;
        } else if (sum < 0) {
            left++;
        } else if (sum === 0) {
            return [sortedArr[left], sortedArr[right]];
        } else {
            return undefined;
        }
    }


};
sumZero([-3, -2, -1, 0, 4]);

////////////////////////////////

const countUniqueValues = (sortedArr) => {
    let left = 0;
    let right = 1;
    let unique = [];

    while (left < sortedArr.length) {
        if (left === right) right++;
        if (sortedArr[left] === sortedArr[right]) {
            right++;
            continue;
        }
        unique.push(sortedArr[left]);
        left = right;
    }

    return unique.length;
};
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); //?