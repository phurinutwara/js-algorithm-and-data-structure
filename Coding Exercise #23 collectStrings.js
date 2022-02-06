const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

const collectStrings = (obj) => {
    let newArr = []
    
    for(let key in obj){
        if(typeof obj[key] === "string"){
            newArr.push(obj[key])
        }
        else if (typeof obj[key] === "object"){
            newArr.push(...collectStrings(obj[key]))
        }
    }

    return newArr
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])