const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a positive integer:', name => {
    let sum = 0
    for (let i = 1; i <= parseInt(name); i++) {
        sum += i;
      };
      console.log("The sum of natural numbers: " + sum);
  rl.close();
});
