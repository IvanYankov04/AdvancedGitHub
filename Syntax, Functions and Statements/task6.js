function solve(n,m){

    let numberOne = Number(n);
    let secondNum = Number(m);  

    let result = 0

    for(let index = numberOne;index<=secondNum;index++){
        result += index 
    }
    return result

}
solve('1', '5')