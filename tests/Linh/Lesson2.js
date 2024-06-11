// Create a array 
  /// Declare an array with 10 string elements
const Link = ["1","2","3","4","5","6","7","8","9","10"];
console.log('Declare Variables', Link);
  /// Declare an array of 10 objects
const Color = [
    { name: "black", value: 1 },
    { name: "green", value: 2 },
    { name: "red", value: 3 },
    { name: "white", value: 4 },
    { name: "grey", value: 5 },
    { name: "blue", value: 6 },
    { name: "brown", value: 7 },
    { name: "violet", value: 8 },
    { name: "yellow", value: 9 },
    { name: "purple", value: 10 }
];
console.log('Declare Variables', Color);


// Write a function to calculate the sum of the first 10 natural numbers
function sumOfFirstTenNaturalNumbers() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
      sum += i;
  }
  return sum;
}
let result = sumOfFirstTenNaturalNumbers();
console.log("Sum of the first 10 natural numbers:", result);


// Calculate the sum of positive integers
const numbers = [1, -4, 6, 8, 3];

function sumOfPositiveIntegers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
          sum += numbers[i];
      }
  }
  return sum;
}

const sumOfPositives = sumOfPositiveIntegers(numbers);
console.log("Sum of positive integers:", sumOfPositives);
