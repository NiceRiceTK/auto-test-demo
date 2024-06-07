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
