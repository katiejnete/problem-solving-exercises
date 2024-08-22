// add whatever parameters you deem necessary
function separatePositive(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] < 0) {
    const removedNum = arr.splice(left, 1);
      arr.push(removedNum[0]);
      right--;
    } else {
      left++;
    }
  }

  return arr;
}

module.exports = separatePositive;
