// Write a JavaScript program to find the longest word within the string.

const findLongestWord = (str) => {
  const words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    } else {
      continue;
    }
  }
  return longestWord;
};

console.log(
  findLongestWord("This is a demo String find the largest word from it")
);

// Input: "This is a demo String find the largest word from it"
// Output: "largest"
