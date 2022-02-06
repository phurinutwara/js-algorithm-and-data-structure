const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false
    let [arr1, arr2] = [str1.split(''), str2.split('')]
    
    let [freqCount1,freqCount2] = [{},{}]

    for(let val of arr1) freqCount1[val] = freqCount1[val] + 1 || 1
    for(let val of arr2) freqCount2[val] = freqCount2[val] + 1 || 1
    
    for(let index in freqCount1)
        if (freqCount1[index] !== freqCount2[index]) return false
    
    return true
}