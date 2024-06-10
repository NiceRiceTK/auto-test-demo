function sum10(){
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  return sum
}
console.log('The sum of the first 10 natural numbers:', sum10());

const B = [1, -4, 6, 8, 3];
function positiveintegers(){
  let sum=0;
  let C = B.filter(a => a>0);
  for (let i = 0; i < C.length; i++) {
      sum += C[i];
  }
  return sum;
}
console.log('sum of positive integers: ', positiveintegers());

const B2 = [1,2,3,4,5,6,7,8,9,10];

function evennumber(){
  let arr = [];
  for (let i = 0; i < B2.length; i++) {
    if (B2[i]%2 == 0){
      arr.push(B2[i])
    }
  }
  return arr
}
console.log('Array even number: ', evennumber());



const readline = require('node:readline');// khai bao readLine tham chieu den module node:readline

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); //  khai bao 1 bien dung de nhan lieu vao va tra ket qua ra

rl.question('Enter a positive integer:', name => { //question()  duoc su dung de dat cau hoi va in ra cau tra loi
    let sum = 0
    for (let i = 1; i <= parseInt(name); i++) {
        sum += i;
      };
      console.log("The sum of natural numbers: " + sum);
  rl.close();
});



