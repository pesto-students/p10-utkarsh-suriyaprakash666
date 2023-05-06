function maxSubArray(A) {
  let maxEndingHere = A[0];
  let maxSoFar = A[0];

  for (let i = 1; i < A.length; i++) {
    maxEndingHere = Math.max(A[i], maxEndingHere + A[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

const A = [1, 2, 3, 4, -10];
console.log(maxSubArray(A)); // Output: 10

const B = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(B)); // Output: 6
