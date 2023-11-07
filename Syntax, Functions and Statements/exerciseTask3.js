function solve(number){

    let isSame = true;
    let numAsString = number.toString();
    let firstChar = numAsString[0];
    let sum = 0

    for(let index = 0;index<numAsString.length;index++){

        if(numAsString[index] !== firstChar){
            isSame = false
        }
        sum += Number(numAsString[index])

    }
    console.log(isSame)
    console.log(sum)

}
solve(2222222)