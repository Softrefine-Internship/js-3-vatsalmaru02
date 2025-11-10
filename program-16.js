// Write a JavaScript program to find intersection of two sets.

let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);

const findIntersection = (set1, set2) => {
  const intersection = new Set();

  for (let item of set2) {
    if (set1.has(item)) {
      intersection.add(item);
    } else {
      continue;
    }
  }
  return intersection;
};

console.log(findIntersection(set1, set2));

// Input:
// let set1 = new Set([1, 2, 3, 4]);
// let set2 = new Set([3, 4, 5, 6]);

// Output: [3, 4]
