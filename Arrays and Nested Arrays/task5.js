// function solve(arr){

//     let min = arr[0];
    
//     for(let i = 0;i<arr.length;i++){
//         if(min>arr[i]){
//             min = arr[i]
//         }
        
//     }
//     console.log(min)

// }
solve([30, 15, 50, 5])

function solve(arr){
    let smallest = arr[0];
    let secondSmallest = arr[1];
  
    if (secondSmallest < smallest) {
      smallest = arr[1];
      secondSmallest = arr[0];
    }
  
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      } 
}

console.log(`${smallest} ${secondSmallest}`)

}