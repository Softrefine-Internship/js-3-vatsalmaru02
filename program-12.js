// Write a JavaScript program to get the longest string in an array.

const arr = ["Javascript", "Python", "Java", "C++", "Ruby", "Swift"];

const getLongestString = (array) => {
  let longest = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
};

console.log(getLongestString(arr));

// Input:
// arr = [
// "JavaScript",
// "Python",
// "Java",
// "C++",
// "Ruby",
// "Swift",
// ]

// Output: "JavaScript"
