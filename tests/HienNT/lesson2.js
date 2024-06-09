// 1.
let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let B = {
    a1: "a",
    a2: "b",
    a3: "c",
    a4: "d",
    a5: "e",
    a6: "f",
    a7: "g",
    a8: "h",
    a9: "i",
    a10: "k"
}

// 2. 
let sum = 0;
for (let j = 0; j <= 10; j++) {
    sum += j;
}
console.log("Result 1:", sum);


// 3.
let sum2 = 0;
const numbers = [1, -4, 6, 8, 3];
for (let j = 0; j <= numbers.length; j++) {
    if (numbers[j] > 0) {
        sum2 += numbers[j];
    }
}
console.log("Result 2:", sum2);

// 4. 
const originalArray = ['Apple', 'Banana', 'Orange', 'Grapes',];

// C1
let output1 = output= originalArray.filter(str => str.includes("e"));
console.log("Output: ", output1);

// C2
let output2 = []
function myFunction(array,text) {
    return output2 = array.filter(word =>  word.includes(text));
  }
console.log("Output: ",myFunction(originalArray,"e"));

// C3
let output3 = []
function myFunction2(array, text) {
    for (let str of array) {
        if (str.includes(text)) {
            output3.push(str);
        }
    }
    return output3;
}
console.log("Output: ",myFunction2(originalArray, "e"));
