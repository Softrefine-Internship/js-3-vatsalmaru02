// Write a JavaScript program to generate all combinations of a string.

const generateCombinations = (str) => {
  const combinations = new Set();
  const length = str.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j <= length; j++) {
      combinations.add(str.slice(i, j).toLowerCase());
    }
  }
  return Array.from(combinations);
};

console.log(generateCombinations("Elephant"));


// Input: Dog
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]
