x = "ABC";
var y = 456.1323;
let z = true;
let a = false;
const b = 1;

a = false;
// b = 123; //fail luc run

const d = ["1","2","3","d","e","f","g","h","i","j"];
const e = {firstName: d, lastName:"Doe", age:50, eyeColor:"blue"};

// o //undefined
const r = null;

const p = d + b;
// console.log('GI CHA DC', e);

const comparation = (6 > 6) //false
const comparation2 = (5 < 6) //true
const comparation3 = (6 >= 6) //true
const comparation4 = ("hai" >= 2) // false

// console.log('compare 1', comparation)
// console.log('compare 2', comparation2)
// console.log('compare 3', comparation3)
// console.log('compare 4', comparation4)

// let comp1 = 10;
// let comp2 = 20;
// if (comp1 > comp2) {
//     console.log("dieu kien dc thoa man");
// } else {
//     console.log("dieu kien ko dc thoa man");
// }

function test (param1, param2) {
    console.log(param1);
    console.log(param2);
    return param1 + param2;
}

const test2 = (param1, param2) => {
    console.log("AAAAAAA");
    return param1 + param2;}

console.log("result: " + test("JKL",123));
console.log(test2("JKL", 123))
// test("ABC", 456);