// Write a JavaScript program to check subset.

let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4]);
let set3 = new Set([3, 4]);
let set4 = new Set([1, 2, 3, 4, 5]);

const isSubset = (set, subset) => {
  for (let item of subset) {
    if (!set.has(item)) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(isSubset(set1, set2));
console.log(isSubset(set3, set4));

// Example 1:
// Input:
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

// Output: false

// Example 2:
// Input:
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true
