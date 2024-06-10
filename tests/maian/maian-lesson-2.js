// 1. Create a array
// 10 string elements
const maian = [
    "Cute",
    "Adorable",
    "Sweet",
    "Lovely",
    "Nice",
    "Great",
    "Aromatic",
    "Delightful",
    "Bonny",
    "Darling"
];

console.log("Declare an array with 10 string elements: ", maian)

// 10 Object
var array2 = [];
for (var i = 1; i <= 10; i++)
    array2.push({i});

console.log("Declare an array of 10 objects: ", array2);

//2. Create a function

function calculate() {
    let sum1 = 0;
    let i = 0;
    while(i <= 10) {
        sum1 += i;
        i++;
    }
    return sum1
};
console.log("The sum of the first 10 natural numbers: ", calculate())

//3. Function

const numbers = [1, -4, 6, 8, 3];

function calculate2() {
    let sum2= 0;
    for (let i=0; i <= numbers.length; i++) {
        if (numbers[i]>0)
            sum2 +=numbers[i];
    }
return sum2;
}
console.log("The sum of positive integers: ", calculate2())

//4. Array

const originalArray = ['Apple', 'Banana', 'Orange', 'Grapes', ];

function findE (){
    let e=[];
    for (let i in originalArray) {
        if (originalArray[i].includes("e")) {
            e.push(originalArray[i]);
        }
    }
    return e;
}
console.log("Return array whose elements contain e", findE())






/*x = 1998;
love = "Mai An";
var a = 24;
let z = Boolean;

const n = 9;
const b = [];
const c= ["a", "b", "C"];
const t = {firstname:"Mai", lastname: "An", age: 18};
const o = null;

var you = "xinh xinh"

const DoB= a + "." + n
//console.log(DoB);

const real = love + " " + you
//console.log(real)

/* if (love == "DD") {
    console.log("Number One");
} else {
    if (DoB != "24.9") {
        console.log("Cute" + "Cute");
    } else {
        console.log(love + " Cute Vjp Pro No.1 ");
    }
}*/

/*const myArray = [];

for ( let i = 0; i < 5; i++) {
    myArray.push(i), console.log(myArray);
};*/

/*const ox = [];
let i = 0;

while (i < n) {
    ox.push(i), console.log(ox);
    i++;
}*/