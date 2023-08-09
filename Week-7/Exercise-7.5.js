function findPair(A, B) {
  const hash_table = {};

  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    if (hash_table[num - B] || hash_table[num + B]) {
      return 1;
    }

    hash_table[num] = true;
  }
  return 0;
}

const A = [5, 10, 3, 2, 50, 80];
const B = 78;
console.log(findPair(A, B)); // Output: 1

const A2 = [-10, 20];
const B2 = 30;
console.log(findPair(A2, B2)); // Output: 1
