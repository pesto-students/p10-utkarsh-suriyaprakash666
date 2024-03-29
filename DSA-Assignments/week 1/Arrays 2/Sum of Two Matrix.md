## Problem Name:

Sum of Two Matrix

## Problem Statement:

Take 2 2d arrays from the user and return a 2d
array as their sum.

Note - rows and cols must be same of both the
input matrix else throw an error message "Arrays must have the same
dimensions"

## Input Format:

- First Line contains a number representing rows
- Second line - a number representing cols
- from Third line - elements

## Output Format:

An Array with sub array of resulted elements

## Test Case 1:

Example input:

- 2
- 3
- 1 2 3 4 5 6

- 2
- 3
- 7 8 9 10 11 12

Example output:
[
[8, 10, 12],
[14, 16, 18]
]

## Test Case 2:

Example input:

- 2
- 2
- 1 2 3 4

- 2
- 2
- 5 6 7 8

Example output:
[
[6, 8],
[10, 12]
]

## Level: Medium

## Hints:

- Create a function that takes rows and colums and
  use a nested loop to scan each element from
  the user.
  Call the function 2 times to create two matrix.
  Then use loop to sum the values and push them
  into an empty array.

- prompt row
  prompt col

```
for{ rows
for{ cols
prompt elements
 }
}

if(!dimension matches)
give error
else
{
sum using nested loop
and push into an empty array
}
```

## Approach:

- step 1 - Define a function getInputArray() to take input for a 2D array.

- step 2 -Prompt the user to enter the number of rows and columns.

- step 3 - Use nested loops to iterate through each element of the array
  and store the user-entered values.

- step 4 - Define a function calculateSumOfArrays(array1, array2) to calculate the
  sum of two 2D arrays. Perform error handling to check if the dimensions of the
  arrays match. If the dimensions are not equal, throw an error.
  Create a new 2D array sumArray to store the sum of the arrays.

- step 5 - Use nested loops to iterate through the elements of the arrays.

- step 6 - Add the corresponding elements of array1 and array2 and store the sum in
  sumArray.

- step 7 - Return the sumArray as the result of the calculation.

### Code

```JavaScript
function getInputArray() {
  const rows = parseInt(prompt("Enter the number of rows:"));
  const cols = parseInt(prompt("Enter the number of columns:"));

  const array = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(parseInt(prompt(`Enter element for row ${i+1}, column ${j+1}:`)));
    }
    array.push(row);
  }

  return array;
}

function calculateSumOfArrays(array1, array2) {
  const rows1 = array1.length;
  const cols1 = array1[0].length;
  const rows2 = array2.length;
  const cols2 = array2[0].length;

  if (rows1 !== rows2 || cols1 !== cols2) {
    throw new Error("Arrays must have the same dimensions");
  }

  const sumArray = [];
  for (let i = 0; i < rows1; i++) {
    const row = [];
    for (let j = 0; j < cols1; j++) {
      row.push(array1[i][j] + array2[i][j]);
    }
    sumArray.push(row);
  }
  return sumArray;
}

try {
  // Get the first array from the user
  const array1 = getInputArray();

  // Get the second array from the user
  const array2 = getInputArray();

  // Calculate the sum of the arrays
  const sumArray = calculateSumOfArrays(array1, array2);

  // Print the result
  console.log(sumArray);
} catch (error) {
  console.log(error.message);
}
```
