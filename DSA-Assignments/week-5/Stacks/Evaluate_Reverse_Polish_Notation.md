## Problem Name:

Evaluate Reverse Polish Notation

## Problem Statement:

Evaluate the value of an arithmetic expression in
Reverse Polish Notation (RPN). The expression is
given as an array of tokens where each token can be
an operator or an integer operand.

The valid operators are +, -, \*, and /. Each operand
and operator is separated by a space.

## Input Format:

Input:
The program should prompt the user to enter
an array of tokens in RPN format (space separated).

## Output Format:

Output:
The program should display the
computed value of the expression.

## Test Case 1:

sample Input
`2 3 4 \* +`

Sample Output
`14`

## Test Case 2:

Sample input:
`1 2 + 3 4 5 _ + _`

Sample output:
`27`

## Level: Medium

## Hints:

- Use a stack to keep track of the operands.
  Iterate through each token in the array.
  If the token is an operand (integer), push it onto
  the stack

- If the token is an operator (+, -, \*, /), pop two
  operands from the stack, apply the operator,
  and push the result back onto the stack.
  After iterating through all the tokens, the stack
  should contain the final result.

## Approach:

- Create an empty stack.
- Prompt the user to enter an array of tokens in RPN format.
- Split the input string into an array of tokens.
- Iterate through each token in the array.
- If the token is an operand (integer), convert it to a number and push it onto the stack.
- If the token is an operator (+, -, \*, /), pop two operands from the stack, apply the operator, and push the result back onto the stack.
- After iterating through all the tokens, the stack should contain the final result.
- Pop the result from the stack and display it.

### Code

```JavaScript
function evaluateRPN(tokens) {
  const stack = [];

  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      switch (token) {
        case "+":
          stack.push(operand1 + operand2);
          break;
        case "-":
          stack.push(operand1 - operand2);
          break;
        case "*":
          stack.push(operand1 * operand2);
          break;
        case "/":
          stack.push(Math.trunc(operand1 / operand2));
          break;
      }
    }
  }

  return stack.pop();
}

// Test Case 1
const input1 = "2 3 4 * +";
const tokens1 = input1.split(" ");
const output1 = evaluateRPN(tokens1);
console.log(output1); // Output: 14

// Test Case 2
const input2 = "1 2 + 3 4 5 * + *";
const tokens2 = input2.split(" ");
const output2 = evaluateRPN(tokens2);
console.log(output2); // Output: 69
```
