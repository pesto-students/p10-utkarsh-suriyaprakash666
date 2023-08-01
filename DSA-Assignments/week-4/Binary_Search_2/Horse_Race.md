## Problem Name:

Horse Race

## Problem Statement:

You are given a list of N horses, and each horse
has a certain strength value. You need to find the
horse with the maximum strength value. However,
you can only compare two horses at a time in a
race. You can organize a maximum of K races to
determine the horse with the maximum strength
value. Write a program to find the horse with the
maximum strength value using binary search.

## Input Format:

The first line of input contains two
space-separated integers:

N (the number of horses) and
K (the maximum number of races allowed).

The second line of input contains N
space-separated integers denoting the
strength values of the horses.

## Output Format:

A single integer
representing the index
of the horse with the
maximum strength value.

## Test Case 1:

Sample Input:
`5` `2`
`4 2 7 5 1`

Sample Output
`2`

## Test Case 2:

Sample input:
`6` `3` `9 4 8 2 6 5`

Sample output:
`0`

## Level: Medium

## Hints:

- Think about how binary search
  can be used to find the maximum
  strength value with the given constraints.

- Consider splitting the horses into groups and
  organizing races between the groups.
- Determine the winner of each race and
  continue organizing races until you have the
  horse with the maximum strength value.

## Approach:

- Parse the input to retrieve the values of N, K, and the strength values of the horses.
- Define a function race(groups) that takes a list of groups of horses and returns the index of the horse with the maximum strength value.
- In the race function, if there is only one group remaining, return the index of the horse
  with the maximum strength value in that group.
- Divide the list of groups into two subgroups.
  Recursively call the race function on each subgroup and store the results.
- Determine the winners of the races between the subgroups.
- If K is greater than 1, decrement K by 1 and repeat steps 4-7 until K becomes 1.
- Return the index of the horse with the maximum strength value from the final race.

### Code

```JavaScript
function findMaxStrengthHorse(N, K, strengthValues) {
  function canFindHorseWithStrength(value) {
    let races = 0;
    let i = 0;
    while (i < N) {
      let maxStrength = -1;
      for (let j = 0; j < K && i + j < N; j++) {
        maxStrength = Math.max(maxStrength, strengthValues[i + j]);
      }
      i += K;
      if (maxStrength >= value) {
        races++;
      }
    }
    return races > 0;
  }

  let left = 1;
  let right = Math.max(...strengthValues);
  let maxStrength = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (canFindHorseWithStrength(mid)) {
      maxStrength = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  let maxIndex = -1;
  for (let i = 0; i < N; i++) {
    if (strengthValues[i] === maxStrength) {
      maxIndex = i;
      break;
    }
  }

  return maxIndex;
}

// Test Case 1
console.log(findMaxStrengthHorse(5, 2, [4, 2, 7, 5, 1])); // Output: 2

// Test Case 2
console.log(findMaxStrengthHorse(6, 3, [9, 4, 8, 2, 6, 5])); // Output: 0
```
