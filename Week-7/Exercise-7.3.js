function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      swap(nums, low, mid);
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      swap(nums, mid, high);
      high--;
    }
  }
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

const arr1 = [0, 2, 1, 2, 0];
sortColors(arr1);
console.log(arr1); // Output: [0, 0, 1, 2, 2]

const arr2 = [0, 1, 0];
sortColors(arr2);
console.log(arr2); // Output: [0, 0, 1]
