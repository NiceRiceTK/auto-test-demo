import { test, expect } from '@playwright/test';
import { Console } from 'console';

test('BTVN2', async ({ page }) => {

  const A = {
    A0: "13",
    A1: "1",
    A2: "2",
    A3: "3",
    A4: "4",
    A5: "5",
    A6: "7",
    A8: "3",
    A9: "3"
  };

  const B = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];

  const Oarr = [
    {A:1, B:2},
    {A:3, B:4},
    {A:5, B:6},
    {A:7, B:8},
    {A:9, B:10},
    {A:11, B:12},
    {A:13, B:14},
    {A:15, B:16},
    {A:17, B:18},
    {A:19, B:20}
  ];
  for (let x in Oarr){
    console.log('VaValue position '+ x +' is', Oarr[x]);
  }
  
  let arrO  = new Array();
  for(let i=0; i<=10; i++){
    arrO.push(A)
  }

  console.log('An array of 10 objects', arrO);

  

  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log('The sum of the first 10 natural numbers:', sum);
  let C = 0;
  for (let i = 1; i < B.length; i++) {
    C += B[i];
  }
  console.log('The sum of all element:', C);
});

test('BTVN22', async ({ page }) => {

  const B = [1, -4, 6, 8, 3];
  let C: number = 0;
  for (let i = 0; i < B.length; i++) {
    if (B[i] > 0)
      C += B[i];
  }
  console.log('sum of positive integers: ' + C);
})

test('BTVN23', async ({ page }) => {

  const originalArray: string[] = ["Apple", "Banana", "Orange", "Grapes"];
  let newarray: string[] = [];
  console.log('Array whose elements contain e is: ');
  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i].includes("e")){
      newarray.push(originalArray[i])
    }
  }
  console.log(newarray);

})