// Write a JavaScript program to convert two-dimensional array in to an object.

const array = [
  ["John", 12],
  ["Jack", 13],
  ["Matt", 14],
  ["Maxx", 15],
];

const arrayToObject = (arr) => {
  const obj = {};

  arr.forEach((item) => {
    obj[item[0]] = item[1];
  });

  return obj;
};

console.log(arrayToObject(array));

// Input:  [
//     ["John", 12],
//     ["Jack", 13],
//     ["Matt", 14],
//     ["Maxx", 15]
// ]

// Output: {
//     "John": 12,
//     "Jack": 13,
//     "Matt": 14,
//     "Maxx": 15
// }
