// 1.Declare an array with 10 string elements
const number = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
console.log("1. An array with 10 string elements: ", number);

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
console.log("2. An array of 10 objects:", qa);
// let text = "";
// for (i=0; qa.length > i; i++){
//     text = text + "\n" + qa[i].name + "-" +qa[i].year;

// 3.Write a function to calculate the sum of the first 10 natural numbers
function myFunc1(){
    const number = 10;
    let sum = 0;
    for(i = 0; i <= number; i++){
    sum = sum + i;
    };
    return sum;
};
console.log("3. Sum of the first 10 natural numbers: ", myFunc1());

// 4.Calculate the sum of positive integers
function myFunc2(){
    const number = [1, -4, 6, 8, 3];
    let sum = 0;
    for(i = 0; i < number.length; i++){
        if (number[i]>0){
            sum =  sum + number[i];
        };
    };
    return sum;
};
console.log("4. Sum of positive intergers: ", myFunc2());
