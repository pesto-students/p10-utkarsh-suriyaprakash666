function vowelCount(vowelStr) {
  let isVowel = (char) => "aeiou".includes(char);
  let vowelMap = new Map();

  for (let char of vowelStr) {
    let lowerCaseCharacter = char.toLowerCase();
    if (isVowel(lowerCaseCharacter)) {
      if (vowelMap.has(lowerCaseCharacter)) {
        vowelMap.set(lowerCaseCharacter, vowelMap.get(lowerCaseCharacter) + 1);
      } else {
        vowelMap.set(lowerCaseCharacter, 1);
      }
    }
  }

  return vowelMap;
}

console.log(vowelCount("SurIyA pRakAsH"));
