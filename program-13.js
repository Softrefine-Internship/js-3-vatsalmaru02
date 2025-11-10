// Write a JavaScript program to group elements by their properties.

arr = [
  { id: 1, name: "Jhon" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Alice" },
];

const groupByProperty = (array, property) => {
  return array.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj.id);
    return acc;
  }, {});
};

console.log(groupByProperty(arr, "name"));

// Input:
// arr = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Alice" },
// ]

// Output:
// { 'John' => [ 1 ], 'Alice' => [ 2, 4 ], 'Bob' => [ 3 ] }
