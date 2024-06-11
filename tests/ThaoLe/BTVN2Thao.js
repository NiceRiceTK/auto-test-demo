//Declare an array with 10 string elements
const arr = ["06", "16", "26", "36", "46", "56", "66", "76", "86", "96"];

console.log("mang: ", arr);

//Declare an array of 10 objects
const obj = [{firstName:"Thao", lastName:"Le", age:20, staus: "Single", team:"QA"},
    {firstName:"VanAnh", lastName:"Le", age:26, staus: "Single", team:"QA"},
    {firstName:"Cuong", lastName:"Dang", age:24, staus: "Single", team:"QA"},
    {firstName:"Hung", lastName:"Ta", age:33, staus: "Single", team:"BE"},
    {firstName:"Phong", lastName:"Vu", age:26, staus: "Single", team:"BE"},
    {firstName:"Thang", lastName:"Le", age:26, staus: "Single", team:"FE"},
    {firstName:"Tuyet", lastName:"Vu", age:36, staus: "Married", team:"PM"},
    {firstName:"linh", lastName:"Nguyen", age:31, staus: "Married", team:"BA"},
    {firstName:"Nga", lastName:"Dam", age:32, staus: "Engaged", team:"DS"},
    {firstName:"Chinh", lastName:"Nguyen", age:27, staus: "Engaged", team:"BE"},
];

console.log("Object: ", obj);


//Write a function to calculate the sum of the first 10 natural numbers
function sumFirst10NaturalNumbers() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    return sum;
}
let result = sumFirst10NaturalNumbers();
console.log("Sum of the first 10 natural numbers:", result);

console.log("")


//Calculate the sum of positive integers
const numbers = [1, -4, 6, 8, 3];

function sumOfPositiveIntegers(){
let sum = 0;
let i = 0;
    while (i < numbers.length) {
        if (numbers[i] > 0){
            sum += numbers[i] ;
        }
         i++;
      }
    return sum;
}
console.log("Sum of positive integers", sumOfPositiveIntegers());