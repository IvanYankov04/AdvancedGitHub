function solve(arr){

    const result = []

    for(let el of arr){

        if(el<0){
            result.unshift(el)
        }else{
            result.push(el)
        }
    }

    for(let nums of result){
        console.log(nums)
    }
   

}
solve([7, -2, 8, 9])