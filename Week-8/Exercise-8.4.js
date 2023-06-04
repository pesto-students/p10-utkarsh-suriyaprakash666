function isBalanced(expression) {
  const stack = [];
  const openingBrackets = ["(", "[", "{"];
  const closingBrackets = [")", "]", "}"];

  for (let i = 0; i < expression.length; i++) {
    const bracket = expression[i];

    if (openingBrackets.includes(bracket)) {
      stack.push(bracket);
    } else if (closingBrackets.includes(bracket)) {
      const matchingOpeningBracket =
        openingBrackets[closingBrackets.indexOf(bracket)];

      if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const expression1 = "[()]{}{()()}";
console.log(isBalanced(expression1)); // Output: true

const expression2 = "[(])";
console.log(isBalanced(expression2)); // Output: false
