function hasDuplicate(arr) {
  let arrSet = new Set();
  let hasDuplicate = false;

  for (let element of arr) {
    if (!arrSet.has(element)) {
      arrSet.add(element);
    } else {
      hasDuplicate = true;
      break;
    }
  }

  return hasDuplicate;
}

console.log(hasDuplicate([1, 2, 3, 4, 3, 9]));
