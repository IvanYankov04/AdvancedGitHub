function solve(arr){

    let result = [];
    let checkNumber = 0

    for(let nums of arr){

        if(nums>=checkNumber){
            checkNumber = nums;
            result.push(checkNumber)
        }
    }
    return result

}
console.log(solve([1, 2, 3, 4]))