// Write a JavaScript program to count number of occurrences of repeated names in an array of objects.

arr = [
  {
    employeeName: "Ram",
    employeeId: 23,
  },
  {
    employeeName: "Shyam",
    employeeId: 24,
  },
  {
    employeeName: "Ram",
    employeeId: 21,
  },
  {
    employeeName: "Ram",
    employeeId: 25,
  },
  {
    employeeName: "Kisan",
    employeeId: 22,
  },
  {
    employeeName: "Shyam",
    employeeId: 20,
  },
];

const countOccurrences = (array) => {
  const nameCount = {};
  array.forEach((item) => {
    if (nameCount[item.employeeName]) {
      nameCount[item.employeeName]++;
    } else {
      nameCount[item.employeeName] = 1;
    }
  });
  const result = [];
  for (const name in nameCount) {
    result.push({ employeeName: name, occurrences: nameCount[name] });
  }
  return result;
};

const result = countOccurrences(arr);
console.log(result);

// Input:
// arr = [
//     {
//        employeeName: "Ram",
//        employeeId: 23
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 24
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 21
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 25
//     },
//     {
//        employeeName: "Kisan",
//        employeeId: 22
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 20
//     }
//  ]

// Output:
// [
//     {employeeName: "Ram", occurrences: 3},
//     {employeeName: "Shyam", occurrences: 2},
//     {employeeName: "Kisan", occurrences:  1}
// ]
