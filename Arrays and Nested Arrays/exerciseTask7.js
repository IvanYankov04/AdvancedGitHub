function sortAlternate(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
  
    // Initialize an empty result array
    const result = [];
  
    // Initialize two pointers, one at the beginning and one at the end of the sorted array
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      // Append the smallest element from the left pointer
      result.push(arr[left]);
      left++;
  
      // Append the largest element from the right pointer
      result.push(arr[right]);
      right--;
    }
  
    return result;
  }
sortAlternate([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])