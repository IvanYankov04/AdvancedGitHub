function solve (parameter){
    let num = Number(parameter);
    let text = "* ";

    if(isNaN(num)){
        num = 5;
    }

    let toRepeat = text.repeat(num);

    for(let i = 1; i <= num; i++){
        console.log(toRepeat);
    }

}
solve(2)
