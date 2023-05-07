function closestSumToTarget(S, target) {
  S.sort((a, b) => a - b);

  let closestSum = Infinity;

  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1;
    let right = S.length - 1;

    while (left < right) {
      const sum = S[i] + S[left] + S[right];

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

const S = [-1, 2, 1, -4];
const target = 1;
console.log(closestSumToTarget(S, target)); // Output: 2
