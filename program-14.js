// Write a JavaScript program to count frequency of character in string.

const countFrequency = (str) => {
  const frequency = {};

  for (let char of str) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }
  return frequency;
};

console.log(countFrequency("hello"));

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }
