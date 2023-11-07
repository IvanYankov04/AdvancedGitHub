function solve(arr){

    return arr.sort((a,b)=>{

        if(a.length !== b.length){
            return a.length - b.length
        }
        return a.localeCompare(b)
    }).join("\n")

}
solve(['alpha',

'beta',

'gamma'])