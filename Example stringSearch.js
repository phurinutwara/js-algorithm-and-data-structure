let stringSearch = (str, find) => {
    find = find.split('');
    let [newStr,count] = [[...str],0]
    for(let i = 0; i <= (str.length - find.length); i++){
        if (str[i] === find[0]){
            let correctLength = 0;
            for(let j = 1; j < find.length; j++)
                if (str[i + j] === find[j])correctLength++           
            if (correctLength === find.length - 1) count++
        }
    }
    return count
}

console.log(stringSearch("wowomgzomgwow","w"))


// eg stringSearch("wowomgzomg", omg)
// should return 2 as a count.