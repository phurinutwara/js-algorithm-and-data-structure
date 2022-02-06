const sameFrequency = (digit1, digit2) => {
    let [arr1, arr2] = [digit1.toString().split(''), digit2.toString().split('')]
    let [freq1, freq2] = [{}, {}]

    if (arr1.length !== arr2.length) return false
    for(let val of arr1) freq1[val] = (freq1[val] || 0) + 1
    for(let val of arr2) freq2[val] = (freq2[val] || 0) + 1
    
    for(let key in freq1)
        if(freq1[key] !== freq2[key]) return false
    
    return true
}