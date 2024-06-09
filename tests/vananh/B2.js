//Array 10 element 
const cars = ["Cuong", "VanAnh", "Thao", "Chi Tuyet", "Chi Luong", "Chi jun", "Anh Hung", "Anh Phong", "Sen Đam", "Thang Le"];
console.log(cars);
// Array 10 object
const person = [{ firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
{ firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
{ firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
{ firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
{ firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
{ firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
{ firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
{ firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
{ firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
{ firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }];
console.log(person);
// Write a function to calculate the sum of the first 10 natural numbers
function sum10naturalnumbers() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    return sum;
}
console.log('the sum of the first 10 natural numbers', sum10naturalnumbers());
// Calculate the sum of positive integers
const numbers = [1, -4, 6, 8, 3];
function positiveintegers() {
    let sum = 0;
    for (let x in numbers) {
        if(numbers[x]>0)
        sum += numbers[x];
    }
    return sum;
}
console.log('Calculate the sum of positive integers',positiveintegers());
//Return array whose elements contain e
const originalArray = ['Apple', 'Banana', 'Orange', 'Grapes', ];
function elementscontaine(){
    let array=[];
    for (let x in originalArray) {
        if(originalArray[x].includes("e"))
            array.push(originalArray[x])
    }
    return array;
}
console.log('array whose elements contain e',elementscontaine());
