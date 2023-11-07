function solve(arr){

    const data = arr.map(row => row.trim().split("|").map(cell => cell.trim())).map((row)=>row.filter((cell)=>cell !== ""))
    
    const header = data[0];
    const info = data.slice(1);

    //Map info
    const result = info.map(row =>{
        const obj = {

        }
        header.forEach((element,index) => {

            const Parsed = Number(row[index])

            obj[element] = isNaN(Parsed)?row[index]:Number(Parsed.toFixed(2))
        });
        return obj
    })

    console.log(JSON.stringify(result))
    


}
solve(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |'])