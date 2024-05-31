import { test, expect } from '@playwright/test';

test('BTVN2', async ({ page }) => {
  
  const A = {
    A0:"13",
    A1:"1",
    A2:"2",
    A3:"3",
    A4:"4",
    A5:"5",
    A6:"7",
    A8:"3",
    A9:"3"
  };

  const B =[1,2,3,4,5,6,1,2,3,4];
  
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log('The sum of the first 10 natural numbers:', sum);


});

test('BTVN22', async ({ page }) => {
  
  const B =[1,2,3,4,5,6,1,2,3,4];

let C:number = 0;
for (let i = 0 ; i < B.length; i++){
  C += B[i];
}
console.log('calculate the sum of the first 10 element of the arrary: ' + C);

})