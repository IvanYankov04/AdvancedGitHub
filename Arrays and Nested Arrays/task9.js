function findBiggestElement(matrix) {
  
    let biggestElement = matrix[0][0]; // Initialize with the first element
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > biggestElement) {
          biggestElement = matrix[i][j];
        }
      }
    }
    return biggestElement;
  }
  console.log(findBiggestElement([[20, 50, 10],[8, 33, 145]]))