## Problem Statement:

Is Pallindrome ?

## Problem Statement:

Take input a number from the user and check
number is pallindrome or not

## Input Format:

First Line contains a number

## Output Format:

A String - Yes/No

## Test Case 1:

Example input:
`12321`

Example output:
Yes

## Test Case 2:

Example input:
`12345`

Example output:
No

## Level: Medium

## Hints:

- Use the modulus operator (%) to extract the
  last digit of the number.
  Multiply the reversed number by 10 and add
  the extracted digit to it.

- Divide the original number by 10 to remove the last digit.
  Repeat the process until the original number becomes zero.
  Compare the original number with the reversed number to check if they are equal.

## Approach:

- Prompt the user to enter a number.
- Store the user input in a variable.
- Initialize a variable to store the original number.
- Initialize a variable to store the reversed number (start with 0).
- Use a while loop to iterate until the number becomes zero.
- Extract the last digit of the number using the modulus operator (%).
- Multiply the reversed number by 10 and add the extracted digit to it.
- Divide the number by 10 to remove the last digit.
- Repeat the above steps until the number becomes zero.
- Compare the original number with the reversed number.
- Return true if they are equal (palindrome), or false if they are not.
- Display the result.

### Code

```JavaScript
function checkPalindrome(number) {
  const originalNumber = number;
  let reversedNumber = 0;

  while (number > 0) {
    const lastDigit = number % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    number = Math.floor(number / 10);
  }

  return originalNumber === reversedNumber;
}

const userInput = parseInt(prompt("Enter a number:"));
const isPalindrome = checkPalindrome(userInput);
console.log(isPalindrome);
```
