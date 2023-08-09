function spiralOrder(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  const m = matrix.length;
  const n = matrix[0].length;
  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;
  const result = [];

  while (top <= bottom && left <= right) {
    // Traverse top row
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Traverse right column
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // Traverse bottom row
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // Traverse left column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
}

const Matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(Matrix));
