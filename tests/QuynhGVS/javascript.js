// 1.Declare an array with 10 string elements
const number = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
console.log("1. An array with 10 string elements: " + number.join(", "));

// 2.Declare an array of 10 objects
const qa = [{name: "Quynh", year: 1998},
            {name: "Hien", year: 2000},
            {name: "Dinh", year: 1996},
            {name: "Dang", year: 2000},
            {name: "Thao", year: 1998},
            {name: "Van Anh", year: 1998},
            {name: "Cuong", year: 2000},
            {name: "An", year: 1998},
            {name: "Thi", year: 2000},
            {name: "Hien", year: 2000}];
let text = "";
for (i=0; qa.length > i; i++){
    text = text + "\n" + qa[i].name + "-" +qa[i].year;
};
console.log("2. An array of 10 objects:", text);

// 3.Write a function to calculate the sum of the first 10 natural numbers
const number1 = 10;
let sum1 = 0;
for(i = 0; i <= number1; i++){
  sum1 = sum1 + i;
};
console.log("3. Sum of the first 10 natural numbers: " + sum1);

// 4.Calculate the sum of positive integers
const number2 = [1, -4, 6, 8, 3];
let sum2 = 0;
for(i = 0; i < number2.length; i++){
    if (number2[i]>0){
        sum2 =  sum2 + number2[i];
    };
};
console.log("4. Sum of positive intergers: " + sum2);
