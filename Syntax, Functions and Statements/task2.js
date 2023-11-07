function solve(a,b,c) {

    let aLenght = a.length
    let bLength = b.length
    let cLength = c.length;

    let sum = aLenght + bLength + cLength 
    console.log(sum)

    let delSum = Math.floor(sum / 3);
    console.log(delSum)

}
solve('chocolate', 'ice cream', 'cake')