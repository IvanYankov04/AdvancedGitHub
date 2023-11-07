function solve(arr){

    let num = 1 ;
    let result = [];

    for(let index = 0;index<arr.length;index++){

        let command = arr[index];

        if(command==="add"){
            result.push(num);
            num++
        }else{
            result.pop();
            num++
        }
    }
    result.length>0?console.log(result.join("\n")):console.log("Empty")

    // if(result.length){
    //     console.log(result.join("\n"))
    // }else{
    //     console.log("Empty")
    // }

}
solve(['add',

'add',

'add',

'add'])