function storeCatalogue(input) {
    let dictionary = {};
 
    while (input.length) {
        let [name, price] = input.shift().split(' : ');
        price = Number(price);
 
        let firstLetter = name[0];
        if (!dictionary[firstLetter]) {
            dictionary[firstLetter] = [];
        }
        dictionary[firstLetter].push({name, price});
        dictionary[firstLetter].sort((a, b) => (a.name).localeCompare(b.name));
    }
 
    let result = [];
 
    Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
        let values = entry[1].sort((a, b) => (a.name).localeCompare(b.name))
                             .map(product => `  ${product.name}: ${product.price}`);
        let string = `${entry[0]}\n${values.join('\n')}`;
        result.push(string);
    });
 
    return result.join('\n');
}