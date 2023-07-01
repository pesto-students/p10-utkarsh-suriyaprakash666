function findJudge(n, trust) {
  const trustCounts = Array(n + 1).fill(0);
  const isTrustedBy = Array(n + 1).fill(0);

  for (let [a, b] of trust) {
    trustCounts[b]++;
    isTrustedBy[a]++;
  }

  for (let i = 1; i <= n; i++) {
    if (trustCounts[i] === n - 1 && isTrustedBy[i] === 0) {
      return i;
    }
  }
  return -1;
}

const n1 = 2;
const trust1 = [[1, 2]];
console.log(findJudge(n1, trust1));

const n2 = 3;
const trust2 = [
  [1, 3],
  [2, 3],
];
console.log(findJudge(n2, trust2));

const n3 = 3;
const trust3 = [
  [1, 3],
  [2, 3],
  [3, 1],
];
console.log(findJudge(n3, trust3));
