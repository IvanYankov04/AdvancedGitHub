function solve(library, orders){

    let newArr = [];

    for(let order of orders){

        const currentpositon =  Object.assign({}, order.template);

        for(let part of order.parts){
            currentpositon[part] = library[part]
        }

        newArr.push(currentpositon)
    }

    return newArr
    

}
solve()