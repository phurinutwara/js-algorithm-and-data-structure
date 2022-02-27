/*
This pattern used objects or sets to collect 
values / frequencies of values

This can often avoid the need for nested loops
 or O(N^2) operations with arrays / strings
*/

const same = (arr, squaredArr) => {
    if (arr.length !== squaredArr.length) return false;

    let obj = {};
    let rootedObj = {};

    arr.map(number => obj[number] = (obj[number] + 1) || 1);
    squaredArr.map(number => rootedObj[Math.sqrt(number)] = (rootedObj[Math.sqrt(number)] + 1) || 1);

    for (let key in obj) {
        if (obj[key] !== rootedObj[key]) {
            return false;
        }
    }
    return true;
};

same([1, 2, 3, 2], [9, 1, 4, 4]); //?

////////////////////////////////

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    let freqCounter1 = {};
    let freqCounter2 = {};

    str1.split('').map(char => freqCounter1[char] = (freqCounter1[char] + 1) || 1);
    str2.split('').map(char => freqCounter2[char] = (freqCounter2[char] + 1) || 1);

    for (let key in freqCounter1) {
        if (freqCounter1[key] !== freqCounter2[key]) {
            return false;
        }
    }

    return true;
};

validAnagram("qwerty", "twerqy"); //?