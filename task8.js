function solve(month,year){

    let lastDayOfMonth = new Date(year,month,0);

    return lastDayOfMonth.getDate()


}
console.log(solve(1, 2012))

// function getDaysInMonth(year, month) {
//     // JavaScript months are 0-based, so we subtract 1 from the input month.
//     // For example, January is 0, February is 1, and so on.
//     month--; 
  
//     // Create a Date object for the first day of the next month.
//     // When you set the day to 0, it goes back to the last day of the previous month.
//     const lastDayOfMonth = new Date(year, month + 1, 0);
  
//     // Get the date (day) of the last day of the given month.
//     return lastDayOfMonth.getDate();
//   }
  
//   // Example usage:
//   const year = 2023;
//   const month = 9; // September
//   const daysInMonth = getDaysInMonth(year, month);
//   console.log(`There are ${daysInMonth} days in ${year}/${month + 1}`);