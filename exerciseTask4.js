function solve(year,month,date){

    let newYear = new Date(year,month - 1,date);
    
    newYear.setDate(newYear.getDate() - 1)

    console.log(`${newYear.getFullYear()}-${newYear.getMonth()+1}-${newYear.getDate()}`)

}
solve(2016, 9, 30)