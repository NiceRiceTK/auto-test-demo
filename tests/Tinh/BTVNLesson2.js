// - Declare an array with 10 string elements
// - Declare an array of 10 objects	
const mang = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const obj = {firstName: "tinh", lastNam: "nguyen thi", sex: "female", status: "FA", work: "QA", team: "Prism", country: "VN", favourite: "eat, play, sleep", vv: "van van", age: "18"};

console.log("mang: ", mang);
console.log("Object: ", obj);

// - Write a function to calculate the sum of the first 10 natural numbers	
function sumFirst10NaturalNumbers() {
    let totalSum = 0;
    for (let number = 1; number <= 10; number++) {
        totalSum += number;
    }
    return totalSum;
}

// Call the function and print the result
console.log(sumFirst10NaturalNumbers());

// "const numbers = [1, -4, 6, 8, 3];
// Calculate the sum of positive integers"	

const numbers = [1, -4, 6, 8, 3];

function sumOfPositiveIntegers(arr) {
    // Filter out the positive numbers
    const positiveNumbers = arr.filter(number => number > 0);
    // Sum up the positive numbers
    const totalSum = positiveNumbers.reduce((acc, curr) => acc + curr, 0);
    return totalSum;
}

// Call the function and print the result
console.log(sumOfPositiveIntegers(numbers));

// "const originalArray = ['Apple', 'Banana', 'Orange', 'Grapes', ];
// Return array whose elements contain e"

const originalArray = ['Apple', 'Banana', 'Orange', 'Grapes', ];

function returnArrContainE(arr2) {
  
    return arr2.filter(element => element.includes('e'));
}

// Call the function and print the result
console.log(returnArrContainE(originalArray));

