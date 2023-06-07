function findNextGreaterElements(n, arr) {
  const result = [];
  const stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.unshift(-1);
    } else {
      result.unshift(stack[stack.length - 1]);
    }

    stack.push(arr[i]);
  }

  return result;
}

const n1 = 4;
const arr1 = [1, 3, 2, 4];
console.log(findNextGreaterElements(n1, arr1)); // Output: [3, 4, 4, -1]

const n2 = 5;
const arr2 = [6, 8, 0, 1, 3];
console.log(findNextGreaterElements(n2, arr2)); // Output: [8, -1, 1, 3, -1]
