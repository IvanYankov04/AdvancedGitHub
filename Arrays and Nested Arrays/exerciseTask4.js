function rotateArray(inputArray, rotations) {
    let rotatedArray = inputArray.slice(); // Make a copy of the original array to avoid modifying it directly
  
    for (let i = 0; i < rotations; i++) {
      const lastElement = rotatedArray.pop(); // Remove the last element
      rotatedArray.unshift(lastElement); // Add the last element to the beginning of the array
    }
  
    return rotatedArray.join(' '); // Join the rotated array elements into a single string with spaces
  }
rotateArray(['1',

'2',

'3',

'4'],

2)