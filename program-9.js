// Write a JavaScript program to generate all combinations of a string.

const generateCombinations = (str) => {
  const combinations = [];
  const length = str.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j <= length; j++) {
      combinations.push(str.slice(i, j).toLowerCase());
    }
  }
  return combinations;
};

console.log(generateCombinations("Dog"));
// Input: Dog
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]
