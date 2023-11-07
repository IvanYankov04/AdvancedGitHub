function solve(info){

    let result = {};

    for(let el of info){

        let[town,population] = el.split(" <-> ")
        population = Number(population)

        if(result[town] !=undefined){
            population +=result[town]
        }

        result[town]=population

    }

    for(let data in result){
        console.log(`${data} : ${result[data]}`)
    }
    

}
(solve(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000']))