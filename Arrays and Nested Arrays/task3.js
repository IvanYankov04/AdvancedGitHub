// function solve(arr){

//     const firstNum = Number(arr[0]);
//     const lastNum = Number(arr[arr.length - 1]);

//     return firstNum + lastNum
    
// }
solve(['20', '30', '40'])

function solve(arr){

    console.log(Number(arr.pop()) + Number(arr.shift()))
}