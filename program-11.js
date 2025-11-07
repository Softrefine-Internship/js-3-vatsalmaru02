// Write a JavaScript program to check a given string is an anagram of another string.

const areAnagrams = (str1, str2) => {
  const formatStr = (str) =>
    str.replace(/\s+/g, "").toLowerCase().split("").sort().join("");
  return formatStr(str1) === formatStr(str2);
};
console.log(areAnagrams("evil", "vile"));
console.log(areAnagrams("a gentleman", "elegant man"));
console.log(areAnagrams("eleven plus two", "twelve plus one"));

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true
