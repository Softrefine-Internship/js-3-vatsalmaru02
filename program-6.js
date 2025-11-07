// Write a JavaScript program to modify an object’s property in an array of objects.

arr = [
  {
    employee_id: 1,
    employee_name: "Aman",
  },
  {
    employee_id: 2,
    employee_name: "Bhargava",
  },
  {
    employee_id: 3,
    employee_name: "Chaitanya",
  },
];

const modifyObjProperty = (array, id, newName) => {
  const employee = array.find((item) => item.employee_id === id);

  if (employee) {
    employee.employee_name = newName;
  } else {
    console.log("Employee not found");
  }
  return array;
};
const updatedArr = modifyObjProperty(arr, 2, "Rahul");
console.log(updatedArr);

// Input:
// arr = [
// {
//     employee_id: 1,
//     employee_name: "Aman",
// },
// {
//     employee_id: 2,
//     employee_name: "Bhargava",
// },
// {
//     employee_id: 3,
//     employee_name: "Chaitanya",
// },
//  ]

// Output:
// [
//     { employee_id: 1, employee_name: 'Aman' },
//     { employee_id: 2, employee_name: 'Rahul' },
//     { employee_id: 3, employee_name: 'Chaitanya' }
// ]
