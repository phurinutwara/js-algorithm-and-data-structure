const minSubArrayLen = (arr, num) => {
    let currentSum = 0;
    let windowSize = 1;
    let windowIndex = 0;

    while (windowSize <= arr.length){
        if (windowIndex >= arr.length){
            windowIndex = 0;
            currentSum = 0;
            windowSize++;
            continue;
        }
        
        currentSum += arr[windowIndex];
        
        if(windowIndex > 0 && windowIndex > windowSize - 1)
            currentSum = currentSum - arr[windowIndex - (windowSize)];

        if (currentSum >= num)
            return windowSize;
            
        windowIndex++;
    }
    return 0;
};