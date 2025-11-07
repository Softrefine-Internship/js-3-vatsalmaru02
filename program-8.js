// Write a JavaScript program to calculate the total value of a specific property in an array of objects.

arr = [
  {
    product: "Laptop",
    price: 1000,
    quantity: 2,
  },
  {
    product: "Phone",
    price: 600,
    quantity: 3,
  },
  {
    product: "Monitor",
    price: 250,
    quantity: 1,
  },
];

const calculateTotalValue = (array, property) => {
  return array.reduce((total, item) => total + item[property], 0);
};

const totalValue = calculateTotalValue(arr, "price");
console.log(`total value for "price":`, totalValue);

const totalQuantity = calculateTotalValue(arr, "quantity");
console.log(`total value for "quantity":`, totalQuantity);

// Input:
// arr = [
//     {
//         product: "Laptop",
//         price: 1000,
//         quantity: 2,
//     },
//     {
//         product: "Phone",
//         price: 600,
//         quantity: 3,
//     },
//     {
//         product: "Monitor",
//         price: 250,
//         quantity: 1,
//     },
// ]

// Output:
// total value for "price": 1850
// total value for "quantity": 6
