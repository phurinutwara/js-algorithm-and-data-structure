/**
 * This pattern involves dividing a data set into
 * smaller chunks and then repeating a process with a subset of data
 * 
 * This pattern can tremendously,
 * * DECREASE TIME COMPLEXITY
 */

/**
 * Scenerio
 * e.g. [1,2,3,4,5,6,7,8,9,10], find 4
 * 
 * 1:   [1,2,3,4,5,6,7,8,9,10]      
 *       ^       *          ^           <- let ^ is edge and * is current pointer 
 *                                       * index (0 + 9)/2 = 4.5, 
 *                                       * we have to floored it so pointer is index 4 out of 9
 * 
 * 2:   [1,2,3,4,5,6,7,8,9,10]      
 *       ^   *   ^                      <- let ^ is edge and * is current pointer
 * 
 * 3:   [1,2,3,4,5,6,7,8,9,10]      
 *           ^ * ^                      <- let ^ is edge and * is current pointer
 * 
 * 4:   Found at INDEX = 3 and we'll return 3 to output
 *      If not found (left edge > right edge), we'll return -1
 */

/**
 * Search the array by divide and conquer principle
 * 
 * @param {[]} sortedArr - the input array must be SORTED
 * @param {number} value - and value to be searched
 * @returns {number} the index of searched item, -1 if not found
 */
const search = (sortedArr, value) => {
    let leftEdge = 0;
    let rightEdge = sortedArr.length - 1;
    let pointer = Math.floor((leftEdge + rightEdge) / 2);

    while (leftEdge < rightEdge && leftEdge !== pointer) {
        pointer = Math.floor((leftEdge + rightEdge) / 2);

        if (sortedArr[pointer] === value)
            return pointer;

        if (sortedArr[pointer] > value)
            rightEdge = pointer;
        else
            leftEdge = pointer;
    }

    return -1;
};

search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4.5); //?
/**
 * [0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  10], find 4.5
 *  ^               *                        $
 *                  ^           *            $
 *                  ^   *       $
 *                 *^   $                       <- leftEdge equal pointer, break loop and return -1.
 *                 
 */