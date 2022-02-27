/**
 * 
 * @param {[]} arr - a collection of integer
 * @returns result array of odd values
 */
const collectOddValues = (arr) => {
    let newArr = [];
    // Base case
    if (!arr.length) return newArr;

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
};

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]); //?