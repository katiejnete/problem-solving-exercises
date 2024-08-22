// add whatever parameters you deem necessary
function countPairs(arr, num) {
  arr = arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;
  let count = 0;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === num) {
      count++;
      left++;
      right--;
    } else if (sum > num) {
      right--;
    } else {
      left++;
    }
  }

  return count;
}

module.exports = countPairs;
