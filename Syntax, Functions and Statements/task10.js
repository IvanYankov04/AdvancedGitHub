function solve(arr) {
    let sum = arr.reduce((a, b) => a + b);
    // let inverse = arr.reduce((a,b)=> a+1/b, 0);
    let inverse = 0;
    for (let index = 0; index < arr.length; index++) {
        inverse += 1/arr[index];
    }
    let concat = arr.join("")
 
    console.log(sum);
    console.log(inverse);
    console.log(concat);
}
solve([1, 2, 3])