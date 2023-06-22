function findJudge(n, trust) {
  const trustCount = new Array(n + 1).fill(0);
  const trustedByCount = new Array(n + 1).fill(0);

  for (let [a, b] of trust) {
    trustCount[a] += 1;
    trustedByCount[b] += 1;
  }

  for (let i = 1; i <= n; i++) {
    if (trustCount[i] === 0 && trustedByCount[i] === n - 1) {
      return i;
    }
  }

  return -1;
}

// Example 1
const n1 = 2;
const trust1 = [[1, 2]];
console.log(findJudge(n1, trust1)); // Output: 2

// Example 2
const n2 = 3;
const trust2 = [
  [1, 3],
  [2, 3],
];
console.log(findJudge(n2, trust2)); // Output: 3

// Example 3
const n3 = 3;
const trust3 = [
  [1, 3],
  [2, 3],
  [3, 1],
];
console.log(findJudge(n3, trust3)); // Output: -1
