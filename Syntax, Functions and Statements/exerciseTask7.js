function solve(...arguments) {
    let number = Number(arguments[0]);
 
    const operations = {
        chop: () => number / 2,
        dice: () => Math.sqrt(number),
        spice: () => number + 1,
        bake: () => number * 3,
        fillet: () => number * 0.80
    };
 
    for (let index = 1; index < arguments.length; index++) {
        number = operations[arguments[index]]();
        console.log(number);
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')