let obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

const stringifyNumbers = (obj, stack = 0) => {
    let newObj = {}
    if (stack === 0) newObj = Object.assign({},obj)
    else newObj = obj

    for(let key in newObj){
        if (typeof newObj[key] === "number"){
            newObj[key] = newObj[key].toString()
        }
        else if (typeof newObj[key] === "object")
            stringifyNumbers(newObj[key], stack++)
    }

    return newObj
}

console.log(stringifyNumbers(obj1))
console.log(obj1)