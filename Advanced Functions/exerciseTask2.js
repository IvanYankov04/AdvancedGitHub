function solve(...arguments){

    let result ={}
    for(let el of arguments){

        let typeOfElements = typeof(el)
        console.log(`${typeOfElements}: ${el}`)
        if(!result.hasOwnProperty(typeOfElements)){
            result[typeOfElements] = 0
        }
        result[typeOfElements] = result[typeOfElements] + 1
    }

    let sortedRes = Object.entries(result).sort((a,b) => b[1] - a[1])
    for(let [k,v] of sortedRes){//итерираме по обекта

        console.log(`${k} = ${v}`)
    }



}
solve('cat', 42, function () { console.log('Hello world!'); })